import React from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,StatusBar,TouchableHighlight } from 'react-native';
import { withNavigation} from 'react-navigation';

// import { Container } from './styles';

class LoginForm extends React.Component{
    

  render() {
    return (
        <View style={styles.conteiner}>
            <StatusBar
                backgroundColor='#303644'
            />
            <TextInput
                placeholder='UserName'
                style={styles.input}
            />
            <TextInput
                placeholder='passaword'
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity style={styles.conteinerBottom} onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.TextBottom}>Login</Text>    
            </TouchableOpacity>            
        </View>
    )
  }
}

const styles = StyleSheet.create({
    conteiner:{
        padding:20

    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom:20,
        color:'#fff',
        paddingHorizontal:10
    },
    conteinerBottom:{
        backgroundColor:'#3498db',
        paddingVertical:10
    },
    TextBottom:{
        textAlign:'center',
        
    }

});
export default withNavigation(LoginForm);