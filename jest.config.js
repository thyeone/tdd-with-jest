module.exports = {
  jest: {
    transform: {
      '\\.[jt]sx?$': 'ts-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(d3|internmap|delaunator|robust-predicates))',
    ],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.tsx'],
  },
};
