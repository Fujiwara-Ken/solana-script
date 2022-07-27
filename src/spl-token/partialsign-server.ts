//////////////////////////////////////////////
// $ npx ts-node src/spl-token/partialsign-server.ts
//////////////////////////////////////////////

import assert from "assert";
import { PartialSignInstruction } from "@solana-suite/shared";

export const submitSplHex = async (hex: string, feePayer: string) => {
  const obj2 = new PartialSignInstruction(hex);
  const res2 = await obj2.submit(feePayer.toKeypair());
  res2.match(
    (ok) => console.log("# tx signature: ", ok),
    (err) => assert.fail(err.message)
  );
};
