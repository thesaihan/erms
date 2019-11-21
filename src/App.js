import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import StudentListPage from "./pages/StudentListPage";
import StudentItemPage from "./pages/StudentItemPage";
import SubjectListPage from "./pages/SubjectListPage";
import SubjectItemPage from "./pages/SubjectItemPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="wrapper container-fluid">
          <Switch>
            <Route component={Dashboard} path="/" exact />
            <Route component={StudentListPage} path="/student" exact />
            <Route component={StudentItemPage} path="/student/id/:id"/>
            <Route component={StudentItemPage} path="/student/id"/>
            <Route component={SubjectListPage} path="/subject" exact />
            <Route component={SubjectItemPage} path="/subject/id/:id"/>
            <Route component={SubjectItemPage} path="/subject/id"/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
