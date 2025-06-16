# React Components

This directory contains React components that utilize the design tokens system. Each component is built with TypeScript and uses the generated design tokens for consistent styling.

## Available Components

### Button
A reusable button component that uses design tokens for:
- Colors
- Spacing
- Typography
- Transitions

```typescript
import Button from './Button';

// Usage
<Button variant="primary">Click me</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="tertiary">Learn more</Button>
```

## Component Structure

Each component follows this structure:
```
components/
├── ComponentName/
│   ├── ComponentName.tsx    # Main component file
│   ├── ComponentName.test.tsx  # Tests
│   └── index.ts            # Export file
└── README.md              # This file
```

## Using Design Tokens

Components use design tokens in two ways:

1. **JavaScript/TypeScript**
   ```typescript
   import tokens from '../../design-tokens/build/tokens.js';
   
   // Using tokens in components
   const color = tokens.color.brand.primary.value;
   const spacing = tokens.spacing.md.value;
   ```

2. **SCSS**
   ```scss
   @import '../../design-tokens/build/variables.scss';
   
   .component {
     color: $color-brand-primary;
     padding: $spacing-md;
   }
   ```

## Best Practices

1. **Token Usage**
   - Always use design tokens for styling
   - Avoid hardcoded values
   - Use appropriate token categories

2. **Component Structure**
   - Keep components focused and single-purpose
   - Use TypeScript for type safety
   - Include proper documentation

3. **Styling**
   - Use SCSS for complex styles
   - Leverage design tokens for consistency
   - Follow the design system

## Development

### Creating New Components

1. Create a new directory for the component
2. Add the main component file
3. Include tests
4. Use design tokens for styling
5. Export through index.ts

### Testing

Run component tests:
```bash
npm test
```

### Building

Components are automatically built with the main application:
```bash
npm run build
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for detailed information about:
- Development workflow
- Code style guidelines
- Testing requirements
- Pull request process 