import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container,Content,CardHeader,Card,Title,Description,Annotation,CardFooter,CardContent} from './styles';
import {Animated} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {PanGestureHandler,State} from 'react-native-gesture-handler';  
import Header from '~/Components/Header';
import Menu from '~/Components/Menu';
import Tads from '~/Components/Tads';

export default function Main(){
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    
    [
      {
        nativeEvent:{
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver:true},
  );

  function onHandlerStateChanged(event){
    

    if(event.nativeEvent.oldState=== State.ACTIVE){
      let opened = false;
      const {translationY} = event.nativeEvent;
      offset += translationY;


      if( translationY >= 100)
      {
        opened = true;
      }else
      {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY,{
        toValue: opened ? 380 : 0,
        duration:200,
        useNativeDriver:true,
      }).start(()=>{
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
      
    }

  }
  return(
    <Container>
      <Header/>
    
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
      <Card
        style={{
          transform:[{
            translateY:translateY.interpolate({
              inputRange: [-350,0,380],
              outputRange: [-50,0,380],
              extrapolate:'clamp',
              })
            }]
        }}
      >

      <CardContent>
        
        <Description>
            <ProgressCircle
              percent={30}
              radius={140}
              borderWidth={8}
              color="#fff"
              shadowColor="#999"
              bgColor="#303644"
            >
              <Icon name="cloud" size={50} color="#fff"/>
              <Title>18.5</Title>
            </ProgressCircle>
          </Description>
        </CardContent>

    </Card>
        </PanGestureHandler>
      </Content>

      <Tads translateY={translateY}/>
    </Container>
  );
}
