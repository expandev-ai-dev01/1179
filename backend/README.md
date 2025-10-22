# Cadastro de Bancos 2 - Backend API

Backend API for Brazilian banking system registration.

## Features

- Bank registration management
- Data validation and consistency checks
- Export functionality (CSV, PDF)
- RESTful API architecture
- TypeScript implementation
- In-memory data storage

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Validation**: Zod
- **Testing**: Jest

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
```

### Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## API Documentation

### Base URL

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check

```
GET /health
```

Returns server health status.

### API Endpoints

API endpoints will be documented here as features are implemented.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| API_VERSION | API version | v1 |
| CORS_ORIGINS | Allowed CORS origins | localhost:3000,localhost:3001,localhost:5173 |
| CACHE_TTL | Cache time-to-live (seconds) | 3600 |
| CACHE_CHECK_PERIOD | Cache check period (seconds) | 600 |

## Testing

The project uses Jest for testing with the following conventions:

- Unit tests: `*.test.ts` files colocated with source files
- Integration tests: `*Integration.ts` files colocated with source files
- Global test utilities: `src/tests/` directory

## Code Standards

- TypeScript strict mode enabled
- ESLint for code quality
- 2-space indentation
- Single quotes for strings
- Semicolons required
- Maximum line length: 120 characters

## Contributing

1. Follow the established code structure
2. Write tests for new features
3. Ensure all tests pass before committing
4. Follow TypeScript and ESLint standards
5. Document all public APIs

## License

ISC