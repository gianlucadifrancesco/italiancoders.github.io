module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": "airbnb",
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "rules": {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": "false",
  }
}
