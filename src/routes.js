//import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from '~/pages/Main';
import Login from '~/pages/Login';
import CreateUsuario from '~/pages/NovoUsuario';
//const Routes = createAppContainer(createSwitchNavigator({ Login }));
//export default Routes;

const Routes = createStackNavigator(
    {
      Home  :Main,
      Login :Login,
      CreateScreen:CreateUsuario,
    },
    {
      initialRouteName: "Login",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#303644',
        },
        headerTintColor: '#fff',
      },
    }
  );
  
  
  export default createAppContainer(Routes);