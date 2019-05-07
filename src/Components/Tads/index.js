import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container,TadsContainer,TabItem,TabText } from './styles';

export default function Tads({translateY}) {
  
    return (
    
            <Container style={
                {
                    transform:[{
                        translateY: translateY.interpolate({
                            inputRange: [0,380],
                            outputRange: [0,30],
                            extrapolate:'clamp',
                        })
                    }]
                }
            }>

                <TadsContainer>
                    <TabItem>
                        <Icon name="person-add" size={24} color="#FFF"/>
                        <TabText>Atualizar</TabText>
                    </TabItem>

                    <TabItem>
                        <Icon name="chat-bubble-outline" size={24} color="#FFF"/>
                        <TabText>Temperatura</TabText>
                    </TabItem>

                    <TabItem>
                        <Icon name="arrow-downward" size={24} color="#FFF"/>
                        <TabText>Umidade</TabText>
                    </TabItem>
                    
                    <TabItem>
                        <Icon name="arrow-upward" size={24} color="#FFF"/>
                        <TabText>Ajudar</TabText>
                    </TabItem>
                    <TabItem>
                        <Icon name="lock" size={24} color="#FFF"/>
                        <TabText>Sobre</TabText>
                    </TabItem>
                    
                </TadsContainer>
            </Container>
        
        );
  
}
