import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container,Logo,Top,Title } from './styles';
import logo from '~/assets/icon.png';

export default function Header() {
    return (
        <Container>
            <Top>
                <Icon name = "blur-on" size={70} color="#FFF"/>
                <Title>Alien One</Title>
            </Top>
        </Container>
    );
}
