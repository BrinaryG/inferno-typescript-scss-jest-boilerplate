module.exports = {
    roots: ['<rootDir>/src'],

    transform: {
        'tsx?$': 'ts-jest'
    },
    globals: {
        'ts-jest': {
            babelConfig: {
                compact: 'auto',
                presets: [
                    '@babel/preset-typescript',
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                browsers: ['> 1%']
                            }
                        }
                    ]
                ],
                plugins: [
                    'transform-class-properties',
                    'transform-object-rest-spread',
                    'babel-plugin-syntax-jsx',
                    ['babel-plugin-inferno', { imports: true }]
                ],
                filename: 'test'
            }
        }
    },
    testURL: 'http://localhost',
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js'
    }
};
