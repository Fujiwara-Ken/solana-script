import { Account } from "@solana-suite/core";

// Walletの公開鍵と秘密鍵を生成
const createWallet = () => {
  const account = Account.create();

  console.log("# pubkey: ", account.pubkey);
  console.log("# secret: ", account.secret);

  return account;
};

createWallet();
