const { builtinRules } = require("eslint/use-at-your-own-risk");

module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-standard-scss"
    ],
    overrides: [
        {
            files: ["src/sass/**/*.scss"],
            customSyntax: "postcss-scss",
        },
    ],
    rules: {
        indentation: 4,
        "selector-class-pattern": null,
        "no-empty-source": null,
        "string-quotes": "double",
        "no-descending-specificity": null,
        "number-max-precision": null,
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "extend",
                    "at-root",
                    "debug",
                    "warn",
                    "error",
                    "if",
                    "else",
                    "for",
                    "each",
                    "while",
                    "mixin",
                    "include",
                    "content",
                    "return",
                    "function",
                    "tailwind",
                    "apply",
                    "responsive",
                    "variants",
                    "screen",
                    "use",
                ],
            },
        ],
    },
}
