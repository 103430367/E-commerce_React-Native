import React, { useState, useRef, useEffect } from "react";
import {Field, reduxForm} from 'redux-form';
import { 
    Dimensions, 
    KeyboardAvoidingView, 
    StyleSheet, 
    Platform, 
    TouchableOpacity, 
    View, 
    ScrollView, 
    TouchableWithoutFeedback, 
    Keyboard, 
    ActivityIndicator, 
    Image 
} from 'react-native';

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
//Authentication for Touch/Face ID - not added

const { height } = Dimensions.get('window');
//Validation
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
    return errors;
}

const Login = (props) => {
    const dispatch = useDispatch();
    const { handleSubmit } = props;
    const [ showPass, setShowPass ] = useState(false);
    const auth = useSelector((state) => state.auth);
    const [ loading, setLoading ] = useState(false);
    // const scanFingerprintorFaceId = async() => {
    //     if (resData === null) {
    //         return alert("You have to enable LOGIN by touch/Face Id");
    //     }
    //     //Authetication
    // } 
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.goBack();
                }}
                style={{position: 'absolute', top: 50, left: 20}}
            >
                <Ionicons name="ios-arrow-back" size={35} color={Colors.light_green} />
            </TouchableOpacity>

            <View style = {styles.header}>
                <View>
                    <CustomText style={styles.title}>LOGIN</CustomText>
                </View>
            </View>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{
                        flexDirection: 'column',
                        marginHorizontal: 10,
                        zIndex: -1
                    }}>
                        <View>
                            <Field
                                name="email"
                                keyboardType='email-address'
                                label='Email'
                                icon='email'
                                component={renderField}
                            />
                            <Field
                                name="password"
                                keyboardType="default"
                                label="Password"
                                component={renderField}
                                securityTextEntry={showPass ? false : true}
                                passIcon="eye"
                                icon="lock"
                                showPass={showPass}
                                setShowPass={setShowPass} 
                            />
                        </View>
                        <View style={styles.group}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate('ForgetPwScreen');
                                }}>
                                <CustomText style={{
                                    ...styles.textSignSmall, 
                                    fontFamily: 'Roboto-Medium'}}>
                                    Forget Password ?
                                </CustomText>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={handleSubmit(submit)}
                            style={{ marginVertical: 10, alignItems: 'center'}}
                        >
                            <View style={styles.signIn}>
                                {loading ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <CustomText style={styles.textSign}>Sign In</CustomText>
                                )}
                            </View>    
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.center}>
                    <CustomText style={styles.loginOpt}>
                        Or Sign in with FaceId/Fingerprint
                    </CustomText>
                    <View style={styles.circleImage}>
                        <TouchableOpacity> 
                            <Image /> 
                            {/* authenticate */}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10
    },
    header: {
        marginTop: height * 0.2,
        marginBottom: 10,
        marginHorizontal: 20
    },
    title: {
        color: Colors.light_green,
        fontSize: 40,
        letterSpacing: 5,
        fontFamily: 'Roboto-Bold',
        textAlign: 'center'
    },
    text: {
        color: '#fff',
    },
    signIn: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: Colors.lighter_green,
    },
    textSign: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Roboto-Medium'
    },
    textSignSmall: {
        color: Colors.lighter_green,
        textAlign: 'center'
    },
    center: {
        alignItems: 'center'
    },
    circleImage: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        padding: 20,
        borderRadius: 55,
        borderStyle: 'dashed',
        borderColor: Colors.grey
    },
    faceid: {
        resizeMode: 'contain',
        height: 70,
        width: 70
    },
    loginOpt: {
        color: Colors.lighter_green,
        fontFamily: 'Roboto-Medium',
        marginBottom: 10
    }
});

export const LoginForm = reduxForm({
    form: 'login', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
  })(Login);