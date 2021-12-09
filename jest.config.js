/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'jest-esm-transformer',
    '^.+\\.tsx?$': 'ts-jest',
    // '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['./dist', './out'],
  transformIgnorePatterns: [
    // 'node_modules/(?!(@ricardo-jrm/color-converter)/)',
    // 'node_modules/(?!(@ricardo-jrm/date-format)/)',
    // 'node_modules/(?!(@ricardo-jrm/number-format)/)',
    // 'node_modules/(?!(@ricardo-jrm/string-capitalize)/)',
    // 'node_modules/(?!(@ricardo-jrm/string-truncate)/)',
  ],
};
