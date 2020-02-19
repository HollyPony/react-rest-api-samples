import React from "react";
import { ApiProvider } from "react-rest-api";

import ComponentWithUseContext from "./ComponentWithUseContext";
import ComponentWithConsumer from "./ComponentWithConsumer";
import { ComponentWithWithApi } from "./ComponentWithConsumer";
import ComponentWithUseApi from "./ComponentWithUseApi";
import ComponentWithUseGetJson from "./ComponentWithUseGetJson";

const configuration = {
  url: "https://swapi.co/api/",
  config: {
    headers: {
      "Content-Type": "application/json"
    }
  },
  resolveCallback: response => response.json()
};

export default function App() {
  return (
    /* Following is a shortcut for :
     * `<ApiProvider url={configuration.url} config={configuration.config}>`
     */
    <ApiProvider {...configuration}>
      <div>
        <label>With api - </label>
        <ComponentWithUseContext url={"people/3"} />
      </div>
      <div>
        <label>With api hook - </label>
        <ComponentWithUseApi url={"people/3"} />
      </div>
      <div>
        <label>With getJson hook - </label>
        <ComponentWithUseGetJson url={"people/3"} />
      </div>
      <div>
        <label>With withApi - </label>
        <ComponentWithWithApi url={"people/3"} />
      </div>
      <div>
        <label>With consumer - </label>
        <ComponentWithConsumer url={"people/3"} />
      </div>
      <div>
        <label>With getJson hook 404 - </label>
        <ComponentWithUseGetJson url={"people/99"} />
      </div>
      <div>
        <label>With raw api hook unreachable - </label>
        <ComponentWithUseApi url={"http://)(*&^%$"} method="raw" />
      </div>
    </ApiProvider>
  );
}
