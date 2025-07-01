export default {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    globals: {
        'import.meta': {
            env: {
                VITE_GITHUB_API_URL: 'https://api.github.com'
            }
        }
    }
};