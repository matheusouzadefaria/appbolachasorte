import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',               // Variável para armazenar o nome da pessoa
      textoFrase: 'Abrir os biscoitos.',
      img: require('./src/fechado.jpg')
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.resetar = this.resetar.bind(this);

    this.frases = [
      "Acredite em si mesmo e o resto virá.",
      "Desafios são oportunidades disfarçadas.",
      "Cada passo, por menor que seja, te aproxima da vitória.",
      "O sucesso começa com a coragem de tentar.",
      "O melhor momento para começar é agora.",
      "Sua determinação é mais forte que qualquer obstáculo.",
    ];
  }

  quebrarBiscoito() {
    let numAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numAleatorio] + '" ',
      img: require('./src/aberto.jpg')
    });
  }

  resetar() {
    this.setState({
      nome: '',
      textoFrase: 'Abrir os biscoitos.',
      img: require('./src/fechado.jpg')
    });
  }

  render() {
    return (
      <View style={estilos.container}>

        {/* Imagem do biscoito */}
        <Image
          source={this.state.img}
          style={estilos.img}
        />

        {/* Input de nome */}
        <TextInput
          style={estilos.input}
          placeholder="Digite seu nome aqui"
          value={this.state.nome}
          onChangeText={(nome) => this.setState({ nome })}
        />

        {/* Exibindo frase motivacional com nome */}
        <Text style={estilos.textoFrase}>
          {this.state.nome ? `${this.state.nome}, sua frase é:` : 'Digite seu nome para ver a frase motivacional.'}
        </Text>
        <Text style={estilos.textoFrase}>
          {this.state.textoFrase}
        </Text>

        {/* Botão para "quebrar o biscoito" */}
        <TouchableOpacity style={estilos.botao} onPress={this.quebrarBiscoito}>
          <View style={estilos.btnArea}>
            <Text style={estilos.btnTexto}>Abrir biscoito</Text>
          </View>
        </TouchableOpacity>

        {/* Botão para resetar */}
        <TouchableOpacity style={estilos.botao} onPress={this.resetar}>
          <View style={estilos.btnArea}>
            <Text style={estilos.btnTexto}>Resetar</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  img: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  textoFrase: {
    fontSize: 18,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 20,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#eeab22',
    borderRadius: 25,
    backgroundColor: '#dd7b22',
    marginBottom: 10,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default App;
