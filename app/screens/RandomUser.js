import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';

import { Header, Actions, Info } from '../components/UserDetails'
import colors from '../config/colors'
import { randuser } from '../config/data'

class RandomUser extends Component {
  state = { user: randuser, isButtonDisabled: false }

  componentDidMount() {
    this.getRandomUser()
  }

  async getRandomUser() {
    this.setState({ isButtonDisabled: true })
    await fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data.results[0],
          isButtonDisabled: false
        })
      })
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 50 }}>
        <Header {...this.state.user} />
        <Text>{ }</Text>
        <Button
          title="Generate"
          onPress={(e) => this.getRandomUser()}
          disabled={this.state.isButtonDisabled}
        />
        <Actions {...this.state.user} />
        <Info {...this.state.user} />
      </ScrollView>
    )
  }
}

export default RandomUser;
