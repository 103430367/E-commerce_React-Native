import React from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";

import { SignupForm } from "./components";

const { width, height } = Dimensions.get("window");

export const SignupScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <ImageBackground
                style = {{flex: 1, position: 'absolute'. height, width}}
                source={require("../../assets/Images/flower3.jpg")}
                blurRadius={10}
            ></ImageBackground>
            <SignupForm navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});