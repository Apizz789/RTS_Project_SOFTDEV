import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />
        <Switch>
          <Route component={PageA} path="/" exact />
          <Route component={PageB} path="/page-b" />
          <Route component={PageC} path="/page-c" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}