import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import PropTypes from "prop-types";

import Colors from "../../../utils/Colors";
import NumberFormat from "../../../components/UI/NumberFormat";
import CustomText from "../../../components/UI/CustomText";

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
        return (
            <View style={{width: "48%"}}>
                <BlurView tint="light" intensity={70} style={styles.container}>
                    <View 
                        style={{
                            width: "100%",
                            flexDirection:'column',
                            justifyContent: "center",
                            alignItems:'center',
                        }}
                    >
                        <TouchableOpacity onPress={toDetails}>
                            <Image
                                source={{uri: item.url}}
                                style={styles.image}
                                onLoadStart={() => {
                                    this.setState({loading: true});
                                }}
                                onLoadEnd={() => this.setState({ loading: false })} />
                        </TouchableOpacity>
                        {this.state.loading && (
                            <View
                                style={{
                                    position: 'absolute',
                                    width: "100%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems: 'center'
                                }}
                            >
                                <ActivityIndicator size="small" color={Colors.grey} />
                            </View>   
                        )}
                    </View>
                    <View style={styles.center}>
                        <CustomText style={styles.name}>{item.filename}</CustomText>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.rate}>
                            <AntDesign name="star" color='#fed922' size={15} />
                            <Text style={styles.score}>5.0</Text>
                        </View>
                        <NumberFormat price={item.price} />
                    </View>
                    <View style={{ marginHorizontal: 5}}>
                        <TouchableOpacity style={styles.button} onPress={toDetails}>
                            <CustomText style={styles.detailButton}>Xem chi tiết</CustomText>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </View>
        );
    }
}

ProductItem.propTypes = {
    item: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
};

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
    rate: {
        flexDirection: 'row',
        paddingBottom: 2,
        alignItems: 'flex-end'
    },
    score: {
        fontSize: 12,
        marginLeft: 5,
        color: Colors.text
    },
    button: {
        width: "100%",
        height: 35,
        flexDirection: 'row',
        backgroundColor: "transparent",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.lighter_green
    },
    detailButton: {
        color: Colors.lighter_green,
        marginRight: 5
    }
});
