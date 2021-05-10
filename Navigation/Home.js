
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../Screens/Home';
import PostDetails from '../Screens/PostDetail';


const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
    return (
        <Navigator screenOptions={{ headerStyle: { backgroundColor: '#800080' } }}>
            <Screen
                name='Blog'
                component={Home}
                options={{
                    title: 'Blog Posts',
                    headerTitleStyle: { color: 'white', fontSize: 25 }
                }}
            />
            <Screen
                name='productDetails'
                component={PostDetails}
                options={{
                    title: 'Product Details',
                    headerBackTitle: 'back',
                    headerBackTitleVisible: true,
                    headerTitleStyle: { color: 'white', fontSize: 25,textAlign:'center' },
                    headerBackTitleStyle: {
                        paddingRight: 10,
                        fontWeight: 'bold',
                    },
                    
                }}
            />

        </Navigator>
    );
}
