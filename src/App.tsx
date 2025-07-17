import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Learning from "./pages/Learning";
import Budget from "./pages/Budget";
import Community from "./pages/Community";
import Investment from "./pages/Investment";
import AddSavings from "./pages/AddSavings";
import ViewPlan from "./pages/ViewPlan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/community" element={<Community />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/add-savings" element={<AddSavings />} />
          <Route path="/view-plan" element={<ViewPlan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
