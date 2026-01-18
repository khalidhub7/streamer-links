import React from "react";
import { createRoot } from "react-dom/client";

// Load App component with a simple loading state
const App = React.lazy(() => import("./App"));
import Loader from "./components/Loader/Loader";

/* const App = React.lazy(() =>
  new Promise(resolve =>
    setTimeout(() => resolve(import("./App")), 10000)
  )
); */

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
);
