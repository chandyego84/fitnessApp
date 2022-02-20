import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/home.js";
import TestPage from "./pages/testPage.js";
import DisplayProfile from "./pages/dispProfile.js";
import DisplayForm from "./pages/dispForm.js";
import Post from "./pages/post.js";
import NewPost from './pages/newpost.js';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={DisplayForm} />
          <Route path="/test" component={TestPage} />
          <Route path ="/dispProfile" component={DisplayProfile} />
          <Route exact path="/dispForm" component={DisplayForm} />
          <Route path = "/dispForm/:name/:age/:height/:weight" component={DisplayForm} />
          <Route path = "/post" component={Post} />
          <Route path = "/newpost" component={NewPost} />
        </Switch>
    </Router>
  );
}
