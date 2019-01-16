import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button, Title, Checkbox, Chip, Appbar, Surface, Divider, FAB, Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Foundation';

//import { addPlace } from './place';
//import { listRepos } from './reducer';
class Products extends Component {
  static navigationOptions = {
    title: 'Ürünler',
    headerMode: 'none',
    header: {
      visible: false,
    },
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="pricetag-multiple" size={24} color={tintColor} />

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
        <Searchbar
          style={{ margin: 10 }}
          placeholder="Aranacak kelime giriniz..."
        />
        <ScrollView showsVerticalScrollIndicator={false}>




// sorter filter component // lodash localization numeral eslint axios

          {this.state.someState.places.places.products[0] &&
            <FlatList
              scrollEnabled={false}
              style={{ flex: 1 }}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              data={this.state.someState.places.places.products[0].json}
              renderItem={({ item }) =>
                <View style={{ flex: 1, height: 220, backgroundColor: 'white', alignItems: 'center', elevation: 3, borderRadius: 10, margin: 5 }}>
                  <View style={{ position: 'absolute', bottom: 0, alignItems: 'center', height: 90 }}>
                    <Text style={{ margin: 10, fontWeight: '100', fontSize: 14, color: 'gray' }}>{item.productname}</Text>
                    <View style={{ width: Dimensions.get('window').width / 2 - 10, height: .4, backgroundColor: '#ccc' }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'gray', fontSize: 18, fontWeight: '100' }}>{item.price}</Text>
                    </View>
                  </View>
                </View>
              }
            />
          }

          {/*
        <Button onPress={()=>alert(JSON.stringify(this.state.someState.places.places.products[0].json))}>test</Button>
        */}
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
export default connect(mapStateToProps)(Products)