import { useFetch } from "react-rest-api";

export const ComponentWithUseApi = ({ url }) => {
  const { loading, result, error } = useFetch(url);

  if (error) {
    return error.toString();
  }
  return loading
    ? "loading ..."
    : result.name || JSON.stringify(result, null, 2);
};

export default ComponentWithUseApi;
