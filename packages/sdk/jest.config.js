module.exports = {
    testMatch: ['**/*test.(ts|js)'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/', '<rootDir>/typings'],
    transform: {
        '^.+\\.(ts|js)?$': 'ts-jest',
    },
    rootDir: '',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            diagnostics: false,
            tsconfig: 'tsconfig.spec.json',
        },
    },
    testTimeout: 240000,
};
