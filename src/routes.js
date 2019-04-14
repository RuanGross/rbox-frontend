import React from "react"; // Ao utilizar JSX é necessário importar o React, mesmo não utilizando no contexto.
import { BrowserRouter, Route, Switch } from "react-router-dom";

// BrowserRouter = usado para indicar como as routes vão se comportar
// Switch = Garante que cada endereço chame apenas uma route

import Main from "./pages/Main";
import Box from "./pages/Box";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/box/:id" component={Box} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
