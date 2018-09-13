//import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator, DrawerItems } from 'react-navigation';
import ItemList from './ItemList.js';
import Item from './Item.js';
import TabA from './TabA.js';
import TabB from './TabB.js';
import TabC from './TabC.js';
import Plain from './Plain.js';
import ModalScreen from './ModalScreen.js'

export const Stack = createStackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
  MyModal: { screen: ModalScreen },
}, {
  initialRouteName: 'ItemList',
})

export const Tabs = createBottomTabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: Stack },
}, {
  initialRouteName: 'TabC',
  // order: ['TabA', 'TabB', 'TabC'],
  animationEnabled: true,
})

export const InnerDrawer = createDrawerNavigator({
  Tabs: { screen: Tabs },
  Plain: { screen: Plain },
  Stack: { screen: Stack },
})

export const Drawer = createDrawerNavigator({
  Stack: { screen: Stack },
  Tabs: { screen: Tabs },
  Plain: { screen: Plain },
  Plain2: { screen: Plain },
  InnerDrawer: { screen: InnerDrawer },
  Plain4: { screen: Plain },
  Plain5: { screen: Plain },
  Plain6: { screen: Plain },
  Plain7: { screen: Plain },
  Plain8: { screen: Plain },
  Plain9: { screen: Plain },
  Plain10: { screen: Plain },
  Plain11: { screen: Plain },
  Plain12: { screen: Plain },
  Plain13: { screen: Plain },
  Plain14: { screen: Plain },
  Plain15: { screen: Plain },
}, {
  initialRouteName: 'Tabs',
})

