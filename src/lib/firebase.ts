// firebase configuration and initialization
import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  Timestamp,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

// firebase config from env vars
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// initialize firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

// collection names
const ISSUES_COLLECTION = "github_issues";

// type for issue or pull request
export type IssueType = "issue" | "pr";

// issue document structure for firestore (input - what we save)
export interface IssueToCache {
  id: number;
  number: number;
  title: string;
  body: string | null;
  html_url: string;
  state: string;
  created_at: string;
  updated_at: string;
  comments: number;
  labels: Array<{
    id: number;
    name: string;
    color: string;
    description: string | null;
  }>;
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  repo_name: string;
  org_name: string;
  repository_url?: string;
  type: IssueType; // issue or pr
}

// cached issue from firestore (output - what we read)
export interface CachedIssue extends IssueToCache {
  cached_at?: Timestamp;
}

// save issues to firestore (checks if issue exists before writing)
export async function cacheIssues(issues: IssueToCache[]): Promise<void> {
  if (issues.length === 0) return;

  console.log(`Checking and caching ${issues.length} issues to Firestore...`);

  try {
    let newCount = 0;
    let updatedCount = 0;

    const batch = issues.map(async (issue) => {
      const docRef = doc(db, ISSUES_COLLECTION, issue.id.toString());
      const existingDoc = await getDoc(docRef);

      if (existingDoc.exists()) {
        // only update if the issue has been updated
        const existing = existingDoc.data() as CachedIssue;
        if (existing.updated_at !== issue.updated_at) {
          await setDoc(docRef, { ...issue, cached_at: Timestamp.now() });
          updatedCount++;
        }
      } else {
        // new issue, save it
        await setDoc(docRef, { ...issue, cached_at: Timestamp.now() });
        newCount++;
      }
    });

    await Promise.all(batch);
    console.log(`Cached: ${newCount} new, ${updatedCount} updated`);
  } catch (error) {
    console.error("Error caching issues to Firestore:", error);
    throw error;
  }
}

// pagination result type
export interface PaginatedResult {
  issues: CachedIssue[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
  hasMore: boolean;
}

// fetch cached issues for an org with pagination
export async function getCachedIssues(
  orgName: string,
  pageSize: number = 20,
  lastDocument?: QueryDocumentSnapshot<DocumentData> | null
): Promise<PaginatedResult> {
  try {
    const issuesRef = collection(db, ISSUES_COLLECTION);

    let q;
    if (lastDocument) {
      q = query(
        issuesRef,
        where("org_name", "==", orgName),
        where("state", "==", "open"),
        orderBy("updated_at", "desc"),
        startAfter(lastDocument),
        limit(pageSize)
      );
    } else {
      q = query(
        issuesRef,
        where("org_name", "==", orgName),
        where("state", "==", "open"),
        orderBy("updated_at", "desc"),
        limit(pageSize)
      );
    }

    const snapshot = await getDocs(q);
    const issues = snapshot.docs.map((doc) => doc.data() as CachedIssue);
    const lastDoc = snapshot.docs[snapshot.docs.length - 1] || null;

    return {
      issues,
      lastDoc,
      hasMore: snapshot.docs.length === pageSize,
    };
  } catch (error) {
    console.error("Error fetching cached issues:", error);
    return { issues: [], lastDoc: null, hasMore: false };
  }
}

// filter options for fetching issues
export interface IssueFilters {
  orgNames?: string[];
  type?: IssueType | "all";
}

// fetch all cached issues with pagination (for multiple orgs or all)
export async function getAllCachedIssues(
  pageSize: number = 20,
  lastDocument?: QueryDocumentSnapshot<DocumentData> | null,
  filters?: IssueFilters
): Promise<PaginatedResult> {
  try {
    const issuesRef = collection(db, ISSUES_COLLECTION);

    // simple query: just order by updated_at desc and limit
    // filter state and type client-side to avoid composite index requirements
    let q;
    if (lastDocument) {
      q = query(
        issuesRef,
        orderBy("updated_at", "desc"),
        startAfter(lastDocument),
        limit(pageSize * 3) // fetch more to account for filtering
      );
    } else {
      q = query(
        issuesRef,
        orderBy("updated_at", "desc"),
        limit(pageSize * 3) // fetch more to account for filtering
      );
    }

    const snapshot = await getDocs(q);
    let issues = snapshot.docs.map((doc) => doc.data() as CachedIssue);

    // filter client-side
    issues = issues.filter((issue) => {
      // filter by state
      if (issue.state !== "open") return false;

      // filter by org if specified
      if (filters?.orgNames && filters.orgNames.length > 0) {
        if (!filters.orgNames.includes(issue.org_name)) return false;
      }

      // filter by type if specified
      if (filters?.type && filters.type !== "all") {
        if (issue.type !== filters.type) return false;
      }

      return true;
    });

    // take only pageSize results
    const paginatedIssues = issues.slice(0, pageSize);
    const lastDoc = snapshot.docs[snapshot.docs.length - 1] || null;

    return {
      issues: paginatedIssues,
      lastDoc,
      hasMore: issues.length > pageSize || snapshot.docs.length === pageSize * 3,
    };
  } catch (error) {
    console.error("Error fetching all cached issues:", error);
    return { issues: [], lastDoc: null, hasMore: false };
  }
}

export { db };
