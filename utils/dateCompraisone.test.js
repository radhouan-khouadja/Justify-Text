import dateComparaison from "./dateComparaison.js";

const date_1 = new Date("December 17, 1995 03:24:00");
const date_2 = new Date("December 19, 2000 03:24:00");

test("simple comparaison betwwen two dates", () => {
  expect(dateComparaison(new Date(), new Date())).toEqual(true);
  expect(dateComparaison(date_1, date_2)).toEqual(false);
});
