import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../../../../utils/Colors";
import CustomText from "../../../../components/UI/CustomText";

export const SubSlide = ({ subtitle, description, last, nextSlide, enterApp}) => {
    const bgColor = last ? "#2CB9B0" : "rgba(12,13,52,0.05)";
    const labelCover = last ? "#ffffff" : Colors.text;
    const onPressHandler = last ? enterApp : nextSlide;
    return (
        <View style = {styles.subSlideContainer}>
            <CustomText style = {styles.subTitle}>{subtitle}</CustomText>
            <View>
                <Text style = {styles.description}>{description}</Text>
            </View>
            <TouchableOpacity onPress={onPressHandler}>
                <View style = {[styles.buttonContainer, {backgroundColor: bgColor}]}>
                    <Text style = {[styles.buttonLabel, {color: labelCover}]}>
                        {last ? "Vào trang chủ" : "Tiêp tục"}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    subSlideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    subTitle: {
        fontSize: 24,
        color: Colors.text
    },
    description: {
        fontSize: 18,
        lineHeight: 30,
        color: Colors.text,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop : 10,
        borderRadius:15,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: '500'
    }
});