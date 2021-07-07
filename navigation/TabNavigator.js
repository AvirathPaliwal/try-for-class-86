import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';

const Tab = createMaterialBottomTabNavigator();
//functional compenent
const ButtomTabNavigator = ()=>{
    return(    
        <Tab.Navigator
        labeled = { false }
        barStyle={styles.bottomTabStyle}
        screenOptions = { ( {route }) =>  ({
          tabBarIcon : ({ focused , color ,size}) =>{
            let iconName;
            if( route.name === "Feed"){
                iconName = focused ? 'home' : 'home-outline'
            }
            else if(route.name === "CreateStory"){
              iconName = focused ? 'add-circle' : 'add-circle-outline'
            }
            return <Ionicons name = { iconName} size = {size} color={color}/>
          },
        })}
        tabBarOptions = {{
          activeTintColor : 'red',
          inactiveTintColor : 'gray'
        }}
        >
          <Tab.Screen name = "Feed" component = {Feed}/>
          <Tab.Screen name = "CreateStory" component = {CreateStory}/>
        </Tab.Navigator>
    )
}

export default ButtomTabNavigator



const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    //responsive font
    width: RFValue(30),
    height: RFValue(30)
  }
});
