import React, { Component } from "react";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";
import "./App.css";

class App extends Component {
  state = {
    img: this.props.emptyState,
    isLoading: false,
  };

  getNewImageAndSetState() {
    this.setState({ isLoading: true });
    axios
      .get("https://foodish-api.herokuapp.com/api")
      .then((response) => {
        const foodData = response.data;
        this.setState({ img: foodData.image, isLoading: false });
      })
      .catch((error) => {
        this.setState({ img: this.props.emptyState, isLoading: false });
        console.log(error);
      });
  }

  componentDidMount() {
    this.getNewImageAndSetState();
  }

  clearImage = () => {
    this.setState({ img: this.props.emptyState });
  };

  refreshImage = () => {
    this.getNewImageAndSetState();
  };

  render() {
    const content = this.state.isLoading ? (
      <Loader type="Puff" color="#00BFFF" height={200} width={200} />
    ) : (
      <Container>
        <Row>
          <Col>
            <img src={this.state.img} alt="Empty state" width="400px" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={this.refreshImage} size="lg" variant="danger">
              Refresh
            </Button>
            <Button onClick={this.clearImage} size="lg" variant="warning">
              Clear
            </Button>
          </Col>
        </Row>
      </Container>
    );
    return content;
  }
}

export default App;


