import React from 'react';
import{Container,Code,NavItem,Nav,NavText,SignOutButton,SignOutButtonText}  from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';

export default function Menu({translateY}){
    return(
        <Container style={
            {
                opacity: translateY.interpolate({
                    inputRange: [0,150],
                    outputRange: [0,1],
                })
            }
        }>
            <Code>
                <QRCode
                    value= "http://www.alienone.com.br"
                    size={80}
                    fgColor="#FFF"
                    bgColor="#8B10AE"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name ="help-outline" size={20} color="#FFF"/>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name ="person-outline" size={20} color="#FFF"/>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name ="smartphone" size={20} color="#FFF"/>
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={()=>{}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
            
        </Container>
    );
}