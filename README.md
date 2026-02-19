# Planora

Planora is an AI-powered architectural visualization platform that transforms 2D floor plans into photorealistic 3D renders. Built with modern web technologies, it provides an intuitive interface for architects, designers, and real estate professionals to visualize and share their designs.

## Features

- **AI-Powered 3D Rendering**: Automatically converts 2D floor plans into photorealistic 3D architectural renders
- **Project Management**: Create, upload, and manage multiple architectural projects
- **Cloud Storage**: Seamless integration with Puter for file storage and synchronization
- **User Authentication**: Secure login via Puter authentication system
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Real-time Preview**: View rendered outputs with grid overlay visualization
- **Share & Export**: Easy sharing functionality for collaborative workflows

## Technologies Used

- **React** (19.2.4): A JavaScript library for building user interfaces
- **TypeScript** (5.9.2): A typed superset of JavaScript for better development experience
- **React Router** (7.12.0): Client and server-side routing
- **Tailwind CSS** (4.1.13): Utility-first CSS framework for styling
- **Vite** (7.1.7): Lightning-fast build tool and dev server
- **Puter.js** (2.2.10): Client library for Puter services (storage, authentication)
- **Lucide React**: Beautiful SVG icons library

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager
- A Puter account for authentication and storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rafiqdevhub/Planora-AI.git
   cd Planora-AI
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (create a `.env` file):
   ```
   VITE_PUTER_WORKER_URL=<your-puter-worker-url>
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Type checking:

```bash
npm run typecheck
```

## Project Structure

```
planora/
├── app/
│   ├── components/           # Reusable React components
│   │   ├── Navbar.tsx       # Navigation bar component
│   │   ├── Upload.tsx       # File upload component
│   │   └── ui/              # UI components
│   │       └── Button.tsx   # Button component
│   ├── routes/              # Page components and routes
│   │   ├── home.tsx         # Home page - project management
│   │   └── visualizer.$id.tsx # Visualizer page - 3D render viewer
│   ├── root.tsx             # Root layout component
│   ├── routes.ts            # Route configuration
│   └── app.css              # Global styles
├── lib/                      # Utility functions and actions
│   ├── ai.action.ts         # AI rendering service
│   ├── puter.action.ts      # Puter integration
│   ├── puter.hosting.ts     # Puter hosting utilities
│   ├── puter.worker.js      # Puter worker script
│   ├── utils.ts             # Helper utilities
│   └── constants.ts         # Application constants
├── public/                   # Static assets
├── build/                    # Production build output
├── vite.config.ts           # Vite configuration
├── react-router.config.ts   # React Router configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## Key Components

### Home Page (`routes/home.tsx`)

- Display list of user projects
- Upload new floor plan images
- Create and manage architectural projects
- Navigate to visualizer for each project

### Visualizer Page (`routes/visualizer.$id.tsx`)

- View 3D rendered output of floor plans
- Grid overlay visualization for scale reference
- Image comparison slider for before/after views
- Share rendered designs

### Upload Component (`components/Upload.tsx`)

- User-friendly file upload interface
- Image format validation
- Progress tracking for file uploads
- Integration with Puter storage

## API Integration

### Puter Services

- **Authentication**: User sign-in and sign-out via Puter
- **File Storage**: Upload and retrieve floor plans and renders
- **Project Management**: Store project metadata and render results

### AI Rendering

- Converts 2D floor plans to 3D photorealistic renders
- Uses advanced AI prompts for accurate architectural visualization
- Configurable render dimensions (default: 1024x1024)

## Configuration

Key constants and configurations are defined in `lib/constants.ts`:

- Storage paths for projects
- UI grid dimensions and colors
- AI rendering prompts
- API timeouts and delays

## Docker Support

The project includes a Dockerfile for containerized deployment. To build and run:

```bash
docker build -t planora .
docker run -p 3000:3000 planora
```

## Type Safety

The project uses TypeScript for full type safety. Run type checking:

```bash
npm run typecheck
```


