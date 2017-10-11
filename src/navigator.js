import { StackNavigator } from 'react-navigation';

import Home from './containers/Home';


const AppNavigator = new StackNavigator(
  {
    Home: { screen: Home },

  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
);

export default AppNavigator;
