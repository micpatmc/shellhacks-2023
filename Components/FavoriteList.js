import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet, ScrollView} from 'react-native';
import FavoriteButton from "./FavoriteButton";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "75%",
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'white'
    }
});

export default function FavoriteList({favorites, data}) {
    const slideAnim = useRef(new Animated.Value(-1000)).current;

    // Slide animation
    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [slideAnim])
    
    return ( 
        <Animated.View style={{...styles.container, bottom: slideAnim}}>
            <ScrollView>
                {[...favorites].map(charityName =>
                    (<FavoriteButton title={charityName}/>)
                )}
            </ScrollView>
        </Animated.View >
    );
};