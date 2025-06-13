# Figma Tokens React

A React project that demonstrates how to use Figma design tokens in a React application. This project uses Style Dictionary to transform Figma tokens into various formats (SCSS, JS, and JSON) for use in your React components.

## 🎯 Project Purpose

This project serves as a practical example of:
- Converting Figma design tokens into usable code
- Maintaining a single source of truth for design tokens
- Using design tokens across different platforms (SCSS, JS, JSON)
- Type-safe token usage with TypeScript

## 🚀 Features

- **Multiple Output Formats:**
  - SCSS variables for styling
  - JavaScript/TypeScript modules for programmatic use
  - JSON for other tools and platforms

- **Type Safety:**
  - Full TypeScript support with generated type definitions
  - Autocomplete and type checking for all design tokens

- **Design Token Categories:**
  - Colors (brand, text, feedback)
  - Spacing
  - Typography (font families, sizes, weights)
  - Breakpoints

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build design tokens:**
   ```bash
   npm run build:tokens
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
figma-tokens-react/
├── design-tokens/
│   ├── build/              # Generated token files
│   │   ├── variables.scss  # SCSS variables
│   │   ├── tokens.js       # JS module
│   │   ├── tokens.json     # JSON format
│   │   └── tokens.d.ts     # TypeScript definitions
│   ├── figma-tokens.json   # Source tokens from Figma
│   └── build-tokens.cjs    # Build script
└── src/                    # React application
```

## 🔧 Style Dictionary Configuration

### Build Process

The build process is handled by Style Dictionary, a build system that transforms design tokens into platform-specific formats. The build script (`build-tokens.cjs`) is configured to:

1. Read the source tokens from `figma-tokens.json`
2. Transform them into multiple formats
3. Generate type definitions
4. Output the files to the `build` directory

### Build Script Details

The build script (`build-tokens.cjs`) is executed using:
```bash
npm run build:tokens
```

This script:
- Uses Style Dictionary's Node.js API
- Configures multiple platforms (scss, js, json)
- Generates TypeScript definitions
- Handles token transformations and formatting

### Output Files

The build process generates the following files in the `design-tokens/build` directory:

- `variables.scss`: SCSS variables for styling
- `tokens.js`: JavaScript module with token values
- `tokens.json`: Raw JSON format
- `tokens.d.ts`: TypeScript type definitions

### Style Dictionary Configuration

The build script configures Style Dictionary with:

- **Platforms:**
  - SCSS: Generates variables with `$` prefix
  - JavaScript: Creates a CommonJS module
  - JSON: Outputs raw token data
  - TypeScript: Generates type definitions

- **Transformations:**
  - Name transformations for each platform
  - Value transformations for colors and dimensions
  - Format transformations for proper output

## 💻 Usage

### Using SCSS Variables
```scss
@import '../design-tokens/build/variables.scss';

.button {
  color: $color-brand-primary;
  padding: $spacing-md;
}
```

### Using JS/TS Tokens
```typescript
import tokens from '../design-tokens/build/tokens.js';

const primaryColor = tokens.color.brand.primary.value;
```

### Using JSON Tokens
```typescript
import tokens from '../design-tokens/build/tokens.json';

const breakpoint = tokens.breakpoint.md.value;
```

## 🔄 Token Pipeline

1. **Source:** Figma tokens are exported to `figma-tokens.json`
2. **Build:** Style Dictionary transforms tokens into multiple formats
3. **Usage:** Generated files are imported and used in the React application

## 🛠️ Development

### Available Scripts

- `npm run build:tokens` - Build design tokens
- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production

## 📝 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
