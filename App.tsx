import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Counter extends Component {
  state = { count: 0 };

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render() {
    const { count } = this.state;
    const { color, size } = this.props;

    return (
      <Text style={{ color, fontSize: size }}>
        {count}
      </Text>
    )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Counter color={'red'} size={36} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    backgroundColor: 'lightblue',
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .5,
  }
});


