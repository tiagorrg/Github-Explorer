export default {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    // Добавляем глобальные переменные для замены import.meta
    globals: {
        'import.meta': {
            env: {
                VITE_GITHUB_API_URL: 'https://api.github.com' // или ваш тестовый URL
            }
        }
    }
};