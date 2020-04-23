import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CategoriesScreen from '../screens/CategoriesScreen';

// initialize my stack

const MealsStack = createStackNavigator();

// create navigator component
const MealsNavigator = () => {
    return (
        <NavigationContainer>
            <MealsStack.Navigator>
                <MealsStack.Screen name="Categories" component={CategoriesScreen}/>
            </MealsStack.Navigator>
        </NavigationContainer>
    );
}

// export my navigator