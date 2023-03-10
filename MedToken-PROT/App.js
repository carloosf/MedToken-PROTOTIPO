import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bgTop} />
      
      <View style={styles.bgForm}>
        <View>
          <Text style={styles.titleForm}>Cadastre-se no MedToken!</Text>
        </View>
        <View>
          <TextInput style={styles.formCadastro}
            placeholder='Nome'
          />

          <TextInput style={styles.formCadastro}
            placeholder='CPF'
          />

          <TextInput style={styles.formCadastro}
            placeholder='Data de Nascimento'
          />

          <TouchableOpacity style={styles.Botao}
            title='Proximo'
          >
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  bgTop: {
    width: '100vw',
    height: '20vh',
    backgroundColor: 'white',
  },  
  bgForm: {
    flex: 1,
    width: '100vw',
    height: '80vw',
    backgroundColor: '#354549',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  titleForm: {
    alignSelf: 'center',
    marginTop: 90,
    color: 'white',
    fontSize: 20,
  },
  formCadastro: {
    alignSelf: 'center',
    fontSize: '100%',
    width: '80vw',
    color: 'grey',
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderRadius: 9,
    paddingVertical: '3%',
    paddingHorizontal: '10%',
    marginTop: 15,
  },
  Botao: {
    width: '50%',
    height: 20,
    marginTop: '10%',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 20,
    color: 'red',
    backgroundColor: 'white',
  },

});
