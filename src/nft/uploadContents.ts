//////////////////////////////////////////////
// $ npx ts-node src/transaction/getTransactionHistory.ts
//////////////////////////////////////////////

import assert from "assert";
import { StorageNftStorage } from "@solana-suite/nft";

// NFTStorageに画像アップロード
export const uploadContents = async (
  name: string,
  description: string,
  image: string
) => {
  const asset = {
    name,
    description,
    image,
  };

  const url = await StorageNftStorage.upload(asset);

  if (url.isErr) {
    assert.fail(url.error);
  }

  console.log(url);

  return url.unwrap();
};

uploadContents("testname", "testdescription", "./asset/sample-image.jpg");
