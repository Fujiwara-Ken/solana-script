//////////////////////////////////////////////
// $ npx ts-node src/spl-token/transferToken.ts
//////////////////////////////////////////////
import assert from "assert";
import { Account, KeypairStr, SplToken, Transaction } from "@solana-suite/core";
import "dotenv/config";

// 所持しているSPLトークンを移転する
const transferToken = async () => {
  const owner = new KeypairStr(
    process.env.OWNER_PUBKEY || "",
    process.env.OWNER_SECRET || ""
  );

  const receipt = Account.create();

  const mint = process.env.TOKEN_KEY;
  console.log("#mint", mint);
  const decimals = 1;

  const inst2 = await SplToken.transfer(
    mint.toPublicKey(),
    owner.toPublicKey(),
    receipt.toPublicKey(),
    [owner.toKeypair()],
    10,
    decimals
  );

  (await [inst2].submit()).match(
    async (value) => {
      console.log("# Transfer nft sig: ", value.toExplorerUrl());
      await Transaction.confirmedSig(value);
    },
    (error) => assert(error)
  );
};

transferToken();
