import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, ListView, Keyboard } from "react-native";

import ProgramItem from './ProgramItem'



class ProgramsList extends Component {




    constructor(props) {
    super(props);
    this.state = {
       news: null,
       dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
}

  componentWillMount() {
    fetch('https://api.myjson.com/bins/iegsf')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
           dataSource: this.state.dataSource.cloneWithRows(responseData.programs),
        });
      })
      .done();
      };

    
  render() {
     
    return (
        <View>
        <ListView
        horizontal={true}
        enableEmptySections 
        dataSource={this.state.dataSource}
        onScroll={() => Keyboard.dismiss()}
        renderRow={(article) => {
            return (
                <ProgramItem
                    title={article.name}
                    description={article.description}
                />
            )
        }}
        />
        </View> 
    );
  }
}

const styles = StyleSheet.create({
   newsScroll: {
    backgroundColor: 'transparent',
  },
  });

export default ProgramsList;

