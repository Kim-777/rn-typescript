import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dhhh72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29vxzcbd72',
    title: '네번째',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2s9d72',
    title: '다섯번째',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571qw29d72',
    title: '여섯번째',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571g29d72',
    title: '일곱번째',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557sae29d72',
    title: '여덟번째',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557c29d72',
    title: '아홉번째',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '열번째',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    {item.body ? <Text>{item.body}</Text> : null}
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [items, setItems] = useState(DATA);
  const num = useRef(1);

  const uploadPosts = async () => {
    const newPosts = [];

    for (let i = num.current; i <= num.current + 10; i++) {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
        .then(response => response.json())
        .then(post => newPosts.push(post));
    }

    num.current = num.current + 11

    setItems(prev => [...prev, ...newPosts]);

  };

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'rgb(101, 124, 214)' : 'rgb(199, 210, 254)';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        onEndReached={() => {
          console.log('여기가 끝입니다!');

          if(num.current <= 91) uploadPosts();
          else {
            return console.log('데이터를 모두 소진했습니다!')
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
