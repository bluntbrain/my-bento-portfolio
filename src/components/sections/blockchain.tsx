import React from "react";
import { Card } from "../ui/card";
import { ExternalLink, Github } from "lucide-react";

export function Blockchain() {
  const evmProjects = [
    {
      title: "Decentralized Stablecoin System",
      description:
        "A decentralized, multi-collateral stablecoin system pegged 1:1 with USD. Features WETH/WBTC collateral, Chainlink price feeds, 150% minimum collateralization ratio, and automatic liquidations. Built with gas-optimized smart contracts and comprehensive testing in Foundry.",
      tags: ["DeFi", "Stablecoin", "Foundry"],
      githubLink: "https://github.com/bluntbrain/stable-coin-foundry",
      techStack: ["Solidity", "Foundry", "Chainlink", "OpenZeppelin"],
    },
    {
      title: "dx.fun",
      description:
        "A sophisticated dApp built on Base chain featuring token creation, live chat, comments tab, and live token chart integration with Dextools. Implemented real-time on-chain data fetching for buy/sell events to enhance user interaction.",
      tags: ["Next.js", "Base Chain", "DeFi"],
      liveLink: "https://dx.fun",
      techStack: ["Solidity", "Next.js", "Ethers.js", "Base Chain"],
    },
    {
      title: "Glitter Explorer & Multi-Axis Charts",
      description:
        "Developed a comprehensive blockchain explorer for monitoring transactions and token details across multiple chains. Supports USDC, SOL, xSOL, XGLI, ALGO, and xALGO. Implemented multi-axis charting leading to 70% increase in user engagement.",
      tags: ["Explorer", "Charts", "Multi-Chain"],
      liveLink: "https://explorer.example.com",
      demoLink: "https://charts.example.com",
      techStack: ["React.js", "Web3.js", "Chart.js", "GraphQL"],
    },
    {
      title: "DxSale Launchpad",
      description:
        "Built a comprehensive DeFi platform that streamlines token launches with integrated tools for token minting, fundraising, and liquidity locking. Features automated smart contract deployment and security measures.",
      tags: ["DeFi", "Launchpad"],
      liveLink: "https://dxsale.example.com",
      techStack: ["Solidity", "Next.js", "Hardhat", "OpenZeppelin"],
    },
  ];

  const expertise = [
    "Smart Contract Development",
    "DeFi Protocol Design",
    "Token Standards (ERC20/721/1155)",
    "Gas Optimization",
    "Security Best Practices",
    "Multi-Chain Development",
    "Foundry & Hardhat",
    "Ethers.js & Web3.js",
  ];

  return (
    <Card
      className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gh-900 p-6"
      variant="solidity"
    >
      <div className="relative z-20">
        <h2 className="text-2xl font-bold mb-6">
          Solidity & EVM Development ⛓️
        </h2>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gh-800 backdrop-blur-sm rounded-xl p-4 border border-gh-700">
            <h3 className="font-semibold text-lg mb-4">Technical Expertise</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-gh-400">
              {expertise.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-yellow-400">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gh-800 backdrop-blur-sm rounded-xl p-4 border border-gh-700">
            <h3 className="font-semibold text-lg mb-4">
              Experience Highlights
            </h3>
            <p className="text-gh-400 mb-4 text-sm">
              <span className="text-yellow-400 font-semibold">2+ years</span> of
              experience in{" "}
              <span className="text-blue-400 font-semibold">
                blockchain development
              </span>
              , specializing in{" "}
              <span className="text-green-400 font-semibold">
                DeFi protocols
              </span>{" "}
              and{" "}
              <span className="text-green-400 font-semibold">
                dApp development
              </span>
              . Strong focus on{" "}
              <span className="text-blue-400 font-semibold">security</span>,{" "}
              <span className="text-blue-400 font-semibold">
                gas optimization
              </span>
              , and{" "}
              <span className="text-blue-400 font-semibold">
                cross-chain compatibility
              </span>
              .
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/bluntbrain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <Github size={14} />
                <span>View More Projects</span>
              </a>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {evmProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gh-800 backdrop-blur-sm rounded-xl p-4 relative min-h-[240px] border border-gh-700"
            >
              <div className="absolute top-1 right-1 flex gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-gh-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-gh-400 bg-gh-800 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-4 flex gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>View Project</span>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>View Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
