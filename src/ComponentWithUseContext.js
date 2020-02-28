import { useState, useEffect, useContext } from "react";

import { ApiContext } from "react-rest-api";

export const ComponentWithUseContext = ({ url }) => {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const api = useContext(ApiContext);

  useEffect(() => {
    api
      .get(url)
      .then(res => setResult(res))
      .catch(err => setError(JSON.stringify(err, null, 2)));
  }, [api]);

  return error || (result ? result.name : "loading ...");
};

export default ComponentWithUseContext;
