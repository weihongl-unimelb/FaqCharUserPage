import React from 'react';
import FaqCardsSet from './FaqCardsSet';
import FaqTopQuestions from './FaqTopQuestions';
import { Container, Row} from 'react-bootstrap';


function FaqMain() {
  return (
    <div>
        <Container >
            <Row >
                <FaqCardsSet />
            </Row>
        
            <Row xs={1} lg={2}>
                <FaqTopQuestions />
            </Row>
        </Container>
    </div>
  );
}
export default FaqMain;