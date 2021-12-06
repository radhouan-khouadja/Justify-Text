import { justifyLine, justifyText } from "./justifyText.js";

test("justify on line", () => {
  expect(justifyLine("you are good bro", 20)).toEqual("you  are  good  bro\n");
});

test("justify on text", () => {
  expect(
    justifyText(
      "radhouan aime maman et aiment ? amis mais aussi ces freres et parfois il peut etre tres mechants et ala est moght kezzebi",
      80
    )
  ).toEqual(
    "radhouan  aime  maman et aiment ? amis mais aussi ces freres et parfois il peut\netre tres mechants et ala est moght kezzebi"
  );
});
