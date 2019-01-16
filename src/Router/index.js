import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Login from './../Screens/Login';
import LanguageSelector from './../Screens/LanguageSelector';
import MainPage from '../Screens/MainPage';
import Products from '../Screens/Products';
import Profile from '../Screens/Profile';
import Star from '../Screens/Star';

import Support from '../Screens/Support';

import placeReducer from './../Reducers/';
import { root } from './../Saga/'


console.disableYellowBox = true;

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    places: placeReducer
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root)


const BottomN = createBottomTabNavigator({
    Home: { screen: MainPage, },
    Products: { screen: Products },
    Star: { screen: Star },
    Support: { screen: Support },
    Profile: { screen: Profile },

}, {
        header: null,
        initialRouteName: 'Home',
        activeColor: 'black',
        inactiveColor: '#888',
        tabBarOptions: {
            elevation: 4,
            activeTintColor: 'white',
            showLabel: true, // hide labels
            activeTintColor: 'orange', // active icon color
            inactiveTintColor: '#586589',  // inactive icon color
            style: {
                elevation: 4,
                borderTopWidth:5,borderTopColor:'#f48924',
                shadowOffset: { width: 1, height: 1, },
                shadowColor: 'black',
                shadowOpacity: 2,
                backgroundColor: '#eee' // TabBar background
            }
        }
    });
const AppNavigator = createStackNavigator({
    LanguageSelector: { screen: LanguageSelector },
    Login: { screen: Login },
    Home: { screen: BottomN },


}, {
        mode: 'modal',
        headerMode: 'none',

        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,  // Set the animation duration time as 0 !!
            },
        }),
    });
const AppContainer = createAppContainer(AppNavigator);

export default RNRedux = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
)

