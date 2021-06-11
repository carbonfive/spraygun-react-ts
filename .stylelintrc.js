module.exports = {
  plugins: [
    "stylelint-declaration-strict-value"
  ],
  extends: ["stylelint-config-standard", "stylelint-config-recommended-scss"],
  rules: {
    "declaration-empty-line-before": null,
    "declaration-colon-newline-after": null,
    "declaration-no-important": true,
    "max-nesting-depth": 1,
    "scale-unlimited/declaration-strict-value": [
      "/color/",
      {
        disableFix: true,
        ignoreValues: [
          "currentcolor",
          "inherit",
          "initial",
          "transparent",
          "unset",
        ],
      },
    ],
    "scss/at-function-pattern": [
      "^[a-z0-9]+(-[a-z0-9]+)*$",
      {
        message: "SCSS functions should be lower-case with hyphens",
      },
    ],
    "scss/at-mixin-pattern": [
      "^[a-z0-9]+(-[a-z0-9]+)*$",
      {
        message: "SCSS mixins should be lower-case with hyphens",
      },
    ],
    "scss/dollar-variable-pattern": [
      "^[a-z0-9]+(-[a-z0-9]+)*$",
      {
        message: "SCSS $ variables should be lower-case with hyphens",
      },
    ],
    "scss/no-duplicate-dollar-variables": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-class-pattern": [
      // Classes must be in BEM form, like this:
      //   MyComponent
      //   MyComponent--variant
      //   MyComponent__element
      //   MyComponent__element--variant
      //   MyComponent__longElementName
      //   MyComponent__longElementName--longVariant
      // For an introduction, see: https://css-tricks.com/bem-101/
      "^[A-Z][a-zA-Z0-9]+(__[a-z][a-zA-Z0-9]+)?(--[a-z][a-zA-Z0-9]+)*$",
      {
        resolveNestedSelectors: true,
        message:
          "CSS classes should use BEM format like MyComponent__element--variant",
      },
    ],
    "selector-max-compound-selectors": 1,
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "string-quotes": "double",
    "value-list-comma-newline-after": null,
  },
};
