export function currentAgeForBirthYear(birthYear) {
  if (typeof birthYear !== "number" || isNaN(birthYear)) {
    throw new Error("Invalid input: birthYear must be a number");
  }
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
