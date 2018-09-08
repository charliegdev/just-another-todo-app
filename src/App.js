import React, { Component } from 'react';
import { Container, Header, Icon } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container text>
        <br />
        <Header as="h1" textAlign="center">
          <Icon name="tasks" />
          <Header.Content>
            Just Another Todo App
            <Header.Subheader>Made in React, Redux & Semantic UI React</Header.Subheader>
          </Header.Content>
        </Header>
      </Container>
    );
  }
}
export default App;
