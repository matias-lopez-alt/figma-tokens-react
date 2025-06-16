# Design Tokens

This directory contains the design tokens configuration and build process for the Figma Tokens React project.

## Structure

```
design-tokens/
├── figma-tokens.json   # Source tokens from Figma
├── build-tokens.cjs    # Build script
└── build/             # Generated token files
    ├── variables.scss # SCSS variables
    ├── tokens.js     # JavaScript module
    ├── tokens.json   # JSON format
    └── tokens.d.ts   # TypeScript definitions
```

## Token Categories

### Colors
```json
{
  "color": {
    "brand": {
      "primary": { "value": "#007AFF", "type": "color" },
      "secondary": { "value": "#5856D6", "type": "color" },
      "tertiary": { "value": "#FF2D55", "type": "color" }
    }
  }
}
```

### Spacing
```json
{
  "spacing": {
    "xs": { "value": "4px", "type": "spacing" },
    "sm": { "value": "8px", "type": "spacing" },
    "md": { "value": "16px", "type": "spacing" },
    "lg": { "value": "24px", "type": "spacing" },
    "xl": { "value": "32px", "type": "spacing" }
  }
}
```

### Typography
```json
{
  "font": {
    "family": {
      "body": { "value": "system-ui, sans-serif", "type": "fontFamily" }
    },
    "size": {
      "base": { "value": "16px", "type": "fontSize" }
    },
    "weight": {
      "regular": { "value": "400", "type": "fontWeight" }
    }
  }
}
```

### Breakpoints
```json
{
  "breakpoint": {
    "sm": { "value": "576px", "type": "breakpoint" },
    "md": { "value": "768px", "type": "breakpoint" },
    "lg": { "value": "992px", "type": "breakpoint" },
    "xl": { "value": "1200px", "type": "breakpoint" }
  }
}
```

## Build Process

The build process is handled by Style Dictionary and is configured in `build-tokens.cjs`. It:

1. Reads tokens from `figma-tokens.json`
2. Transforms them into multiple formats
3. Generates type definitions
4. Outputs files to the `build` directory

### Output Formats

1. **SCSS Variables**
   ```scss
   $color-brand-primary: #007AFF;
   $spacing-md: 16px;
   ```

2. **JavaScript Module**
   ```javascript
   module.exports = {
     color: {
       brand: {
         primary: { value: "#007AFF", type: "color" }
       }
     }
   };
   ```

3. **TypeScript Definitions**
   ```typescript
   declare interface DesignToken {
     value: string;
     type: string;
   }

   declare const tokens: {
     color: {
       brand: {
         primary: DesignToken;
       };
     };
   };
   ```

4. **JSON Format**
   ```json
   {
     "color": {
       "brand": {
         "primary": {
           "value": "#007AFF",
           "type": "color"
         }
       }
     }
   }
   ```

## Usage

### In React Components

```typescript
import tokens from '../design-tokens/build/tokens.js';
import '../design-tokens/build/variables.scss';

// Using tokens in components
const color = tokens.color.brand.primary.value;
const spacing = tokens.spacing.md.value;
```

### In SCSS

```scss
@import '../design-tokens/build/variables.scss';

.button {
  color: $color-brand-primary;
  padding: $spacing-md;
}
```

## Development

### Adding New Tokens

1. Add tokens to `figma-tokens.json`
2. Follow the existing structure
3. Use appropriate token types
4. Run `npm run build:tokens`

### Token Types

- `color`: Hex color values
- `spacing`: Pixel values
- `fontFamily`: Font stack strings
- `fontSize`: Pixel values
- `fontWeight`: Numeric values
- `breakpoint`: Pixel values

### Best Practices

1. **Naming**
   - Use semantic names
   - Follow existing patterns
   - Be consistent with casing

2. **Organization**
   - Group related tokens
   - Use clear categories
   - Maintain hierarchy

3. **Values**
   - Use appropriate units
   - Be consistent with formats
   - Document special cases

## Validation

The build process includes validation for:
- SCSS syntax
- JavaScript syntax
- TypeScript definitions
- Token structure

See [CONTRIBUTING.md](../CONTRIBUTING.md) for more information about the development workflow and validation process. 