import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import RecruitFunnel from "./pages/recruit-funnel/RecruitFunnel.tsx";
import NotFound from "./pages/NotFound";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/recruit-funnel" element={<RecruitFunnel />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
