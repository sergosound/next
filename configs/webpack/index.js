const aliases = require('./aliases');

module.exports = {
    webpack: (config, options) => {
        config = { ...config, resolve: {
                alias: { ...config.resolve.alias, ...aliases }
            }}

        return config;
    }
}