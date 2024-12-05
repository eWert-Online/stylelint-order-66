const appearance = require("./groups/appearance.js");
const boxModel = require("./groups/box-model.js");
const container = require("./groups/container.js");
const misc = require("./groups/misc.js");
const positioning = require("./groups/positioning.js");
const svgPresentation = require("./groups/svg-presentation.js");
const transition = require("./groups/transition.js");
const typography = require("./groups/typography.js");

const propertyGroups = [
  ["composes"],
  ["all", "content"],
  container,
  positioning,
  boxModel,
  typography,
  appearance,
  svgPresentation,
  transition,
  misc,
];

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: "threshold",
  properties,
}));

function getConfig({ severity }) {
  return {
    plugins: ["stylelint-order"],
    rules: {
      "declaration-empty-line-before": [
        "always",
        {
          except: ["first-nested"],
          ignore: ["after-declaration", "after-comment", "inside-single-line-block"],
          severity,
        },
      ],
      "at-rule-empty-line-before": [
        "always",
        {
          ignore: ["first-nested", "blockless-after-same-name-blockless", "after-comment"],
          severity,
        },
      ],
      "order/order": [
        [
          { type: "at-rule", name: "import" },
          { type: "at-rule", name: "forward" },
          { type: "at-rule", name: "use" },
          "dollar-variables",
          "at-variables",
          "custom-properties",
          { type: "at-rule", name: "custom-media" },
          { type: "at-rule", name: "function" },
          { type: "at-rule", name: "mixin" },
          { type: "at-rule", name: "extend" },
          "declarations",
          { type: "at-rule", name: "media", hasBlock: true },
          {
            type: "rule",
            selector: /^&::[\w-]+/,
            hasBlock: true,
          },
          "rules",
        ],
        {
          severity,
        },
      ],
      "order/properties-order": [
        propertiesOrder,
        {
          severity,
          unspecified: "bottomAlphabetical",
          emptyLineBeforeUnspecified: "always",
          emptyLineMinimumPropertyThreshold: 4,
        },
      ],
    },
  };
}

module.exports = {
  getConfig,
  propertyGroups,
};
