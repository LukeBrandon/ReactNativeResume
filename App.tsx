import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { ExperienceModule } from './src/ExperienceScreen/ExperienceModule/ExperienceModule';
import { ExperienceScreen } from './src/ExperienceScreen/ExperienceScreen';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

class LandingScreen extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Image style={styles.image} source={require('./assets/luke.png')} />
        <Button
          title="Luke Brandon"
          onPress={() => this.props.navigation.navigate('Education')}
        />
        <ScrollView vertical>
          <Text>Click the button above to learn more about my life, both personal and professional</Text>
        </ScrollView>
      </View>

    );
  }
}

class EducationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Education</Text>
        <Image style={styles.smallerImage} source={require('./assets/SchoolLogo.png')}></Image>
        <Text>Bachelor's of Science in Computer Science</Text>
      </View>
    );
  }
}





const AppDrawerNavigator = createDrawerNavigator({
  Lading: LandingScreen, // LandingScreen but just for dev
  Education: EducationScreen,
  Experience: ExperienceScreen,
});

const AppStackNavigator = createStackNavigator({
  Lading: LandingScreen,
  Education: EducationScreen,
  Experience: ExperienceScreen,
});

const AppContainer = createAppContainer(AppDrawerNavigator);

// Styles down here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 30,
    opacity: 1,
  },
  smallerImage: {
    width: 200,
    height: 200,
    opacity: 1,
  },
  inner: {
    backgroundColor: 'lightblue',
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .5,
  },
  header: {
    marginTop: '7%',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

