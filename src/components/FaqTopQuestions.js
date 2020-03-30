import React, { Component } from 'react';
import Faq from "react-faq-component";

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
        const data = {title:"POPULAR FAQS", rows:[]};
        const questionsSet = this.state.questions.map((question)=>{
            data.rows.push({
                title: question.content,
                content: question.answer
            })
            return(null);
        });
        const styles = {
            // bgColor: 'white',
            // titleTextColor: "blue",
            // rowTitleColor: "blue",
            rowContentColor: 'grey',
            // arrowColor: "red",
        };

        return (
            <div className="topQuestions">
                {questionsSet}
                <Faq data={data} styles={styles} />
            </div>
        );
    }
}
export default FaqTopQuestions;