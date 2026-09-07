/*
 * @Author: czy0729
 * @Date: 2026-05-04 14:24:22
 * @Last Modified by:   czy0729
 * @Last Modified time: 2026-05-04 14:24:22
 */
import { rc } from '@utils/dev'
import { COMPONENT as PARENT } from '../ds'

export const COMPONENT = rc(PARENT, 'Header')

export const HM = ['settings', 'Setting'] as const
