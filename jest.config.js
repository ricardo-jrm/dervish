/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['./dist', './out'],
};
