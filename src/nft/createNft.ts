import assert from "assert";

import { Transaction, Pubkey, KeypairStr } from "@solana-suite/core";
import { Metaplex, MetaplexInstructure } from "@solana-suite/nft";

// NFT生成関数 urlはuploadContents関数から取得し、引数に渡す
const createNft = async (name: string, url: string, account: KeypairStr) => {
  const metadata = new MetaplexInstructure.Data({
    name,
    symbol: "NFT",
    uri: url,
    sellerFeeBasisPoints: 0,
    creators: null,
  });

  const walletAddress = account.pubkey;
  const secretKey = account.secret;

  console.log("metadata", metadata);

  const inst1 = await Metaplex.mint(metadata, walletAddress.toPublicKey(), [
    secretKey.toKeypair(),
  ]);

  console.log("inst1", inst1);

  (await inst1.submit()).match(
    async (value) => {
      await Transaction.confirmedSig(value, "finalized");
    },
    (error) => assert(error)
  );

  const mint = inst1.unwrap().data as Pubkey;
  console.log("mint", mint);
};
