import * as React from "react";
import { AppContextProviders } from "./context";
import BingeWatchApp from "./BingeWatchApp";

function App() {
  return (
    <AppContextProviders>
      <AppConsumer />
    </AppContextProviders>
  );
}

const AppConsumer = () => {
  return <BingeWatchApp />;
};

export { App };
