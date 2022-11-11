# BooDark

![Screenshot](themes/boodark/screen.png)

[![GitHub package.json version](https://img.shields.io/github/package-json/v/adorade/boodark.svg?label=&color=green&logo=github)](https://github.com/adorade/boodark/blob/main/package.json)
[![license](https://img.shields.io/github/license/adorade/boodark.svg?label=)](https://mit-license.org)

> Bootstrap Dark theme for phpMyAdmin

- Supported versions: 5.2
- Bootstrap v5.1.3

## Changes

- Background color changed: shades of gray & black
- Fonts color changed: shades of white & light gray
- Default SQL Query editor color theme changed
- jQuery UI improved: ui-darkness
- Designer adjusted for dark theme
- Console adjusted for dark theme
- Inline SVG using `escape-svg` function

## Installation

1. Download latest [release](https://github.com/adorade/boodark/releases/latest/download/boodark-v1.0.1.zip)
2. Extract the archive files
3. Go to the phpMyAdmin files (C:\xampp\phpmyadmin for XAMPP) then go to the `themes` folder and add here the `boodark` folder
4. Select `BooDark` theme on the home page

## Building

BooDark theme respects the folders structure of phpMyAdmin.

```txt
├── node_modules
├── themes
│   └── boodark
│       ├── css
│       ├── img
│       ├── jquery
│       ├── scss
│       ├── screen.png
│       └── theme.json
├── package.json
└── yarn.lock
```

To build the theme or customize it with your preferences you must have **Node**, **Yarn** and **Git** installed. Then follow step by step:

1. Open your command-line and navigate to your projects folder
2. Clone this repo locally: `git clone https://github.com/adorade/boodark .`
3. Install project dependecies: `yarn install`
4. Do any modifications you want
5. Compile `scss` files to `css`

    ```sh
    # production, minified files
    yarn run build
    # development
    yarn run css-dev
    ```

6. Theme files are in `themes/boodark`.

## Bugs and feature requests

Have a bug or a feature request? Please search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/adorade/boodark/issues/new).

## Cheatsheet

In order to check the UI elements more easily, a cheatsheet containing the phpMyadmin UI can be found at [BooDark Cheatsheet](https://adorade.github.io/boodark/docs/) (WIP).

## License

BooDark Theme is licensed under [MIT](LICENSE)
