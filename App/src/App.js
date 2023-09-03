import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import AddContact from "./pages/contact/AddContact";
import UpdateContact from "./pages/contact/UpdateContact";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={AddContact} />
          <Route path="/edit/:id" exact component={UpdateContact} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
