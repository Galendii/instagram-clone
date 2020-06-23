import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import {Image} from 'react-native';
import logo from './assets/instagram.png';

import Feed from './components/Feed';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
    },
    {
      defaultNavigationOptions: {
        headerTitle: () => <Image source={logo} />,
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTitleAlign: 'center',
      },
    },
  ),
);

export default Routes;
