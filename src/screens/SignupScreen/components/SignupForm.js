import React, { useState, useRef, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView,
    Alert,
    Dimensions,
} from "react-native";
//Colors
import Colors from "../../../utils/Colors";
import CustomText from "../../../components/UI/CustomText";
import { Ionicons } from "@expo/vector-icons";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Action
import { SignUp as SignUpAct } from "../../../reducers";
//PropTypes check
import PropTypes from "prop-types";
import renderField from "./RenderField";

const { width, height } = Dimensions.get("window");

//Validate
const validate = (values) => {
    const errors = {};
    if(!values.email) {
        errors.email = 'Email không được bỏ trống';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email không hợp lệ';
    }
    if(!values.password) {
        errors.password = 'Mật khẩu không được bỏ trống';
    } else if (values.password.length < 6) {
        errors.password = 'Mật khẩu phải nhiều hơn hoặc bằng 6 ký tự';
    }
    if(!values.confirmpassword) {
        errors.confirmpassword = 'Mật khẩu không được bỏ trống';
    } else if(values.confirmpassword !== values.password) {
        errors.confirmpassword = 'Mật khẩu xác nhận không trùng khớp';
    }
    if(!values.username) {
        errors.username = 'Tên không được bỏ trống';
    } else if (values.username.length > 20) {
        errors.username = 'Tên không vượt quá 20 ký tự';
    } else if (values.username.length < 6) {
        errors.username = 'Tên phải nhiều hơn 6 ký tự';
    }
    return errors;
};