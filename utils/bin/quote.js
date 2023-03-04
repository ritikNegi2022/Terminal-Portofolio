import * as cow from "cowsay-browser";
import { getQuote } from "@/pages/api";

export const quote = async (args) => {
  let output = "";

  if (args.length < 1 || args[0] === "") {
    const quote = (await getQuote()).quote;
    return cow.think({ text: quote });
  } else {
    output = args.join(" ");
    return cow.say({ text: output });
  }
};
