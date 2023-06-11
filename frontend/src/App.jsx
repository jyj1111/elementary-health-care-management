import "./App.css";
import Router from "./routers/router";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
