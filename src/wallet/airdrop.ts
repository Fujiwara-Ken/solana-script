import { Account, KeypairStr } from "@solana-suite/core";

// 開発用の SOL を5SOL取得
const airdrop = async () => {
  const owner = new KeypairStr(
    process.env.OWNER_PUBKEY || "",
    process.env.OWNER_SECRET || ""
  );

  await Account.requestAirdrop(owner.toPublicKey(), 5);
};

airdrop();
