import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Category from "@/pages/category";
import ProductDetail from "@/pages/product-detail";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Login from "@/pages/auth/login";
import Signup from "@/pages/auth/signup";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout"; // Uncomment this line if you have a Checkout page
// import Checkout from "@/pages/checkout"
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/category/:slug" component={Category} />
        <Route path="/product/:slug" component={ProductDetail} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
