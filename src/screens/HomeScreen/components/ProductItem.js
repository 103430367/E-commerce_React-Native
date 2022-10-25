import React from "react";

import {AntDesign} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import PropTypes from "prop-types";

import Colors from "../../../utils/Colors";
import NumberFormat from "../../../components/UI/NumberFormat";
import CustomText from "../../../components/UI/CustomText";
import { StyleSheet } from "react-native";

export class ProductItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }
    render() {
        const {navigation, item} = this.props;
        const toDetails = () => {
            navigation.navigate("Detail", {item});
        };

    }
}



const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 190,
        //backgroundColor
        marginBottom: 15,
        borderRadius: 8
    },
    image: {
        width: "100%",
        borderRadius: 8,
        aspectRatio: 16 / 9
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        marginTop: 3,
        color: Colors.lighter_green,
        textAlign: 'center',
        fontWeight: "500"
    },
    info: {
        flexDirection: 'row',
        marginBottom: 5,
        marginHorizontal: 5,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    
});
