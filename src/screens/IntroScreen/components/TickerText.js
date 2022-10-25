import React from "react";
import { Dimensions, StatusBar, StyleSheet, Animated, View, Text } from "react-native";
import PropTypes from "prop-types";

import { slides} from "../../../db/IntroSlides";

const TICKER_HEIGHT = 50;
const { width, height } = Dimensions.get('window');

export const Ticker = ({ scrollX }) => {
    const inputRange = [0, width, width * 2];
    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [0, -TICKER_HEIGHT, -TICKER_HEIGHT * 2]
    });

    return (
        <View style = {styles.tickerContainer}>
            <Animated.View style = {{transform: [{translateY}]}}>
                 {slides.map( ({label}) => {
                    return (
                        <Text key={label} style = {styles.tickerText}>
                            {label}
                        </Text>
                    );
                 })}
            </Animated.View>
        </View>
    );
};

Ticker.PropTypes = {
    scrollX: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    tickerContainer: {
        position: 'absolute',
        width,
        top:
            Platform.OS === "android" 
            ? StatusBar.currentHeight + 10 
            : height > 667 
            ? 50 
            : 35,
        alignItems: 'center',
        overflow: 'hidden',
        height: TICKER_HEIGHT
    },
    tickerText: {
        textAlign: 'center',
        fontSize: 30,
        lineHeight: TICKER_HEIGHT,
        textTransform: 'uppercase',
        fontWeight: '800',
        color: '#2CB9B0',
        fontFamily: "Roboto-Medium"
    }
});
