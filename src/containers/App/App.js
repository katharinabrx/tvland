import React from "react";
import "./App.scss";

// State management
import { Provider } from "react-redux";
import store from "../../store";

// Page routing
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ShowPage from "../../pages/ShowPage";
import EpisodePage from "../../pages/EpisodePage";

const pageNotFound = () => {
  return (
    <div className="App__page-not-found">
      <h1>404: Page Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <h1 className="sr-only">TV Show App</h1>
        <Provider store={store}>
          <Router basename="/">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/shows" exact component={HomePage} />
              <Route path="/shows/:showId" exact component={ShowPage} />
              <Route path="/shows/:showId/episodes/:episodeId" exact component={EpisodePage} />
              <Route path="/shows/:showId/episodes" component={ShowPage} />
              <Route path="/shows/:showId" component={ShowPage} />
              <Route component={pageNotFound} />
            </Switch>
          </Router>
        </Provider>
      </main>
    );
  }
}

export default App;
