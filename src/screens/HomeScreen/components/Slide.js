import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";

const { width } = Dimensions.get('window');

const Slide = ({imgUrl}) => {
    return (
        <View style = {styles.container}>
            <Image 
                style = {{ 
                    resizeMode: 'cover', 
                    width: '100%', 
                    height: 150,
                    borderRadius: 10
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
        alignItems: 'center',
        paddingHorizontal: 15
    },
});

export default Slide;