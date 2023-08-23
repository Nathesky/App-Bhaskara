import { Text, SafeAreaView, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {
    const [valorA,setvA] = useState('');
    const [valorB,setvB] = useState('');
    const [valorC,setvC] = useState('');

  function CalculoBhaskara(){
    const delta0 = valorB * valorB - 4 * valorA * valorC;
    const delta = Math.sqrt(delta0);
    const r1 = (-valorB) + delta;
    const x = r1 / (2 * valorA);

    alert('O valor de X é de: ' + x);
  }

  return (

    <SafeAreaView style={styles.tudao}>
      <Text style={styles.titulo}>
        EQUAÇÃO SEGUNDO GRAU - BHASKARA!
      </Text>

    <ScrollView style={styles.scview}>

      <View style={styles.container}>
      <Text style={styles.ex}> com base na equação ax² + bx + c = 0 </Text>
      <Text style={styles.subtitulo}> DESCUBRA O X</Text>
      </View>

      <TextInput style={styles.inputs}
      placeholder="Digite o valor de a"
      keyboardType="numeric"
      onChangeText={(valorA)=>setvA(valorA)}
      />

      <TextInput style={styles.inputs}
      placeholder="Digite o valor de b"
      keyboardType="numeric"
      onChangeText={(valorB)=>setvB(valorB)}
      />

      <TextInput style={styles.inputs}
      placeholder="Digite o valor de c"
      keyboardType="numeric"
      onChangeText={(valorC)=>setvC(valorC)}
      />

      <View style={styles.viewbtn}>
      <TouchableOpacity style={styles.btn} onPress={CalculoBhaskara}>
      <Text style={styles.btntexto}> Calcular o X </Text>
      </TouchableOpacity>
      </View>

    </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tudao: {
    flex: 1,
    padding: 8,
    backgroundColor: '#d3d3d3'
  },
  titulo: {
    margin: 24,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scview: {
    backgroundColor: '#f5f5f5',
  },
  ex: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 40,
 
  },
  subtitulo: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  inputs: {
    color: '',
    borderWidth: 1,
    padding: 4,
    margin: 10,
    borderRadius: 30,
    height:70,
    fontSize:30
  },
  btn:{
    backgroundColor: 'black',
    width: 220,
    height: 80,
    borderRadius: 50,
    marginTop: 40,
    justifyContent: 'center'
  },
  btntexto: {
    alignItems: 'center',
    color: 'whitesmoke',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewbtn: {
    height:2,
    alignItems: 'center',
    marginBottom: 6,
  },
});
