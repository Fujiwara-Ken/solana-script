import assert from "assert";
import { Transaction } from "@solana-suite/core";

//
const hist1 = await Transaction.getTokenHistory(
  mint.toPublicKey(), // used mint
  owner.toPublicKey() // search key
);
console.log("# token history by publish: ", hist1.unwrap());

// Not token history(Difference between getHistory and getTokenHistory)
const hist2 = await Transaction.getHistory(
  owner.toPublicKey(), // search key
  {
    actionFilter: [Transaction.Filter.Create], // Only 'create' history
  }
);
console.log("# history by create action filter: ", hist2.unwrap());

// History of receiptkey as the main destitnation.
const hist3 = await Transaction.getTokenHistory(
  mint.toPublicKey(),
  receipt.toPublicKey(),
  {
    directionFilter: Transaction.DirectionFilter.Dest, // Dest or Source
  }
);
console.log("# token history result by destination filter : ", hist3.unwrap());
