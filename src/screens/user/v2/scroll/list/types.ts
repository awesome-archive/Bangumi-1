/*
 * @Author: czy0729
 * @Date: 2022-08-05 07:09:44
 * @Last Modified by: czy0729
 * @Last Modified time: 2025-10-24 08:43:41
 */
import type { Animated } from 'react-native'
import type { ScrollEvent } from '@types'
import type { HandleRefreshOffset, TabsLabel } from '../../types'

export type Props = {
  page: number
  title: TabsLabel
  scrollY: Animated.Value
  onScroll: (evt?: ScrollEvent) => void
  onRefreshOffset: HandleRefreshOffset
}
