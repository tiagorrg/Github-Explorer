
export default {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current'
            },
            modules: 'commonjs' // Важно для Jest
        }]
    ],
    plugins: [
        // Добавляем плагин для обработки import.meta
        function () {
            return {
                visitor: {
                    MetaProperty(path) {
                        path.replaceWithSourceString('process');
                    }
                }
            };
        }
    ]
};