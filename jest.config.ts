import type {Config} from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  }
};

export default createJestConfig(config);
