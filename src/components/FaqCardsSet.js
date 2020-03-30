import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import FaqCard from './FaqCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Faq.css';
import { Col } from 'react-bootstrap';


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
                <Col xs={12} md={4} key={topic.id}>
                    <Card style={{ width: '22rem' }} key={topic.id}>
                        <Card.Header>{ topic.name }</Card.Header>
                        <FaqCard topicId={topic.id}/>
                    </Card>
                </Col>
                
            );
        });



        return (
            <div className="container">
                <div className="row questionCardsRow">
                    {questionCard}
                </div>
            </div>
        );
    }
}

export default FaqCardsSet;