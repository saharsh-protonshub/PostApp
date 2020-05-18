import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PostDetailPage from "./Components/PostDetailPage";
import LandingPageComponent from "./Components/LandingPage";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPageComponent} />
              <Route exact path="/postDetail" component={PostDetailPage} />
          </Switch>
      </Router>
  );
}

export default App;
