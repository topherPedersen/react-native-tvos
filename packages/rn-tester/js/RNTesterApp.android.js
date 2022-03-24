/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import { AppRegistry, LogBox } from 'react-native';

import RNTesterApp from './RNTesterAppShared';

AppRegistry.registerComponent('RNTesterApp', () => RNTesterApp);

module.exports = RNTesterApp;

/**
 * Turn off yellow warning boxes because they cannot be dismissed on Chromecast
 * with Google TV using the Google TV remote control.
 */
LogBox.ignoreAllLogs()
