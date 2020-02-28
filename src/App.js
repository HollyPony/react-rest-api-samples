import React, { useState, useContext, useCallback } from "react";
import { ApiProvider, ApiContext } from "react-rest-api";

import ComponentWithUseContext from "./ComponentWithUseContext";
import { ComponentWithWithApi } from "./ComponentWithConsumer";
import ComponentWithConsumer from "./ComponentWithConsumer";
import ComponentWithUseApi from "./ComponentWithUseApi";
import ComponentWithUseGetJson from "./ComponentWithUseGetJson";

import "./App.scss";

const modes = [
  { name: "useContext", c: ComponentWithUseContext },
  { name: "useApi", c: ComponentWithUseApi },
  { name: "useGet", c: ComponentWithUseGetJson },
  { name: "withApi", c: ComponentWithWithApi },
  { name: "Consumer", c: ComponentWithConsumer }
];

const Configurator = () => {
  const api = useContext(ApiContext);

  const setConfig = useCallback(() => {
    api.setConfig(oldConfig => ({
      ...oldConfig,
      url: undefined
    }));
  }, [api]);

  return <button onClick={setConfig}>define url to undefined</button>;
};

export default function App() {
  console.log("render app");
  const [{ c: CurrentMode }, setCurrentMode] = useState(modes[0]);
  const [apiConfig, setApiConfig] = useState({
    url: "https://swapi.co/api",
    config: {
      headers: {
        "Content-Type": "application/json"
      }
    },
    resolveCallback: response => response.json()
  });

  const renderButtons = () => (
    <div className="modeSelector">
      {modes.map(mode => (
        <button key={mode.name} onClick={() => setCurrentMode(mode)}>
          {mode.name}
        </button>
      ))}
    </div>
  );

  return (
    <ApiProvider {...apiConfig} setConfig={setApiConfig}>
      {renderButtons()}
      <Configurator />
      <div className="CurrentMode">
        <CurrentMode url={"/people/3"} />
      </div>
    </ApiProvider>
  );
}
