import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';

const DigimonListScreen = () => {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then(response => response.json())
      .then(data => {
        const limitedDigimons = data.slice(0, 10);
      setDigimons(limitedDigimons);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itens}>
      <Image source={{ uri: item.img }} style={{ width: 100, height: 100 }} />
      <Text style={styles.texto}>{item.name}</Text>
    </View>
  );

  return (
      
      <View style={styles.container}>
        <View style={styles.caixa}> 
        <Text style={styles.titulo}>Api Digimon</Text>
        </View>
        <FlatList
          data={digimons}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </View>
  );
};

export default DigimonListScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#465262',
    justifyContent:'center',
  },
  itens:{
    flexDirection: 'row',
    backgroundColor:'#229bb0',
    flex:1,
    marginBottom:10,
    marginRight:10,
    marginLeft:10,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,
    textAlign:'center',
    borderRadius:10,
  },
  caixa:{
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  titulo:{
    fontSize: 30,
    marginVertical:20,
    fontWeight:'bold',
    color:'#f1b61c'
  },
  texto: {
    flex: 1,
    textAlign: 'center',
    top: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  }
});
