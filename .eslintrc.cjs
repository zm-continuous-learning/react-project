module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        "airbnb/hooks",
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
    },
    settings: {
        'import/resolver':
            {
                node:
                    {
                        extensions:
                            ['.ts', '.tsx', '.js', '.json'],
                    },
            },
        typescript: {
            'import/extensions': [
                '2',
                'ignorePackages',
                {
                    ts: 'never',
                    tsx: 'never',
                    json: 'never',
                    js: 'never'
                },
            ],
        }
    }

}
