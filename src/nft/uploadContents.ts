import assert from "assert";

import { StorageNftStorage } from "@solana-suite/nft";

// カスタムパラメーターを付与したNFTStorageアップロード機能
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
    assert(url.error);
  }

  console.log(url);

  return url.unwrap();
};
