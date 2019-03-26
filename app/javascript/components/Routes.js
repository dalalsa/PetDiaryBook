import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import PetDiaryTow from "./PetDiaryTow";
import App from "./App";

class Routes extends React.Component {
  render() {
    // return (
    //   <HashRouter>
    //     <div>
    //       <nav>
    //         <Link to="/pets/:id">Post 1</Link>
    //       </nav>

    //       <Switch>
    //         <Route path="/pets/:id" component={PetDiaryTow} />
    //       </Switch>
    //     </div>
    //   </HashRouter>
    // );
  }
}

export default Routes;
