import Header from "./components/Header/Header";
import NodeTree from "./components/NodeTree/NodeTree";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header title="Mitrust react test" />

      <NodeTree />
    </QueryClientProvider>
  );
}

export default App;
