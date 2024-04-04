/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['./src/**/*.ts'],
  coveragePathIgnorePatterns: ['/requests/', '/responses/', '/interfaces/'],
  testResultsProcessor: 'jest-sonar-reporter'
}
