# Learning Admin Frontend

A Next.js admin panel for the learning platform with screens for document management, question generation, and artifact review.

## Features

- **Login Screen**: Secure authentication for admin users
- **Documents Tab**: Upload documents with real-time classification progress
- **Question Generation**: Generate questions based on subject and curriculum taxonomy
- **Artifacts Review**: View and manage AI-generated artifacts with approval/rejection workflow

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Custom shadcn/ui-style components
- **State Management**: Zustand
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_CLIENT_ID=your-client-id
```

## Project Structure

```
app/
  - layout.tsx          # Root layout
  - page.tsx            # Home page with auth routing
  - globals.css         # Global styles

components/
  - ui/                 # Reusable UI components
  - login-screen.tsx    # Login page
  - dashboard-layout.tsx # Main dashboard layout
  - documents-tab.tsx   # Document upload & classification
  - question-generation-tab.tsx # Question generation
  - artifacts-tab.tsx   # Artifact review

lib/
  - auth-store.ts       # Zustand auth store
  - utils.ts            # Utility functions
```

## API Integration

The frontend is currently using mock data. To integrate with the backend API:

1. Update `lib/auth-store.ts` with actual authentication endpoints
2. Create API client functions in `lib/api.ts`
3. Replace mock data in components with actual API calls
4. Generate TypeScript SDK from backend handler annotations

## Notes

- All screens are built with placeholder/mock data
- API integration will be handled after SDK generation from backend
- Components follow shadcn/ui patterns for consistency
- Real-time classification progress is simulated with timeouts
