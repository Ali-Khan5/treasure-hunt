import React, { Component } from "react";
import MyCard from "../smallComponents/Card";
import { Container, Row, Col, Button } from "react-bootstrap";
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            title: '',
            imgDetails: '',
            loading:false,
            data:'',
        }
    }
    upload = () => {
        this.setState({data:'',loading:true})
        var data = new FormData();
        
        // data.append("title", this.state.title);
        // data.append("content", this.state.content);
        data.append("img", this.state.imgDetails);
        fetch('https://treasue-hunting.au-syd.mybluemix.net/notes', {
            method: 'POST',
            mode: 'cors',
            body: data,
        }).then(response => response.json()).then(res => {
            console.log(res);
            // this.props.history.push('/View/' + res._id);
            this.setState({data:res,loading:false})

        }).catch(error => console.error('Error:', error));


    }
    handleUploadFile = (event) => {
        console.log(event.target.files[0]);

        this.setState({ imgDetails: event.target.files[0] });
    }
    changeContent = (e) => {
        console.log('i am runing at update'); this.setState({ content: e.target.value });
        console.log(this.state.content)
    }
    changeTitle = (e) => {
        console.log('i am runing at update'); this.setState({ title: e.target.value });
        console.log(this.state.title)
    }
    render(){

        return (
          <div className="pageMiddle">
          <Container>
            <h2 className="">Test the Already Trained Model </h2>
            <Row>
              <Col>  
              <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Upload a Picture to Test our Trained Watson Image Recognition Model</label>
                    <input type="file" onChange={this.handleUploadFile} className="form-control-file" />
                </div>

                <br />
                <button onClick={this.upload} className="btn btn-primary"> Test Model </button>
              </Col>
              
            </Row>
            <Row>
            <Col> 
        <h3 style={{color:'white',marginTop:'20px'}}>{this.state.loading ? "Loading..." : null}</h3>
                 {this.state.data ? <MyCard userData={this.state.data.classifiedImages ? this.state.data.classifiedImages.images[0].classifiers[0].classes: [{class:'cannot detect',score:'0.0'}]} Names={"ali"}/>:null}
            </Col>
                </Row>
          </Container>
          </div>
        );
    }
  }
  
  export default Test;