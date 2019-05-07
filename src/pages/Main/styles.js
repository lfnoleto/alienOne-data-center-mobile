import styled from 'styled-components/native';
import {Animated} from 'react-native';
export const Container = styled.View`
  flex:1;
  background: #333A48 ;
  justify-content:center;
`;

export const Content = styled.View`
  flex:1;
  max-height:400px;
  z-index :5;
`;

export const Card = styled(Animated.View)`
  flex:1;
  background:#333A48 ;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position:absolute;
  left:0;
  right:0;
  top:0px;

`;

export const CardHeader  = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding: 30px;
`;
export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title       = styled.Text`
  font-size:90px;
  color:#999;
  font-family:DS-DIGI;

`;
export const Description = styled.View`
  font-size:15px;
  color:#fff;
  margin-top:20;
`;
export const CardFooter  = styled.Text`
  padding:30px;
  background:#eee;
  border-radius:4px;

`;
export const Configuratin  = styled.Text``;

