import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import { Dashboard } from "./pages/dashboard.page";
import  PricingPage  from "./pages/pricing.page";

function App() {
  return(
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
  );
};

export default App;
