import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button, Title, Checkbox, Chip, Appbar, Surface, Divider, FAB } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Foundation';

//import { addPlace } from './place';
//import { listRepos } from './reducer';
class Star extends Component {
  static navigationOptions = {
    title: " ",
    headerMode: 'none',
    header: {
      visible: false,
    },
    tabBarIcon: ({ tintColor }) => (
      <FAB
        color="white"
        style={{
          backgroundColor: 'orange', elevation: 4, marginBottom: 20
        }}
        icon="star"

      />
    )
  };
  state = {}
  componentDidMount() {
    this.props.dispatch(
      {
        type: 'get_products',
        payload: "testestesf"
      })
    // this.props.add('user,pass')

    //this.props.dispatch({type:'INC'})
    // this.props.listRepos.dispatch("GET_REPOS")
  }
  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps !== prevState) {
      // alert(JSON.stringify(nextProps))

      return { someState: nextProps };
    }
    else return null;
  }




  authapi() {
    // this.props.add('user,pass')
    this.props.dispatch(
      {
        type: 'baglan',
        payload: "testestesf"
      })
    //alert(JSON.stringify(this.props))
    //this.props.navigation.navigate('LanguageSelector')
  }
  render() {
    const { repos } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}

          backgroundColor="#f5f5f5"
          barStyle="dark-content"
        />
        <Appbar style={{ backgroundColor: '#eeeeee', justifyContent: 'space-between' }}>

          <Text style={{ marginLeft: 20, fontSize: 20 }}>General Mobile</Text>
          <Appbar.Action icon="shopping-cart" onPress={() => console.log('Pressed mail')} />

        </Appbar>

        <ScrollView showsVerticalScrollIndicator={false}>

        </ScrollView>
      </View>
    );
  }
}



const mapStateToProps = state => {
  return {
    places: state

  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      //dispatch(addPlace(name))
      dispatch(
        {
          type: 'get_products',
          payload: name
        }
      )
    }
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 0,
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
export default connect(mapStateToProps)(Star)