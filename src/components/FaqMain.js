import React from 'react';
import FaqCardsSet from './FaqCardsSet';
import FaqTopQuestions from './FaqTopQuestions';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, NavbarBrand } from 'reactstrap';
import style from '../css/FaqMain.css';

function FaqMain() {
  return (
    <div>
        <Navbar dark color='primary'>
          <div className="container">
            <NavbarBrand href="/">FAQ User Page</NavbarBrand>
          </div>  
        </Navbar>
        <Container className={style.MarginTop}>
            <Row className={style.MarginTop}>
                <FaqCardsSet />
            </Row>
        
            <Row xs={1} lg={2} className={style.MarginTop}>
                <FaqTopQuestions />
            </Row>
        </Container>
    </div>
  );
}
export default FaqMain;