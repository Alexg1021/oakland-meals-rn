import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors';

// initialize my stack
const MealsStack = createStackNavigator();

// create navigator component
const MealsNavigator = () => {
  return (
    <MealsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
      }}>
      <MealsStack.Screen name='Categories' component={CategoriesScreen} />
      <MealsStack.Screen
        name='Meal Types'
        options={({ route }) => ({ title: route.params.title })}
        component={CategoryMeals}
      />
      <MealsStack.Screen name='Meal Details' component={MealDetailScreen} />
    </MealsStack.Navigator>
  );
};

export default MealsNavigator;
