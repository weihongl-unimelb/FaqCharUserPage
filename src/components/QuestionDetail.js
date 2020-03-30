import React, { Component } from 'react';

const API = 'https://ocapi20200225090922.azurewebsites.net/faq/questions/';

class QuestionDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            questionItem:{}
        }
    }

    componentDidMount() {
        const QUERY = this.props.match.params.id;
        fetch(API + QUERY)
          .then(response => response.json())
          .then(data => this.setState({questionItem: data}));
    }

    render(){
        console.log(this.state.questionItem);
        return(
            <div>
                <h1>{this.state.questionItem.description}</h1>
                <div dangerouslySetInnerHTML={{__html:this.state.questionItem.content}}></div>
                <div dangerouslySetInnerHTML={{__html:this.state.questionItem.answer}}></div>
                <div dangerouslySetInnerHTML={{__html:this.state.questionItem.updateTime}}></div>
                
            </div>
        );
    }
}

export default QuestionDetail;