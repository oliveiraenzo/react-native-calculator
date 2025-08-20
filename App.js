import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


// Calculadora App.js
export default function App() {
  
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);
  
  function somar() {
    if (isNaN(valor1) || isNaN(valor2)) {
      alert('Por favor, preencha ambos os campos com números válidos.');
      return;
    }
    // Função para realizar a soma dos valores
    let soma = valor1 + valor2;
    setResultado(soma);
  }

  function subtrair() {
    if (isNaN(valor1) || isNaN(valor2)) {
      alert('Por favor, preencha ambos os campos com números válidos.');
      return;
    }
    // Função para realizar a subtração dos valores
    let subtracao = valor1 - valor2;
    setResultado(subtracao);
  }

  function multiplicar() {
    if (isNaN(valor1) || isNaN(valor2)) {
      alert('Por favor, preencha ambos os campos com números válidos.');
      return;
    }
    // Função para realizar a multiplicação dos valores
    let multiplicacao = valor1 * valor2;
    setResultado(multiplicacao);
  }

  function dividir() {
    if (isNaN(valor1) || isNaN(valor2)) {
      alert('Por favor, preencha ambos os campos com números válidos.');
      return;
    }
    if (valor2 === 0) {
      alert('Divisão por zero não é permitida.');
      return;
    }
    // Função para realizar a divisão dos valores
    let divisao = valor1 / valor2;
    setResultado(divisao);
  }

  function exponencial() {
    if (isNaN(valor1) || isNaN(valor2)) {
      alert('Por favor, preencha ambos os campos com números válidos.');
      return;
    }
    // Função para calcular a exponenciação
    let exponencial = Math.pow(valor1, valor2);
    setResultado(exponencial);
  }  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Simples</Text>

      <TextInput style={styles.caixaTexto}
        placeholder="Digite o primeiro número"
        keyboardType='decimal-pad'
        onChangeText={(text) => setValor1(parseFloat(text))}
      />

      <TextInput style={styles.caixaTexto}
        placeholder="Digite o segundo número"
        keyboardType='decimal-pad'
        onChangeText={(text) => setValor2(parseFloat(text))}
      />

      <TouchableOpacity style={styles.botaoSoma} onPress={somar}>
        <Text style={styles.botaoSomaTexto}>Soma</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoSubtracao} onPress={subtrair}>
        <Text style={styles.botaoSubtracaoTexto}>Subtração</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoMultiplicacao} onPress={multiplicar}>
        <Text style={styles.botaoMultiplicacaoTexto}>Multiplicação</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoDivisao} onPress={dividir}>
        <Text style={styles.botaoDivisaoTexto}>Divisão</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoExponencial} onPress={exponencial}>
        <Text style={styles.botaoExponencialTexto}>Exponencial</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  caixaTexto: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 18,
  },
  botaoSoma: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  botaoSomaTexto: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  botaoSubtracao: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  botaoSubtracaoTexto: {
    color: 'white',
    fontSize: 18, 
    textAlign: 'center',
  },
  botaoMultiplicacao: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  botaoMultiplicacaoTexto: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  botaoDivisao: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  botaoDivisaoTexto: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  botaoExponencial: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  botaoExponencialTexto: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  resultado: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
