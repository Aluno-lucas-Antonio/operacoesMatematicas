import  * as React from 'react';
import{Text, TouchableOpacity,TextInput, View, StyleSheet, StatusBar} from 'react-native'
import estilo from './estilo';
export default class App extends React.Component{
  state={
    valor1:0.0,
    valor2:0.0,
    resultado:0.0
  }
  atualizaValor1=(nunber)=>{
    this.setState({valor1:nunber})
  }
  atualizaValor2=(nunber)=>{
    this.setState({valor2:nunber})
  }
  soma(){
    this.state.resultado=parseFloat(this.state.valor1)+
    parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }
  subtratacao(){
    this.state.resultado=parseFloat(this.state.valor1)-
    parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }
  multiplicacao(){
    this.state.resultado=parseFloat(this.state.valor1)*
    parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }
  divisao(){
    this.state.resultado=parseFloat(this.state.valor1)/
    parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  render(){
    return(
      <View style={estilo.container}>
      <StatusBar backgroundColor="black"/>
      <TextInput underlineColorAndroid="transparent"
      placeholder="Digite o valor 1"
      placeholderTextColor="black"
      autoCapitalize="nome"
      onChangeText={this.atualizaValor1}
     keyboardType='numeric'/>
     <StatusBar backgroundColor="black"/>
   
     <TextInput underlineColorAndroid="transparent"
     placeholder="Digite o valor 2"
     placeholderTextColor="black"
     autoCapitalize="nome"
     onChangeText={this.atualizaValor2}
    keyboardType='numeric'/>

      </View>
    );
    

      }
}