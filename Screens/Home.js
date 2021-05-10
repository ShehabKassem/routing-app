import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';

export default function Home() {
  const Navigation = useNavigation();
  const [Posts, setPosts] = React.useState([])
  const [flag, setFlag] = React.useState(true)
  const getPosts = () => {
    setFlag(false)
  }

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        setPosts([...response.data])
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])
  console.log(Posts)

  return (

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>{
        flag ?
          <TouchableOpacity onPress={getPosts} >
            <Text
              style={{
                backgroundColor: 'purple',
                paddingHorizontal: 50,
                paddingVertical: 20,
                color: 'white',
                fontSize: 30,
                borderRadius: 50,
              }}>
              Get Posts
          </Text>
          </TouchableOpacity>
          :
          <View style={{ flex: 1 }}>
            <FlatList
              data={Posts}
              renderItem={({ item }) => (
                <TouchableOpacity key={item.id} onPress={()=>Navigation.navigate('productDetails',{data:item})}>
                  <View style={{ width: '90%', marginHorizontal: 'auto', paddingVertical: 10 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                    <Image source={{ uri: 'https://source.unsplash.com/random' }} style={{ width: 300, height: 150, borderRadius: 15, marginHorizontal: 'auto' }} />
                  </View>

                </TouchableOpacity>
              )}
            />
          </View>

      }
      </View>
    </View>
  );
}
