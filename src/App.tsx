import {RootRouter} from "./route/RootRouter.tsx";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <RootRouter/>
    </QueryClientProvider>
  )
}

export default App
