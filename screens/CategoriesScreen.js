import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
    console.log("Your Props", props);

    const goToAnother = () => {
        props.navigation.navigate("Category Meals", {value: "Some Value"})
    }

    return (
        <View style={styles.screen}>
            <Text>This is our Categories Screen!</Text>
            <Button 
                title="Go To Meals!" 
                onPress={goToAnother}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen;