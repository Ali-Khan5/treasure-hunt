import React, { Component } from "react";
import MyCard from "../smallComponents/Card";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
class Train extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      Classname: "",
      imgDetails: "",
      loading: false,
      data: ""
    };
  }
  upload = () => {
    this.setState({ data: "", loading: true });
    var data = new FormData();

     data.append("title", this.state.Classname);
    data.append("content", this.state.content);
    data.append("img", this.state.imgDetails);
    fetch("http://localhost:5000/updates", {
      method: "POST",
      mode: "cors",
      body: data
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        // this.props.history.push('/View/' + res._id);
        this.setState({ data: res, loading: false });
      })
      .catch(error => console.error("Error:", error));
  };
  CheckStatus = () => {
    // this.setState({ data: "", loading: true });

    fetch("http://localhost:5000/check", {
      method: "GET",
      mode: "cors"
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        // this.props.history.push('/View/' + res._id);
        this.setState({ data: res});
      })
      .catch(error => console.error("Error:", error));
  };
  handleUploadFile = event => {
    console.log(event.target.files[0]);

    this.setState({ imgDetails: event.target.files[0] });
  };
  changeContent = e => {
    console.log("i am runing at update");
    this.setState({ content: e.target.value });
    console.log(this.state.content);
  };
  changeTitle = e => {
    console.log("i am runing at update");
    this.setState({ Classname: e.target.value });
    console.log(this.state.Classname);
  };
  render() {
    return (
      <div className="pageMiddle">
        <Container>
          <h2 className=""> Add your Own Class To the Model </h2>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name of The Class: </Form.Label>
                <Form.Control type="email" placeholder="Name of that person i.e Hassan" style={{width:'40%'}} onChange={this.changeTitle}/>
              </Form.Group>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">
                  upload a zip file containing atleast 10 images belonging to that class
                </label>
                <input
                  type="file"
                  onChange={this.handleUploadFile}
                  className="form-control-file"
                />
              </div>

              <br />
              <button onClick={this.upload} className="btn btn-primary">
                {" "}
                Train Model{" "}
              </button>
              <button onClick={this.CheckStatus} style={{marginLeft:'10px'}} className="btn btn-light">
                {" "}
                Check Model{" "}
              </button>

            </Col>
            
          </Row>
          <Row>
            {/* <Col>
              <h3 style={{ color: "white", marginTop: "20px" }}>
                {this.state.loading ? "Loading..." : null}
              </h3>
              {this.state.data ? (
                <MyCard
                  userData={
                    this.state.data.response.images[0].classifiers[0].classes
                  }
                  Names={"ali"}
                />
              ) : null}
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Train;
