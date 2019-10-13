import React, { Component } from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export default class SquareMenu extends Component {
    render() {
        const { containerStyle, iconSource, title, ...props } = this.props;
        var icon;
        if (iconSource) {
            icon = <Image source={{ uri: iconSource }} style={styles.icon} />
        }
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <TouchableOpacity {...props} >
                    <View style={[styles.container, containerStyle]}>
                        {icon}
                        <Text style={styles.text}>{title}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.title}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100, height: 100,
        backgroundColor: '#fff',
        borderWidth: 0.7,
        borderRadius: 7,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 2,
        borderColor: 'grey'
    },
    icon: {
        width: 100,
        height: 80
    },
    title: {
        width: 80, height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 8,

    }
})