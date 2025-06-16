# Contributing to Figma Tokens React

This document outlines the development process, including how to work with design tokens and the CI/CD workflow.

## Design Tokens Workflow

### Local Development

1. **Adding New Tokens**
   - Add new tokens to `design-tokens/figma-tokens.json`
   - Follow the existing structure for consistency
   - Token types supported: color, spacing, font, breakpoint

2. **Building Tokens**
   ```bash
   npm run build:tokens
   ```
   This command:
   - Generates SCSS variables
   - Creates JavaScript tokens
   - Produces TypeScript definitions
   - Outputs JSON format

3. **Pre-commit Hook**
   - Automatically runs `build:tokens` on commit
   - Ensures build files are up to date
   - Validates token changes

### GitHub Actions Workflow

The CI/CD pipeline (`tokens.yml`) runs on:
- Push to main branch
- Pull requests
- Changes to token files

#### Workflow Steps

1. **Checkout & Setup**
   - Checks out repository
   - Sets up Node.js 20
   - Installs dependencies

2. **Build Process**
   - Runs token build script
   - Generates all output formats
   - Validates build files

3. **Validation Steps**
   - SCSS syntax validation
   - JavaScript syntax check
   - TypeScript definition validation

4. **Status Checks**
   - Creates status check for pull requests
   - Reports validation results
   - Prevents merging if checks fail

### Branch Protection

The `main` branch is protected with:
- Required status checks
- Up-to-date branch requirement
- `validate-tokens` check must pass

## Using Design Tokens

### In React Components

```typescript
import tokens from '../design-tokens/build/tokens.js';
import '../design-tokens/build/variables.scss';

// Using tokens in components
const color = tokens.color.brand.primary.value;
const spacing = tokens.spacing.md.value;
```

### Available Token Types

1. **Colors**
   - Brand colors
   - Text colors
   - Background colors

2. **Spacing**
   - xs: 4px
   - sm: 8px
   - md: 16px
   - lg: 24px
   - xl: 32px

3. **Typography**
   - Font families
   - Font sizes
   - Font weights

4. **Breakpoints**
   - sm: 576px
   - md: 768px
   - lg: 992px
   - xl: 1200px

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check token syntax in `figma-tokens.json`
   - Ensure all required fields are present
   - Verify token types are correct

2. **CI/CD Failures**
   - Check GitHub Actions logs
   - Verify branch protection rules
   - Ensure all required checks pass

3. **TypeScript Errors**
   - Run `npm run build:tokens` locally
   - Check generated `.d.ts` file
   - Verify token structure

## Best Practices

1. **Token Naming**
   - Use semantic names
   - Follow existing patterns
   - Be consistent with casing

2. **Token Organization**
   - Group related tokens
   - Use clear categories
   - Maintain hierarchy

3. **Commit Messages**
   - Be descriptive
   - Reference token changes
   - Follow conventional commits

## Need Help?

- Check the [README.md](./README.md) for project overview
- Review existing token usage in components
- Open an issue for specific questions 