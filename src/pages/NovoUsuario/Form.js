import React  from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,StatusBar,TextInput} from 'react-native';


export default class extends React.Component{

    render(){
        return(
            
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
             <TextInput
                placeholder='Comfima passaword'
                secureTextEntry
                style={styles.input}
            />
            
            <TouchableOpacity style={styles.conteinerBottom}  accessibilityLabal="salva dados"
            
            >
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