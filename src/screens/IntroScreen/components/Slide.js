import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";

const { width, height } = Dimensions.get('window');

export const Slide = ({imgUrl}) => {
    return (
        <View style = {styles.container}>
            <Image 
                style = {{ 
                    resizeMode: 'contain', 
                    width: '90%', 
                    height: height/2
                }} 
                source={imgUrl}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
        flex: 1,
        width,
        alignItems: 'center'
    },
});