# Contributing to Figma Tokens React

This document outlines the development process, including how to work with design tokens and the CI/CD workflow.

## System Requirements

- Node.js >= 20.0.0 (LTS version)
- npm >= 10.0.0
- Style Dictionary v4.3.0

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

## Future Upgrade Plan

### Style Dictionary v5 Upgrade

The project currently uses Style Dictionary v4.3.0. Here's the plan for upgrading to v5:

1. **Prerequisites**
   - Node.js >= 22.0.0
   - Update CI/CD environments
   - Team readiness for breaking changes

2. **Breaking Changes to Address**
   - ESM-only modules
   - Updated format names
   - Changed transform groups
   - New platform configuration

3. **Migration Steps**
   ```bash
   # 1. Update Node.js
   nvm install 22
   nvm use 22

   # 2. Update Style Dictionary
   npm install style-dictionary@5

   # 3. Update build script
   # - Convert to ESM
   # - Update format names
   # - Update transform groups

   # 4. Test locally
   npm run build:tokens

   # 5. Update CI/CD
   # - Update Node.js version
   # - Test workflow
   ```

4. **Testing Strategy**
   - Local testing
   - CI/CD validation
   - Component testing
   - Build verification

5. **Rollback Plan**
   - Keep v4.3.0 in package-lock.json
   - Document rollback steps
   - Test rollback process

## Need Help?

- Check the [README.md](./README.md) for project overview
- Review existing token usage in components
- Open an issue for specific questions 