/*
 * @Author: czy0729
 * @Date: 2021-01-03 04:41:48
 * @Last Modified by: czy0729
 * @Last Modified time: 2021-01-03 05:31:56
 */
import React from 'react'
import { Heatmap } from '@components'
import { IconTouchable } from '@screens/_'
import { _ } from '@stores'
import { observer } from '@utils/decorators'

function IconLayout({ $ }) {
  return (
    <IconTouchable
      name={$.isList ? 'order' : 'list'}
      size={$.isList ? 18 : 20}
      color={_.colorTitle}
      onPress={$.switchLayout}
    >
      <Heatmap right={30} id='Anime.切换布局' />
    </IconTouchable>
  )
}

export default observer(IconLayout)