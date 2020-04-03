import React, { Component } from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import FaqCard from './FaqCard';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const API = 'https://ocapi20200225090922.azurewebsites.net/faq/';
const QUERY = 'questionTopics';

class FaqCardsSet extends Component{
    constructor(props){
        super(props);

        this.state = {
            topics: [],
        };
    }

    componentDidMount() {
        fetch(API + QUERY)
          .then(response => response.json())
          .then(data => this.setState({topics: data}));
    }
    

    render(){
        

        const questionCard = this.state.topics.map((topic)=>{
            return (
                <Col xs={12} md={6} lg={4} key={topic.id} className="questionCard">
                    <Card style={{ width: '22rem' }} key={topic.id}>
                        <ListGroup variant="flush">
                        <Link to={`/TopicDetail/${topic.id}/${topic.name}`}><Card.Header><img src={topic.icon.url} align="left" />{ topic.name }</Card.Header></Link>
                        <FaqCard topicId={topic.id}/>
                            <Link to={`/TopicDetail/${topic.id}/${topic.name}`}><ListGroup.Item className="viewAll">View All</ListGroup.Item></Link>
                        </ListGroup>
                    </Card> 
                </Col>
                
            );
        });



        return (
            <div className="container">
                <div className="row">
                    {questionCard}
                </div>
            </div>
        );
    }
}

export default FaqCardsSet;