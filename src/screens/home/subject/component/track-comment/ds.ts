/*
 * @Author: czy0729
 * @Date: 2024-01-02 21:45:14
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-05 20:33:16
 */
import { rc } from '@utils/dev'
import { COMPONENT as PARENT } from '../ds'

export const COMPONENT = rc(PARENT, 'TrackComment')

export const POPOVER_DATA = {
  动画: ['取消动画追踪'],
  书籍: ['取消书籍追踪'],
  游戏: ['取消游戏追踪'],
  音乐: ['取消音乐追踪'],
  三次元: ['取消三次元追踪']
} as const
