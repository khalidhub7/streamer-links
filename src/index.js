import React from 'react';
import { createRoot } from 'react-dom/client';

// Load App component with a simple loading state
const App = React.lazy(() => import('./App'));

const container = document.getElementById('root');
const root = createRoot(container);

// Simple loading component
const IndexLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#0e0f13'
  }}>
    <div style={{
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      border: '4px solid rgba(255,255,255,0.12)',
      borderTopColor: '#7289da',
      borderRightColor: '#e4405f',
      animation: 'spin 1s linear infinite'
    }}></div>
  </div>
);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<IndexLoader />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);