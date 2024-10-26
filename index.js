/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import MainN from './navDemo/Main.tsx';
import Appl from './lab-4/App.jsx';

AppRegistry.registerComponent(appName, () => Appl);
