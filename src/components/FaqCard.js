import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

    refill(){
        while(this.state.questions.length!=3){
            this.state.questions.push({});
            console.log(this.state.questions);
        }
    }

    
    render(){
        this.refill();
        const questions = this.state.questions.map((question)=>{
            if(question.description){
                return(
                    <Link key={question.id} to={`/QuestionDetail/${question.id}`}><ListGroup.Item>{question.description}</ListGroup.Item></Link>
                );}
            else{
                return(<div className="refill">{` `}</div>);
            }
        });

        return(
            <ListGroup variant="flush">
                {questions}
            </ListGroup>
        );
    }
    
}

export default FaqCard;