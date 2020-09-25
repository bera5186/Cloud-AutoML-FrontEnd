import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
// import { Dashboard } from "./pages/dashboard.page";
// import  PricingPage  from "./pages/pricing.page";
const Dashboard = React.lazy(() => import("./pages/dashboard.page"));
const PricingPage = React.lazy(() => import("./pages/pricing.page"));

function App() {
  return (
    <React.Suspense fallback={<h3>Loading..</h3>}>
      <Router>
        <Switch>
          <Route path="/dash">
            <Dashboard />
          </Route>
          <Route path="/pricing">
            <PricingPage />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
