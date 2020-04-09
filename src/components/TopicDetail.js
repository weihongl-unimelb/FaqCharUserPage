import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Col, Card, Row, Container } from 'react-bootstrap';

const API = 'https://ocapi20200225090922.azurewebsites.net/faq/';

class QuestionDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            questionItems:[],
            topics: [],
        }
    }


    componentDidMount() {
        const QUERY = 'questionTopics/' + this.props.match.params.id + '/topQuestions/50';
        fetch(API + QUERY)
          .then(response => response.json())
          .then(data => this.setState({questionItems: data}));

        fetch(API + 'questionTopics')
        .then(response => response.json())
        .then(data => this.setState({topics: data}));
    }

    componentWillReceiveProps(nextProps){
        const QUERY = 'questionTopics/' + nextProps.match.params.id + '/topQuestions/50';
        
        fetch(API + QUERY)
          .then(response => response.json())
          .then(data => {if(data != this.state.questionItems){
              this.setState({questionItems: data})
            }});
    }

    render(){
        console.log(this.state);
        const questions = this.state.questionItems.map((question)=>{
            return(
                <Link  to={`/QuestionDetail/${question.id}`}><ListGroup.Item key={question.id}>{question.description}</ListGroup.Item></Link>
            );
        });

        const topics = this.state.topics.map((topic)=>{
            return(
                <Link to={`/TopicDetail/${topic.id}/${topic.name}`}><Card.Header><img src={topic.icon.url} align="left" />{ topic.name }</Card.Header></Link>
            ) 
        });

        return(
            <div className="topicDetail">
                <Container>
                    <Row className="topicDetailRow">
                        <Col xs={12} md={7}>
                            <Card style={{ width: '45rem'}} >
                            <Card.Header>{ this.props.match.params.name }</Card.Header>
                            <ListGroup variant="flush" style={{textAlign:"left"}}>
                                <ListGroup.Item style={{fontSize:"0.9rem"}}>{this.state.questionItems.length} FAQS</ListGroup.Item>
                                {questions}
                            </ListGroup>
                            </Card>
                        </Col>

                    
                        <Col md={{ span: 4, offset: 1 }}>
                            <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                {topics}
                            </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
                
            </div>
        );
    }
}

export default QuestionDetail;