# stylelint-config-order-66

## Usage

Install [`stylelint`](https://github.com/stylelint/stylelint) and this package to your project:

```sh
npm install stylelint stylelint-config-order-66 --save-dev
```

Configure your stylelint configuration file (`stylelint.config.mjs`) to extend this package:

> [!TIP] You don't need to install `stylelint-order` nor add `stylelint-order` to `"plugins"` since this package already
> does that for you.

```javascript
{
  extends: ["stylelint-config-order-66"]
}
```

## Severity Options

Default severity level is `warning` but you can use error variant to change severity level to `error`.

```javascript
{
  extends: ["stylelint-config-order-66/error"]
}
```

## License

MIT
