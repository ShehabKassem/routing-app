import { useRoute } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Profile() {
    const { params } = useRoute();
    const product = params.data;
    return (
        <View style={{ flex: 1, width: '95%', marginHorizontal: 'auto',paddingVertical:15 }}>
            <Image source={{ uri: 'https://source.unsplash.com/random' }} style={{ width: 300, height: 150, borderRadius: 15, marginHorizontal: 'auto' }} />

            <Text style={{ fontSize: 35, color: 'grey ', textAlign:'center' }}>{product.title}</Text>
        </View>
    );
}
