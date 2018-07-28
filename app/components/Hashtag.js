import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {};
export default class Hashtag extends React.Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      selected: this.props.selected | false,
    }
  }

  render() {
    return (
      <TouchableOpacity key={this.props.tag} style={[styles.container, this.state.selected? styles.selected : styles.unselected]} onPress={this.props.onPress}>
        <Text style={styles.tagText}>#{this.props.tag}</Text>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 24,
    marginRight: 8,
  },
  selected: {
    backgroundColor: '#CCC',
  },
  unselected: {
    backgroundColor: '#EEE',
  },
  tagText: {
    fontSize: 18,
    color: '#555',
  }
});
