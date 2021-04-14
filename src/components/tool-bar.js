/*
 * @Author: czy0729
 * @Date: 2021-01-25 11:50:57
 * @Last Modified by: czy0729
 * @Last Modified time: 2021-03-18 12:02:18
 */
import React from 'react'
import { observer } from 'mobx-react'
import { _ } from '@stores'
import { IOS } from '@constants'
import { Flex } from './flex'
import { Popover } from './popover/comp'
import { Touchable } from './touchable'
import { Iconfont } from './iconfont'
import { Text } from './text'
import { Heatmap } from './heatmap'

const ToolBar = observer(({ style, children, ...other }) => {
  const styles = memoStyles()
  return (
    <Flex style={[styles.toolBar, style]} justify='center' {...other}>
      {children}
    </Flex>
  )
})

ToolBar.Icon = function ToolBarItem({ icon, iconStyle, iconColor, onSelect }) {
  const styles = memoStyles()
  return (
    <Touchable onPress={onSelect}>
      <Flex style={styles.item}>
        {!!icon && (
          <Iconfont style={iconStyle} name={icon} size={16} color={iconColor} />
        )}
      </Flex>
    </Touchable>
  )
}

ToolBar.Touchable = function ToolBarItem({ heatmap, onSelect, children }) {
  const styles = memoStyles()
  return (
    <Touchable onPress={onSelect}>
      <Flex style={styles.item} justify='center'>
        {children}
      </Flex>
      {!!heatmap && <Heatmap id={heatmap} />}
    </Touchable>
  )
}

ToolBar.Popover = function ToolBarPopover({
  data,
  icon,
  iconColor,
  type = 'sub',
  text,
  heatmap,
  onSelect
}) {
  const styles = memoStyles()
  return (
    <Popover data={data} onSelect={onSelect}>
      <Flex style={styles.item} justify='center'>
        {!!icon && (
          <Iconfont style={_.mr.xs} name={icon} size={16} color={iconColor} />
        )}
        <Text size={11} type={type} bold>
          {text}
        </Text>
      </Flex>
      {!!heatmap && <Heatmap id={heatmap} />}
    </Popover>
  )
}

export { ToolBar }

const memoStyles = _.memoStyles(_ => ({
  toolBar: {
    paddingTop: IOS ? 6 : 0,
    paddingBottom: 10
  },
  item: {
    height: 30,
    paddingHorizontal: _.md,
    marginHorizontal: _.xs,
    backgroundColor: _.select(
      'rgba(238, 238, 238, 0.8)',
      _._colorDarkModeLevel1
    ),
    borderRadius: 16
  }
}))
