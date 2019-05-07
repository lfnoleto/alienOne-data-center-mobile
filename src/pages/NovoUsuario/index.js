import React from 'react';
import {View,Text,StatusBar,TouchableOpacity,StyleSheet,Image} from 'react-native';
import NovoScreen from './Form';

export default class extends React.Component{
    render(){
        return(
            <View style={styles.conteiner}>

                <View style={styles.conteinerLogo}>
                    <Image
                        style={styles.logo}
                        source={require('~/assets/icon.png')}
                    />
                    <Text style={styles.text}>AlienOne app de monitoramento de Data center</Text>
                </View>

                <View style={styles.conteinerForm}>
                    <NovoScreen/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#b2bec3',
    },
    conteinerLogo:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1,
    },
    logo:{
        width:100,
        height:100
    },
    text:{
        color:'#8793A4',
        marginTop:10,
        width:160,
        textAlign:'center',
        opacity:0.9
    },
});