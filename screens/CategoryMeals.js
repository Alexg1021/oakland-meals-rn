import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    console.log(props);
    return (
        <View style={styles.screen}>
            <Text>This is my Meal Category Screen!</Text>
            <Button title="Go To Meal Details" onPress={()=> props.navigation.navigate("Meal Details")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;