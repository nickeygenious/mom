import React, { Component } from "react";
import { Button } from "react-bootstrap";

import SignIn from './modals/SignIn';

//class co,pomemt
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      modalShow: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  handleChange = (value) => {
    this.setState({ modalShow: value });
  };

  render() {
    const { modalShow } = this.state;
    return (
      <div>
        <center>
          <Button variant="secondary" onClick={() => this.handleChange(true)}>
            Sign in or Sing up
          </Button>
        </center>

          <SignIn show={modalShow} onHide={() => true} />

        {/* <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => (true)}
        /> */}
      </div>
    );
  }
}

export default App;
