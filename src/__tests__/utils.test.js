import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(2025 - 1984); // Update expected value dynamically
  });

  it("returns 0 if the birth year is the current year", () => {
    const currentYear = new Date().getFullYear();
    const ageOfPerson = currentAgeForBirthYear(currentYear);
    expect(ageOfPerson).toBe(0);
  });

  it("returns a negative number if the birth year is in the future", () => {
    const futureYear = new Date().getFullYear() + 5;
    const ageOfPerson = currentAgeForBirthYear(futureYear);
    expect(ageOfPerson).toBe(-5);
  });

  it("handles edge cases for very old birth years", () => {
    const birthYear = 1900;
    const currentYear = new Date().getFullYear();
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(currentYear - 1900);
  });

  it("throws an error if the input is not a number", () => {
    expect(() => currentAgeForBirthYear("not a number")).toThrow();
    expect(() => currentAgeForBirthYear(null)).toThrow();
    expect(() => currentAgeForBirthYear(undefined)).toThrow();
  });
});
