/*
 * 精简过的 vector-icons@12.0.4 MaterialIcons
 * @Doc: https://icons.expo.fyi
 * @Author: czy0729
 * @Date: 2021-03-21 00:54:47
 * @Last Modified by: czy0729
 * @Last Modified time: 2021-03-21 00:56:01
 */
import createIconSet from '@expo/vector-icons/createIconSet'
import font from './vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf'
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/MaterialIcons.json'

export default createIconSet(glyphMap, 'material', font)
