// solana ecosystem companies github usernames
export const SOLANA_COMPANIES = [
  // core infrastructure
  { name: "Solana Labs", username: "solana-labs", logo: "https://pbs.twimg.com/profile_images/1995873588709138432/OBvNFKnu_400x400.jpg" },
  { name: "Anchor", username: "coral-xyz", logo: "https://avatars.githubusercontent.com/u/105826615" },
  { name: "Metaplex", username: "metaplex-foundation", logo: "https://pbs.twimg.com/profile_images/1974237227388751872/IgGF3WZp_400x400.jpg" },
  { name: "Jito", username: "jito-foundation", logo: "https://pbs.twimg.com/profile_images/1687112019563188224/mnbhxwox_400x400.png" },

  // defi - dexes and amms
  { name: "Jupiter", username: "jup-ag", logo: "https://pbs.twimg.com/profile_images/1944921381168099328/mVkHxhxy_400x400.jpg" },
  { name: "Raydium", username: "raydium-io", logo: "https://pbs.twimg.com/profile_images/1965997401015267328/28CKEI7e_400x400.jpg" },
  { name: "Orca", username: "orca-so", logo: "https://pbs.twimg.com/profile_images/1980749110647955456/K_jIMBmh_400x400.jpg" },
  { name: "Meteora", username: "MeteoraAg", logo: "https://pbs.twimg.com/profile_images/1927657649245724672/oMq5m-RV_400x400.jpg" },
  { name: "Drift", username: "drift-labs", logo: "https://pbs.twimg.com/profile_images/1944981944208379904/rq7BqkDo_400x400.png" },
  { name: "Saber", username: "saber-hq", logo: "https://pbs.twimg.com/profile_images/1549595472297345026/2iMxLNet_400x400.jpg" },

  // defi - lending and yield
  { name: "Kamino", username: "Kamino-Finance", logo: "https://pbs.twimg.com/profile_images/1800478667040002048/8bUg0jRH_400x400.jpg" },
  { name: "marginfi", username: "mrgnlabs", logo: "https://avatars.githubusercontent.com/u/105210712" },
  { name: "Lulo", username: "flexlend", logo: "https://avatars.githubusercontent.com/u/111289498" },
  { name: "Marinade", username: "marinade-finance", logo: "https://avatars.githubusercontent.com/u/81361338" },

  // oracles and data
  { name: "Pyth", username: "pyth-network", logo: "https://pbs.twimg.com/profile_images/1948404937857122304/XPBCFnR5_400x400.jpg" },
  { name: "Switchboard", username: "switchboard-xyz", logo: "https://avatars.githubusercontent.com/u/90057857" },
  { name: "Helius", username: "helius-labs", logo: "https://pbs.twimg.com/profile_images/1676292138617675784/BNf4F9-d_400x400.jpg" },

  // nfts and marketplaces
  { name: "Magic Eden", username: "magicoss", logo: "https://pbs.twimg.com/profile_images/1955287636051894272/J-iQLrhV_400x400.jpg" },
  { name: "Tensor", username: "tensor-foundation", logo: "https://avatars.githubusercontent.com/u/168753808" },

  // wallets
  { name: "Phantom", username: "phantom", logo: "https://avatars.githubusercontent.com/u/78782331" },
  { name: "Solflare", username: "solflare-wallet", logo: "https://pbs.twimg.com/profile_images/1902360413561565184/EqQUAbuD_400x400.jpg" },
  { name: "Squads", username: "Squads-Protocol", logo: "https://avatars.githubusercontent.com/u/88831550" },

  // cross-chain and infra
  { name: "DLN (deBridge)", username: "debridge-finance", logo: "https://avatars.githubusercontent.com/u/83599471" },
  { name: "OKX DEX", username: "okx", logo: "https://avatars.githubusercontent.com/u/25955936" },

  // gaming and other
  { name: "Star Atlas", username: "staratlasmeta", logo: "https://avatars.githubusercontent.com/u/78203095" },
  { name: "Pump.fun", username: "pump-fun", logo: "https://pbs.twimg.com/profile_images/1748108741503803392/EmT4yP6S_400x400.jpg" },
  { name: "Mango", username: "blockworks-foundation", logo: "https://avatars.githubusercontent.com/u/70453915" },
  { name: "Galxe", username: "galxe", logo: "https://avatars.githubusercontent.com/u/107631989" },
  { name: "Helio", username: "heliofi", logo: "https://avatars.githubusercontent.com/u/102899345" },
] as const;

export type SolanaCompany = typeof SOLANA_COMPANIES[number];
