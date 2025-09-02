# React + Astro Production Setup

A production-ready React + Astro project with comprehensive tooling, testing, and deployment configuration.

## ✨ Features

- **🚀 Astro** - Fast, modern static site generator with React integration
- **⚛️ React 18** - Latest React with TypeScript support
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **📝 TypeScript** - Strict type checking enabled
- **🔍 ESLint** - Comprehensive linting with Airbnb, React, and Astro rules
- **💅 Prettier** - Consistent code formatting
- **🐺 Husky** - Git hooks for code quality
- **🧪 Vitest** - Fast unit testing with React Testing Library
- **📊 Coverage** - Test coverage reports
- **☁️ AWS Amplify** - Ready-to-deploy configuration
- **🔄 GitHub Actions** - CI/CD pipeline

## 🛠️ Setup

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Installation

```bash
# Enable pnpm
corepack enable

# Install dependencies
pnpm install

# Setup git hooks
pnpm prepare
```

## 🚀 Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint
pnpm lint:fix

# Format code
pnpm format
pnpm format:check

# Run tests
pnpm test           # Run tests with coverage
pnpm test:watch     # Watch mode
pnpm test:ui        # Visual test runner

# Type checking
pnpm type-check
```

### Development Workflow

1. **Code**: Write your components in `src/components/` and pages in `src/pages/`
2. **Test**: Add tests in `src/tests/` with `.test.tsx` extension
3. **Commit**: Pre-commit hooks will automatically:
   - Format code with Prettier
   - Lint with ESLint
   - Run type checking
   - Execute tests

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions CI/CD
├── .husky/               # Git hooks
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── layouts/          # Astro layouts
│   ├── pages/           # Astro pages
│   └── tests/           # Test files
├── amplify.yml          # AWS Amplify config
├── vitest.config.ts     # Test configuration
└── ...config files
```

## 🧪 Testing

This project uses **Vitest** with **React Testing Library** for testing:

- Place test files in `src/tests/` directory
- Use `.test.tsx` or `.spec.tsx` extensions
- Coverage reports generated in `coverage/` directory

### Running Tests

```bash
# Run all tests with coverage
pnpm test

# Watch mode for development
pnpm test:watch

# Visual test runner UI
pnpm test:ui
```

## 🔧 Configuration

### ESLint

Extends multiple configurations:
- `eslint:recommended`
- `@typescript-eslint/recommended`
- `plugin:react/recommended`
- `plugin:astro/recommended`
- `next/core-web-vitals`
- `airbnb`
- `plugin:prettier/recommended`

### Prettier

- Semi-colons enabled
- Single quotes
- Trailing commas
- 100 character line width
- 2-space indentation

### TypeScript

- Strict mode enabled
- Path aliases configured (`@/` for `src/`)
- Full type checking

## 🚀 Deployment

### AWS Amplify

The project includes `amplify.yml` for AWS Amplify deployment:

1. Connect your repository to AWS Amplify
2. Amplify will automatically detect the build settings
3. Uses pnpm for faster builds with caching

### Manual Build

```bash
# Build for production
pnpm build

# Preview build locally
pnpm preview
```

The built site will be in the `dist/` directory.

## 🔄 CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push/PR:

1. **Prettier Check** - Ensures code formatting
2. **ESLint** - Code quality and style checks  
3. **TypeScript** - Type checking
4. **Tests** - Unit tests with coverage
5. **Build** - Production build verification

## 📦 Dependencies

### Runtime Dependencies
- `astro` - Static site generator
- `@astrojs/react` - React integration
- `@astrojs/tailwind` - Tailwind CSS integration
- `react` / `react-dom` - React framework
- `tailwindcss` - CSS framework

### Development Dependencies
- `@typescript-eslint/*` - TypeScript linting
- `eslint-*` - Various ESLint configurations
- `prettier` - Code formatting
- `husky` - Git hooks
- `lint-staged` - Staged file linting
- `vitest` - Testing framework
- `@testing-library/*` - Testing utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting: `pnpm test && pnpm lint`
5. Commit your changes (pre-commit hooks will run)
6. Push and create a Pull Request

## 📝 License

This project is licensed under the MIT License.