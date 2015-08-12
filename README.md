# eslint-config-nordnet

[![NPM version][npm-image]][npm-url]

> ESLint config for Nordnet Javascript applications

Nordnet follows Javascript styleguide suggested by Airbnb. See [Airbnb's Javascript styleguide][airbnb-styleguide] and the [ESlint config docs][eslint-config-docs] for more information. [Nordnet’s scaffolder][gnem] for projects has built-in support for this config.

[airbnb-styleguide]: https://github.com/airbnb/javascript
[eslint-config-docs]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
[gnem]: https://github.com/nordnet/generator-nordnet-es-module

## Installation

Install plugin as dev dependency

    npm install --save-dev eslint eslint-config-nordnet eslint-config-airbnb babel-eslint eslint-plugin-react

## Configuration

Add `.eslintrc` config to your project

```json
{
  "extends": "eslint-config-nordnet"
}
```

## License

MIT © [Nordnet Bank AB](https://www.nordnet.se/)

[npm-url]: https://npmjs.org/package/eslint-config-nordnet
[npm-image]: https://img.shields.io/npm/v/eslint-config-nordnet.svg?style=flat-square
