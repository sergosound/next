const path = require('path');

const rootAlias = path.join(__dirname, '../../client');

const aliases = {
    '@': `${rootAlias}`,
    '@flow': `${rootAlias}/flow`,
    '@hooks': `${rootAlias}/hooks`,
    '@components': `${rootAlias}/components`,
}

module.exports = aliases;