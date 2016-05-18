SystemJS.config({
  baseURL: "/",
  trace: true,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "react-cdn": "https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react.min.js",
    "react-dom-cdn": "https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom.min.js",
    "app/": "app/"
  },
  bundles: {
    "public/bundle.js": [
      "app/index.js",
      "app/component.jsx",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/inherits.js",
      "npm:systemjs-plugin-babel@0.0.10.json",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/possibleConstructorReturn.js",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/createClass.js",
      "npm:systemjs-plugin-babel@0.0.10/babel-helpers/classCallCheck.js"
    ]
  }
});
