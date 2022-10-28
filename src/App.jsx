import * as React from "react";
import { AppContextProviders } from "./context";
import BingeWatchApp from "./BingeWatchApp";

function App() {
  return (
    <AppContextProviders>
      <BingeWatchApp />
    </AppContextProviders>
  );
}

export { App };
