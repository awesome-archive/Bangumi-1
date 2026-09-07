/*
 * @Author: czy0729
 * @Date: 2023-02-14 03:18:33
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-05 22:29:49
 */
import { rc } from '@utils/dev'
import { COMPONENT as PARENT } from '../ds'

export const COMPONENT = rc(PARENT, 'Blocks')

export const TEXTS = {
  blocks: {
    hd: '屏蔽'
    // information: '用户绝交、屏蔽关键字、小组、条目'
  }
} as const
