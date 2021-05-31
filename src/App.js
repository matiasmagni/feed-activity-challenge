import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './features/Home/Home';
import Comments from './features/Comments/Comments';
import './App.css';

const App = () => {
  return (
    <Router>
      <header className="mt-0 pt-0">
        <div className="bg-cover clearfix pt-3">
          <h2 className="logo">Shahala</h2>
          <input type="text" id="nav-search" className="form-control nav-search mx-auto" name="" />
          <div className="ml-0 mr-0 pb-1">
            <nav className="navbar navbar-expand-md">
              <button className="navbar-toggler ml-auto" data-target="#my-nav" data-toggle="collapse"
                aria-controls="my-nav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="bar1"></span> <span className="bar2"></span> <span className="bar3"></span>
              </button>
              <div id="my-nav" className="collapse navbar-collapse">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <form action="" method="POST">
                      <div className="input-group mt-0 mx-auto" style={{ width: 16 }}>
                        <div className="">
                          <img src="/images/search-icon.png" id="toggle-search"
                            className="ml-2 toggle-search" alt="search icon" />
                        </div>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/comments/:postId">
          <Comments />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
