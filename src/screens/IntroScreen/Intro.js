import React from "react";
import { Animated, Dimensions, Platform, StatusBar, StyleSheet, View } from "react-native";

import { Pagination, Slide, SubSlide, Ticker } from "./components";
import slides from "../../db/IntroSlides";

const { width, height } = Dimensions.get('window');

export const IntroScreen = () => {
    return (
        <View style = {styles.container}>
            <Animated.View style = {[styles.slider, {backgroundColor}]}>
                {/* <Ticker /> */}
                <Animated.ScrollView>
                    {slides.map((slide) => {
                        return <Slide key={slide.id} imgUrl={slide.imgUrl} />
                    })}
                </Animated.ScrollView>
            </Animated.View>
            <View style = {styles.footer}>
                <Pagination slides={slides} 
                // scrollX 
                />
                <Animated.View 
                    style = {[StyleSheet.absoluteFillObject, { backgroundColor}]}>
                </Animated.View>
                <Animated.View style = {styles.footerContent}>
                    <Animated.View style = {{
                        flexDirection: 'row',
                        width: width * slides.length,
                        // transform: [{translateX: textTranslate}]
                    }}>
                        {slides.map(({subtitle, description}, index) => {
                            return (
                                <SubSlide
                                key = {subtitle}
                                last = {index === slides.length - 1}
                                // enterApp = {EnterApp}
                                subtitle = {subtitle}
                                description = {description}
                                // scrollX = {scrollX}
                                // nextSlide = {() => {}}
                                />
                            );
                        })}
                    </Animated.View>
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    slider: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
        height: height * 0.61,
        borderBottomEndRadius: 75
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        borderTopLeftRadius: 75,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    }
});