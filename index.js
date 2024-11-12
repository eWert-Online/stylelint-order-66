const { getConfig, propertyGroups } = require("./src/config.js");

const error = getConfig({
  severity: "error",
});

const warning = getConfig({
  severity: "warning",
});

module.exports = {
  propertyGroups,
  warning,
  error,
};

module.exports = warning;
