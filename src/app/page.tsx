"use client";

import React from "react";
import Image from "next/image";
import {
  Twitter,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  X,
  ArrowRight,
} from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Toaster, toast } from "react-hot-toast";

import ProfileImage from "@/assets/images/face.jpeg";
import SolanaBg from "@/assets/tech-bg/solana-bg.jpg";
import SolidityBg from "@/assets/tech-bg/ethereum-bg.jpg";
import RustBg from "@/assets/tech-bg/rust-bg.jpg";
import GoBg from "@/assets/tech-bg/go-bg.jpg";
import FrontendBg from "@/assets/tech-bg/frontend-bg.jpg";

type CardVariant =
  | "solana"
  | "solidity"
  | "rust"
  | "go"
  | "frontend"
  | "default";

export default function Home() {
  const [blockchainDialogOpen, setBlockchainDialogOpen] = React.useState(false);
  const [frontendDialogOpen, setFrontendDialogOpen] = React.useState(false);
  const [solanaDialogOpen, setSolanaDialogOpen] = React.useState(false);
  const [certificationsDialogOpen, setCertificationsDialogOpen] =
    React.useState(false);

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-black text-white">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Contact - Fixed layout */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4 p-4 bg-zinc-900">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-6">
              <SocialIcon
                href="https://twitter.com/bluntbrain_web3"
                icon={<Twitter size={24} />}
                label="Twitter"
              />
              <SocialIcon
                href="https://github.com/bluntbrain"
                icon={<Github size={24} />}
                label="GitHub"
              />
              <SocialIcon
                href="https://linkedin.com/in/ishanl"
                icon={<Linkedin size={24} />}
                label="LinkedIn"
              />
            </div>
            <CopyEmailButton email="ishan.lakhwani@gmail.com" />
          </div>
        </Card>

        {/* Header */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Hi, I&apos;m Ishan
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Senior Software Engineer with 5+ years of experience in leading
            teams and developing high-quality applications using React.js, React
            Native & Node.js.
          </p>
        </Card>

        {/* Profile Image */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-1 p-0 aspect-square bg-zinc-900">
          <Image
            src={ProfileImage}
            alt="Ishan"
            layout="responsive"
            width={400}
            height={400}
            className="object-cover rounded-xl"
          />
        </Card>

        {/* Skills */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-2 py-2 px-4 bg-zinc-900">
          <h2 className="text-xl sm:text-2xl font-bold mt-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <SkillSet
              title="Frontend"
              skills={[
                "React.js",
                "React Native",
                "Next.js",
                "Redux",
                "Android (Java)",
                "iOS (Swift)",
              ]}
            />
            <SkillSet
              title="Backend"
              skills={["Rust", "GO", "Node.js", "MongoDB", "Heroku", "AWS"]}
            />
            <SkillSet
              title="Blockchain"
              skills={[
                "Solidity",
                "Hardhat",
                "Truffle",
                "Web3.js",
                "Ethers.js",
                "Smart Contracts",
              ]}
            />
            <SkillSet
              title="Tools"
              skills={[
                "Git",
                "Figma",
                "Amplitude",
                "Clevertap",
                "Sentry",
                "Codepush",
              ]}
            />
          </div>
        </Card>

        {/* Frontend Projects */}
        <Card
          className="col-span-1 sm:col-span-2 bg-zinc-900"
          onClick={() => setFrontendDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setFrontendDialogOpen(true)} />
          }
          variant="frontend"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Frontend Projects
          </h2>
          <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
            <li>Next.js Movie Ballot App</li>
            <li>Coupl App (React Native)</li>
            <li>Cryo Circuit App (React Native)</li>
            <li>Swipable News Headlines App (React Native)</li>
            <li>Location-based Chat Application (React Native)</li>
          </ul>
        </Card>

        {/* Rust Experience */}
        <Card className="col-span-1 sm:col-span-2 bg-zinc-900" variant="rust">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Rust Experience
          </h2>
          <p className="mb-4 text-sm sm:text-base">
            Mastered #Rust with not one, but TWO certifications by Nathan
            Stocks! 🚀
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>Memory Safety: Tackled common programming pitfalls</li>
            <li>
              Concurrency: Built-in support for efficient concurrent programming
            </li>
            <li>Performance: Rust&apos;s speed trumps that of Javascript</li>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.udemy.com/certificate/UC-144bbd90-4f91-4b5a-a1f0-2b26b3d507aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} />
                <span>View Certificate </span>
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-c839d9fd-bd30-458d-b431-0213c2cc8c3f/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} />
                <span>View Certificate 2</span>
              </a>
            </div>
          </ul>
        </Card>

        {/* Blockchain Experience */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
          onClick={() => setBlockchainDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setBlockchainDialogOpen(true)} />
          }
          variant="solidity"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Solidity & EVM</h2>
          <p className="mb-4 text-sm sm:text-base">
            I&apos;ve been involved with blockchain companies since last 2+
            years
          </p>
        </Card>

        {/* Solana Expert */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
          onClick={() => setSolanaDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setSolanaDialogOpen(true)} />
          }
          variant="solana"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Solana</h2>
          <p className="mb-4 text-sm sm:text-base">
            I&apos;ve made quite a few projects in Solana, finally found time to
            upload it :)
          </p>
        </Card>

        {/* GO Experience */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-2 bg-zinc-900"
          variant="go"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">GO Experience</h2>
          <p className="mb-4 text-sm sm:text-base">
            Worked on Micro-service Architecture in GO: Developed a distributed
            application with micro services, Utilized JSON, RPC, and gRPC for
            inter-service communication, Implemented event-driven architecture
            with RabbitMQ, Deployed on Docker Swarm and Kubernetes
          </p>
        </Card>

        {/* Work Experience */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <WorkExperience
              title="Co-founder"
              company="Krane Apps, Bangalore, India"
              period="February 2023 - Present"
              description="Lead a team of 10, focusing on Rust and Go for backend and React for frontend."
            />
            <WorkExperience
              title="iOS Team Lead (React Native)"
              company="Jar, Bangalore"
              period="February 2022 - February 2023"
              description="Led the iOS team, mentored junior developers, and conducted peer reviews."
            />
            <WorkExperience
              title="Software Engineer"
              company="Fleek, Bangalore"
              period="January 2020 - February 2022"
              description="Developed PWA in React.js and flagship app in React Native."
            />
          </div>
        </Card>

        {/* Certifications */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900"
          onClick={() => setCertificationsDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setCertificationsDialogOpen(true)} />
          }
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
            <li>Ultimate Rust Crash Course by Nathan Stocks</li>
            <li>Rust Intermediate Concepts by Nathan Stocks</li>
            <li>GO The Complete Guide by Maximilian Schwarzmüller</li>
            <li>React Native : Advanced Concepts by Stephen Grider</li>
            <li>React + Hooks by Stephen Grider</li>
          </ul>
        </Card>

        {/* Achievements */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900 p-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 px-4 py-2">
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all">
              <h3 className="font-bold text-lg mb-2 text-blue-400">
                StarkHack Winner 🏆
              </h3>
              <p className="text-gray-400 mb-3">
                Won $4,000 for developing Chain Monsters, an innovative
                blockchain-based game
              </p>
              <div className="flex gap-2">
                <a
                  href="https://ethglobal.com/showcase/chain-monsters-o26dw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>ETH Global</span>
                </a>
                <a
                  href="https://github.com/Krane-Apps/chain-monsters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://chain-monsters.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all">
              <h3 className="font-bold text-lg mb-2 text-purple-400">
                SuperHack Winner 🚀
              </h3>
              <p className="text-gray-400 mb-3">
                Secured $10,000 prize for Repo Reward, a revolutionary developer
                incentivization platform
              </p>
              <div className="flex gap-4">
                <a
                  href="https://ethglobal.com/showcase/repo-rewards-su0bh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>ETH Global</span>
                </a>
                <a
                  href="https://github.com/Krane-Apps/repo-rewards-superhack-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://repo-rewards.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">
                ETH Singapore 🌟
              </h3>
              <p className="text-gray-400 mb-3">
                Developed Inspector AI, a Chrome extension that provides
                AI-generated safety reports for smart contracts
              </p>
              <div className="flex gap-4">
                <a
                  href="https://ethglobal.com/showcase/inspector-ai-s5mw5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>ETH Global</span>
                </a>
                <a
                  href="https://github.com/Krane-Apps/inspector-ai-eth-singapore-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/inspectorai/kbaegdknaifjgibhhehalanldkanclkb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Render ViewAllDialog components */}
      <ViewAllDialog
        title="Blockchain Projects"
        items={blockchainProjects}
        open={blockchainDialogOpen}
        onOpenChange={setBlockchainDialogOpen}
      />
      <ViewAllDialog
        title="Frontend Projects"
        items={frontendProjects}
        open={frontendDialogOpen}
        onOpenChange={setFrontendDialogOpen}
      />
      <ViewAllDialog
        title="Solana Projects"
        items={solanaProjects}
        open={solanaDialogOpen}
        onOpenChange={setSolanaDialogOpen}
      />
      <ViewAllDialog
        title="All Certifications"
        items={certifications}
        open={certificationsDialogOpen}
        onOpenChange={setCertificationsDialogOpen}
      />
    </div>
  );
}

function Card({
  children,
  className,
  viewAllButton,
  onClick,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  viewAllButton?: React.ReactNode;
  onClick?: () => void;
  variant?: CardVariant;
}) {
  const bgImage = {
    solana: SolanaBg,
    solidity: SolidityBg,
    rust: RustBg,
    go: GoBg,
    frontend: FrontendBg,
    default: null,
  }[variant];

  return (
    <div
      className={cn(
        "bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative overflow-hidden rounded-3xl border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl transition-all duration-300 cursor-pointer group ",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {bgImage && (
        <div className="absolute inset-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          <Image
            src={bgImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50 z-10" />
        </div>
      )}
      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-1">{children}</div>
        {viewAllButton}
      </div>
    </div>
  );
}

interface SkillSetProps {
  title: string;
  skills: string[];
}

function SkillSet({ title, skills }: SkillSetProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="flex flex-col space-y-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-zinc-900 text-white w-full"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

interface WorkExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

function WorkExperience({
  title,
  company,
  period,
  description,
}: WorkExperienceProps) {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 mb-1">{company}</p>
      <p className="text-gray-500 text-sm mb-2">{period}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

interface CopyEmailButtonProps {
  email: string;
}

function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!", {
      style: {
        background: "rgb(20, 20, 20)",
        color: "#fff",
        border: "1px solid rgb(30, 30, 30)",
      },
      icon: "📧",
      duration: 2000,
    });
  };

  return (
    <button
      onClick={copyEmail}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-sm"
    >
      <Mail size={16} />
      <span>Copy Email</span>
    </button>
  );
}

interface ViewAllDialogProps {
  title: string;
  items: Array<{
    name: string;
    description: string;
    github?: string;
    live?: string;
  }>;
}

function ViewAllDialog({
  title,
  items,
  open,
  onOpenChange,
}: ViewAllDialogProps & {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed inset-x-0 bottom-0 h-[95vh] !max-w-full !rounded-t-2xl !rounded-b-none sm:!rounded-t-2xl animate-in data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom">
        <div className="absolute left-1/2 top-2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="h-1.5 w-12 rounded-full bg-gray-300" />
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full p-2 bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <DialogHeader className="mt-16">
          <DialogTitle className="text-center text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 overflow-y-auto max-h-[calc(95vh-8rem)] pr-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-6 p-4 bg-[rgb(20,20,20)] rounded-xl hover:bg-[rgb(30,30,30)] transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-400 mb-3">{item.description}</p>
              <div className="flex gap-4">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                )}
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    <span>Live App</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const solanaProjects = [
  {
    name: "NFT Project",
    description: "Full web-app to sell custom NFTs",
    github: "https://github.com/yourusername/nft-project",
    live: "https://nft-project.example.com",
  },
  {
    name: "DEFI Project",
    description: "Launch go Fund me as a web3 app",
    github: "https://github.com/yourusername/defi-project",
    live: "https://defi-project.example.com",
  },
  {
    name: "DApp Project",
    description: "Web3 version of Giphy",
    github: "https://github.com/yourusername/dapp-project",
    live: "https://dapp-project.example.com",
  },
  {
    name: "CHAINLINK Project",
    description: "Retrieved real-time exchange rates with Solana",
    github: "https://github.com/yourusername/chainlink-project",
    live: "https://chainlink-project.example.com",
  },
];

const blockchainProjects = [
  {
    name: "Redstone Blockchain Data Explorer",
    description:
      "Web-based interface to explore and display data from the Redstone Holesky Blockchain, specifically focusing on game data. Utilizing the MUD Indexer for data retrieval, it features a PostgreSQL database for storage, a Node.js backend for data manipulation and API endpoints, and a simple frontend for user interaction.",
    github: "https://github.com/bluntbrain/redstone-blockchain-data-explorer",
    live: "https://redstone-explorer.example.com",
  },
  {
    name: "Decentralised Voting dApp",
    description:
      "Led the frontend development and smart contract deployment for this project, using React.js, Firebase, and Solidity. Successfully deployed the smart contract on Polygon Mumbai Testnet, enabling secure and transparent voting that reduces voting costs by up to 80% compared to traditional methods. Technologies used: Solidity,  Hardhat, Polygon (Mumbai Testnet),  React.js",
    github: "https://github.com/bluntbrain/voting-app-eth-india",
    live: "https://devfolio.co/projects/ballet-on-chain-9d77",
  },
  {
    name: "Domain service on Polygon L2",
    description:
      "A DApp on polygon PoS chain(Mumbai Testnet) where user can buy their own domain. Users can connect their metamask wallet to pay the gas fees and domain fees. The domain name with owner's address can be viewed on OpenSea NFT marketplace testnet.",
    github: "https://github.com/bluntbrain/domain-service-on-polygon-L2",
    live: "https://domain-service-polygon.web.app/",
  },
  {
    name: "Custom ERC-20 and ERC-721 Tokens",
    description:
      "Created ERC20 and ERC721 Tokens using openzeppelin and Deployed to rinkeby testnet. Published and verified on etherscan. ERC-20 is for fungible tokens with identical value per unit, ERC-721 is for unique, indivisible tokens representing ownership of assets, and ERC-1155 is a multi-token standard allowing for both fungible and non-fungible tokens within a single contract, optimizing transaction and storage efficiency. Mintable NFTs ",
    github: "https://github.com/bluntbrain/custom-ERC20-token",
    live: "https://goerli.etherscan.io/tx/0xcda0b9c1f1ee0f3c3c2162fcfe249bd9f7012a48f177dc069aedf6347c272dbf",
  },
];

const frontendProjects = [
  {
    name: "Next.js Movie Ballot App",
    description:
      "Next.js Movie Ballot App is a web application designed for users to participate in movie award voting. This app allows users to browse different award categories, view nominees, and cast their votes. Additionally, users can view voting results in real-time through a modal window.",
    github: "https://github.com/bluntbrain/next-js-movie-ballot-app",
    live: "https://next-js-movie-ballot-app.vercel.app/",
  },
  {
    name: "Coupl App",
    description:
      "Led the end-to-end development of the app from inception to launch, successfully acquiring more than 10,000 users from scratch within just 2 months post-launch. Coupl is India's first neobank designed for couples, offering a joint wallet and linked cards to facilitate easy pooling and spending of money for shared expenses without the need for a traditional joint account. It provides a convenient solution for managing finances together, aimed at fostering financial savvy among modern couples. The platform emphasizes ease of use, inclusivity, and rewards for spending together, making it appealing for couples at any stage of their relationship.",
    live: "https://play.google.com/store/apps/details?id=com.couplapp",
  },
  {
    name: "Swipable News Headlines App (React Native)",
    description:
      "This React Native app fetches and displays the top news headlines, allowing users to refresh the list, pin their favorite headlines, and delete the ones they're not interested in. It uses local storage to cache headlines for offline access and introduces new headlines at specified intervals.",
    github: "https://github.com/bluntbrain/swipeable-news-app",
  },
  {
    name: "Location-based Chat Application (React Native)",
    description:
      "This is a location-based chat application built with React Native. It allows users to see other users on a map and start a chat conversation by selecting a user marker on the map. Technologies Used: React Native, React Context API, Mapbox, React Native Gifted Chat",
    github: "https://github.com/bluntbrain/react-native-messenger-library",
  },
];

const certifications = [
  { name: "Ultimate Rust Crash Course", description: "By Nathan Stocks" },
  { name: "Rust Intermediate Concepts", description: "By Nathan Stocks" },
  { name: "GO The Complete Guide", description: "By Maximilian Schwarzmüller" },
  {
    name: "React Native : Advanced Concepts",
    description: "By Stephen Grider",
  },
  { name: "React + Hooks", description: "By Stephen Grider" },
  {
    name: "Computer Vision OpenCV in Python with Deep Learning",
    description:
      "Covering image manipulations, segmentation, and object detection",
  },
  { name: "Core Java", description: "By Internshala" },
  { name: "Android App Development", description: "By Internshala" },
  {
    name: "UI/UX Design with Figma and AdobeXD",
    description: "By Internshala",
  },
];

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string;
}

function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300",
        "hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400",
        "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105",
        "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

const Dialog = DialogPrimitive.Root;

const DialogPortal = ({
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props}>
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

function ViewAllButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group z-30 self-end"
    >
      <span className="text-sm font-medium underline underline-offset-4">
        View All
      </span>
      <ArrowRight
        size={16}
        className="transform transition-transform group-hover:translate-x-1"
      />
    </button>
  );
}
