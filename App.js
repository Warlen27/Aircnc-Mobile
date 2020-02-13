import React from 'react';
import { YellowBox } from 'react-native'

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);
//import { Container, Title } from './styles';

export default function App() {
  return <Routes/>
}


