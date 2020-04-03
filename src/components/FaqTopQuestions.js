import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../src/TopQuestions.css';

const API = 'https://ocapi20200225090922.azurewebsites.net/faq/';
const QUERY = 'Questions/top/6';

class FaqTopQuestions extends Component{
    constructor(props){
        super(props);
        this.state={
            questions:[]
        }
    }

    componentDidMount(){
        fetch(API + QUERY)
        .then(response => response.json())
        .then(data => this.setState({questions: data}));
    }

    

    render(){
        const questionItems = this.state.questions.map((question)=>{
            return (
                <Link  key={question.id} to={`/QuestionDetail/${question.id}`} style={styles.link}>
                    <ListGroup.Item>{question.content} <i className="fa fa-chevron-right"></i> </ListGroup.Item>
                </Link>
            );
        });

        return(
            <div className="topQuestions">
                <h2>POPULAR FAQS</h2>
                <ListGroup >
                    {questionItems}
                </ListGroup>
            </div>
        );
    } 
}
const styles = {
    link: {
      color: "white",
      ":hover": {
        textDecoration: "none",
      },
    },
  };

export default FaqTopQuestions;