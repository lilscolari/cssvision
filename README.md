# CSSVision

This VS Code extension allows users to input text styling options through HTML input fields and see a real-time preview of their styles, along with the suggested generated CSS code.

## Features

- Live preview of text styles based on user input
- Displays recommended CSS code
- Supports various text styling options including:
  - Text color
  - Font size
  - Font weight
  - Font style
  - Font family (including all web-safe fonts)
  - Text shadow
  - Letter spacing
  - Word spacing
  - Line height
  - Text decoration

### Options

- **Text**: Enter the text you want to style.
- **Text Color**: Choose a color for the text.
- **Font Size**: Set the font size in pixels.
- **Font Weight**: Select the font weight (Normal, Bold).
- **Font Style**: Choose the font style (Normal, Italic, Oblique).
- **Font Family**: Select a font family from the dropdown (includes all web-safe fonts).
- **Text Shadow**: Set the shadow color, x-offset, y-offset, and blur radius.
- **Letter Spacing**: Define the spacing between letters.
- **Word Spacing**: Define the spacing between words.
- **Line Height**: Set the line height.
- **Text Decoration**: Choose the decoration line, style, and color.

## Requirements

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: npm is installed with Node.js. You can verify the installation by running:
    ```bash
    node -v
    npm -v
    ```
- **VS Code**: This extension requires Visual Studio Code version 1.91.0 or higher. You can download the latest version from [code.visualstudio.com](https://code.visualstudio.com/).

## Usage

- Install the extension by searching 'CSSVision' in the marketplace.
- Run `Ctrl-Shift-P` (windows) or `Cmd-Shift-P` (mac)
- Ensure your text input is `>Generate`
- A new window should pop up.

## Extension Settings

This extension contributes the following commands:

* `cssvision.generate`: Opens the CSS preview form.

## Versions

### 0.0.1

Initial release of CSSVision

**Enjoy!**
