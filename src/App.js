import React from 'react';
import Navbar from "./components/Navbar";
import NavbarPortrait from "./components/NavbarPortrait";
import { Row, Col } from 'antd';
import {useMediaQuery} from "react-responsive";

import HomePage from "./pages/HomePage";
import RepoPage from "./pages/RepoPage";
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";
import Quotes from "./pages/Quotes";
 

import "./App.scss";

function App() {

  const ids = ["#home", "#about", "#quotes","#contact", "#repo"]
  
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)'
  })

  return (
    <>
     <Row className="app-container">
      <Col span={2} className="app-container__left">
        {isMobile ? <NavbarPortrait ids={ids}></NavbarPortrait> : <Navbar ids={ids}></Navbar>}
      </Col>
      <Col span={2}></Col>
      <Col span={24}>
      <HomePage id="home"></HomePage>
      <About id="about" ></About>
      <Quotes id="quotes"/>
      <Contact id="contact" ></Contact>
      <RepoPage id="repo"></RepoPage>
      </Col>
     </Row>
    
    </>
  );
}

export default App;
