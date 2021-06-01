module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
        "no-console": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "jsx-a11y/label-has-associated-control": [2, {
            "labelComponents": ["CustomInputLabel"],
            "labelAttributes": ["label"],
            "controlComponents": ["CustomInput"],
            "depth": 3,
        }],
        "jsx-a11y/control-has-associated-label": [2, {
            "labelAttributes": ["label"],
            "controlComponents": ["CustomComponent"],
            "ignoreElements": [
                "a",
                "audio",
                "canvas",
                "embed",
                "input",
                "textarea",
                "tr",
                "video",
            ],
            "ignoreRoles": [
                "grid",
                "listbox",
                "menu",
                "menubar",
                "radiogroup",
                "row",
                "tablist",
                "toolbar",
                "tree",
                "treegrid",
            ],
            "depth": 3,
        }],
    }
};
