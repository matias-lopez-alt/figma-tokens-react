# Figma Tokens React

A React application that demonstrates the use of design tokens generated from Figma. This project includes a complete CI/CD pipeline for token validation and automatic build processes.

## Requirements

- Node.js >= 20.0.0 (LTS version)
- npm >= 10.0.0
- Style Dictionary v4.3.0

## Features

- Design tokens from Figma
- Multiple output formats (SCSS, JS, JSON, TypeScript)
- Automated validation pipeline
- Pre-commit hooks for local validation
- GitHub Actions for CI/CD
- Branch protection rules
- TypeScript support

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build tokens:
   ```bash
   npm run build:tokens
   ```

3. Start development server:
   ```bash
   npm start
   ```

## Documentation

- [Contributing Guide](./CONTRIBUTING.md) - Detailed development workflow and guidelines
- [Design Tokens](./design-tokens/README.md) - Token structure and usage
- [Components](./src/components/README.md) - React components using design tokens

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:
- Validates design tokens
- Generates multiple output formats
- Ensures type safety
- Protects the main branch

See [Contributing Guide](./CONTRIBUTING.md) for detailed information about the development process and CI/CD workflow.

## Project Structure

```
├── design-tokens/          # Design token definitions and build process
│   ├── figma-tokens.json   # Token source file
│   ├── build-tokens.cjs    # Build script
│   └── build/             # Generated token files
├── src/                   # React application
│   ├── components/        # React components
│   └── styles/           # Global styles
├── .github/              # GitHub configuration
│   └── workflows/        # GitHub Actions workflows
└── package.json          # Project dependencies and scripts
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build production bundle
- `npm run build:tokens` - Build design tokens
- `npm test` - Run tests
- `npm run lint` - Run linter

## Version Compatibility

This project uses specific versions of key dependencies:
- Style Dictionary: v4.3.0
- Node.js: >= 20.0.0
- React: ^18.2.0
- TypeScript: ^4.9.5

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the upgrade plan to Style Dictionary v5.

## License

MIT
