Persist Venture Assignment
This is a React application built using Vite, Redux Toolkit, Tailwind CSS, Material UI, Chakra UI, and Framer Motion. The app allows users to manage events, with features like filtering, viewing details, and smooth animations.

Features:
Event management with various filters (Today, Tomorrow, This Week, etc.)
Animated transitions for a smooth user experience
Redux for state management of events
Tailwind CSS for utility-first styling
Chakra UI and Material UI components for modern UI design






src/
├── assets/                          # Static assets (e.g., images)
│   ├── christmas.webp
│   └── event_1737999482266.webp     
├── components/  
│   └── ui/    
│           ├── input.tsx, select.tsx  # UI components (inputs, selects, etc.)
│   ├── Header.jsx                   # Header Component
│   ├── CreateEvent.jsx              # Event creation page/component
│   ├── Home.jsx                     # Home page
│   ├── About.jsx                    # About page
├── features/                        
│   └── events/
│       ├── Events.jsx                # Events listing component
│       └── eventsSlice.js            # Redux slice for events
├── lib/
│       └── utils.ts                 # Utility functions
├── pages/                           
│   └── EventDetails.jsx             # Event details page
├── app/                             
│   └── store.js                     # Redux store configuration
├── App.js                            # Main App component
└── index.js                         # Entry point for React






Prerequisites
Ensure you have the following tools installed:

Node.js (v14 or higher)
npm (v6 or higher)




Setup and Installation
1. Clone the Repository
bash
Copy
git clone https://github.com/Junayidjd/perisit-venture-react-assignment
cd persist-venture-assignment


2. Install Dependencies
Run the following command to install all required dependencies:

bash
Copy
npm install
This will install the dependencies listed in the package.json file under dependencies and devDependencies.



3. Start Development Server
To start the development server, run:

bash
Copy
npm run dev
The application will be available at http://localhost:3000.




Dependencies
The project includes the following libraries and tools:

Core Dependencies
React: A JavaScript library for building user interfaces.

npm install react react-dom



Vite: A fast bundler and build tool for modern web apps.
npm install vite @vitejs/plugin-react --save-dev



State Management
Redux Toolkit: State management for React applications.
npm install @reduxjs/toolkit react-redux




UI Libraries
Material UI: A React component library following Material Design principles.
npm install @mui/material



Chakra UI: A modular component library for building accessible React apps.
npm install @chakra-ui/react @emotion/react @emotion/styled



Styling and Tailwind CSS
Tailwind CSS: A utility-first CSS framework.
npm install tailwindcss @tailwindcss/vite



Tailwind Merge: For merging Tailwind class names conditionally.
npm install tailwind-merge



Tailwind CSS Animate: Adds animations to Tailwind CSS.
npm install tailwindcss-animate



Animation Libraries
Framer Motion: For animations in React.
npm install framer-motion



GSAP: For high-performance animations.
npm install gsap



Utilities
Lucide React: Icons library for React.
npm install lucide-react



clsx: A utility for constructing className strings conditionally.
npm install clsx




Radix UI Select: A customizable select dropdown.
npm install @radix-ui/react-select



Linting and TypeScript
ESLint: A tool for identifying and fixing problems in JavaScript and JSX code.
npm install eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh --save-dev



TypeScript: A static type checker for JavaScript.
npm install typescript @types/react @types/react-dom @types/node --save-dev










Summary of Commands
Clone repo and navigate to the project folder:


git clone <repository-url>
cd persist-venture-assignment
Install dependencies:

npm install
Start the development server:

npm run dev
