const path = require("path");

const rootAlias = path.join(__dirname, "../../client");

const aliases = {
  "@": `${rootAlias}`,
  "@flow": `${rootAlias}/flow`,
  "@hooks": `${rootAlias}/hooks`,
  "@components": `${rootAlias}/components`,
  "@ui": `${rootAlias}/ui`,
};

module.exports = aliases;
