import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SearchView from "./views/search";
import HistoryView from "./views/history";
import FavoriteView from "./views/favorite";
import DetailView from "./views/detail";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const SearchStack = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={SearchView} />
            <HomeStack.Screen name="Detail" component={DetailView} />
        </HomeStack.Navigator> 
    )
}    
const app = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="History" component={HistoryView} />
                <Tab.Screen name="Search" component={SearchStack} />
                <Tab.Screen name="Favorite" component={FavoriteView} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default app
