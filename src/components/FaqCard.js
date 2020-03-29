import React, { Component } from 'react';
import { Card,ListGroup } from 'react-bootstrap';

const API = 'https://ocapi20200225090922.azurewebsites.net/faq/';
class FaqCard extends Component{
    constructor(props){
        super(props);
        this.state={
            questions:[]
        }
    }

    componentDidMount(){
        const QUERY = 'questionTopics/' + this.props.topicId + '/topQuestions/3';
        fetch(API + QUERY)
        .then(response => response.json())
        .then(data => this.setState({questions: data}));
    }
    
    render(){
        const questions = this.state.questions.map((question)=>{
            return(
            <ListGroup.Item key={question.id}>{question.description}</ListGroup.Item>
            );
        });

        return(
            <ListGroup variant="flush">
                {questions}
            </ListGroup>
        );
    }
    
}

export default FaqCard;