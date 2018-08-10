module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        'tsx?$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            useBabelrc: true
        }
    },
    testURL: 'http://localhost',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js'
    }
};
