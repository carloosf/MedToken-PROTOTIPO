import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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

        <Button style={styles.Botao}
          title='Proximo'
        >
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#354549',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleForm: {
    color: 'white',
    fontSize: 20,
  },
  formCadastro: {
    alignSelf: 'center',
    fontSize: '100%',
    width: '140%',
    color: 'grey',
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderRadius: 9,
    paddingVertical: '3%',
    paddingHorizontal: '10%',
    marginTop: 15,
  },
  Botao: {
     backgroundColor: 'black'
  }
});
