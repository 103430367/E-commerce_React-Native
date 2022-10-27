import React, { useState, useRef, useEffect } from "react";
import { Dimensions, StyleSheet } from 'react-native';

//Colors
import Colors from "../../../utils/Colors";
import CustomText from "../../../components/UI/CustomText";
import {Ionicons} from "@expo/vector-icons";
//Redux - yet installed
import { useDispatch, useSelector } from 'react-redux';
//Action - need implement reducers
import {Login as LoginAction} from "../../../reducers";
//PropTypes check
import PropTypes from "prop-types";
import renderField from "./RenderField";
//Authentication for Touch/Face ID

const { height } = Dimensions.get('window');

const Login = (props) => {
    return (

    );
};


const styles = StyleSheet.create({
    
})