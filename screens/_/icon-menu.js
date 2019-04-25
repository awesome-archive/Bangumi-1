/*
 * @Author: czy0729
 * @Date: 2019-04-24 13:41:56
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-04-24 23:46:08
 */
import React from 'react'
import { DrawerActions } from 'react-navigation-drawer'
import { Touchable, Image } from '@components'

const IconMenu = ({ navigation }) => (
  <Touchable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
    <Image
      style={{ marginLeft: 12 }}
      size={22}
      placeholder={false}
      src={require('@assets/images/icon/menu.png')}
    />
  </Touchable>
)

export default IconMenu
