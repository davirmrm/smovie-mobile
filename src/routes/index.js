import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../views/HomeScreen';
import DetailMovieScreen from '../views/HomeScreen/detailMovie';
import { Colors } from '../constants';

const Stack = createNativeStackNavigator();

export default  () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Group
                screenOptions={{ 
                    headerShown: true,
                    headerStyle: { 
                        backgroundColor: Colors.primaryBg, 
                    },
                    headerTintColor: Colors.primaryColor,
                    headerTitleAlign: 'center',
                    statusBarColor: Colors.primaryBg
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'SMOVIE'}}

                />
                <Stack.Screen 
                    name="HomeDetail" 
                    component={DetailMovieScreen} 
                    options={{title: 'SMOVIE'}}
                />
            </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};