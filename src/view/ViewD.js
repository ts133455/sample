import React, {PureComponent} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DebugInstructions from 'react-native/Libraries/NewAppScreen/components/DebugInstructions';
import LearnMoreLinks from 'react-native/Libraries/NewAppScreen/components/LearnMoreLinks';

class ViewB extends PureComponent {
  props: {};
  render() {
    return (
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>ON ONO NO NON ON ON ON ON ONO NO N</Text>
            <Text style={styles.sectionDescription}>
              <DebugInstructions />
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Learn More</Text>
            <Text style={styles.sectionDescription}>
              Read the docs to discover what to do next:
            </Text>
          </View>
          <LearnMoreLinks />
          <Button title="Go Back" onPress={() => this.props.navigation.pop()} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default ViewB;
