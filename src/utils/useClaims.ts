import { useQuery } from "react-query";
import { getFetchQuery } from "./useFetch";

const useClaims = () =>
  useQuery(["getClaims"], () => getFetchQuery("/src/utils/claims.json"));

export default useClaims;
