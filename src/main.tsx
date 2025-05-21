import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useRegisterSW } from "virtual:pwa-register/react";
import { SettingsProvider } from "./SettingsContext";

function ServiceWorkerManager() {
  const {
    offlineReady: [offlineReady],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // Optionally log registration
    },
    onRegisterError(error) {
      // Optionally log error
    },
  });

  React.useEffect(() => {
    if (needRefresh) {
      if (confirm("New content available. Reload?")) {
        updateServiceWorker(true);
      }
    }
    if (offlineReady) {
      console.log("App ready to work offline");
    }
  }, [needRefresh, offlineReady, updateServiceWorker]);
  return null;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
      <ServiceWorkerManager />
    </SettingsProvider>
  </React.StrictMode>,
);
