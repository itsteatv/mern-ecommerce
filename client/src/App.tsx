import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<p>AppLayout</p>}>
            <Route index element={<Navigate replace to="products" />} />
            <Route path="products" element={<p>products</p>} />
            <Route path="products/:productsId" element={<p>productsId</p>} />
          </Route>

          <Route path="*" element={<p>PageNotFound</p>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
