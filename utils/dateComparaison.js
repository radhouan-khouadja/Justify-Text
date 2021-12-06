const dateComparaison = (d1, d2) => {
  const yearD1 = d1.getUTCFullYear();
  const monthD1 = d1.getUTCMonth() + 1;
  const dayD1 = d1.getUTCDate();

  const yearD2 = d2.getUTCFullYear();
  const monthD2 = d2.getUTCMonth() + 1;
  const dayD2 = d2.getUTCDate();

  if (yearD1 === yearD2 && monthD1 === monthD2 && dayD1 === dayD2) {
    return true;
  }
  return false;
};

export default dateComparaison;
