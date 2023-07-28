import React from "react";
import Home from "./components/home/home";
import Book from "./components/book/book";
//import Contact from "./components/contact/contact";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'
import BookList from "./components/booklist/booklist";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/booklist/' component={BookList}/>
        <Route path="/book/" component={Book}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;