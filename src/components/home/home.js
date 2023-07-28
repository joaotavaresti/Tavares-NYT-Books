import React from "react";
import { Row, Col, Card } from 'react-materialize';
import BookList from "../booklist/booklist";

const Home = () => (
  <Row>
    <Col m={8} s={12}>
        <br></br>
        <h5 className="subtitle" align="right"><b>Tavares NYT Bestsellers Books</b></h5>
        <Row>
          <div>
          <p align="right">"Welcome to the most friendly app for passionate readers! 
            <p>Checkout the current bestsellers books curated by the New York Times (NYT).</p>
            Enjoy your reading experience choosing one list card below!" (João Tavares)</p>
          </div>
        </Row>

        <BookList></BookList>   
    </Col>
  </Row>
);

export default Home;