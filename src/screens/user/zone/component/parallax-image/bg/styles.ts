/*
 * @Author: czy0729
 * @Date: 2023-06-28 09:21:21
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-03-12 09:58:22
 */
import { _ } from '@stores'

export const memoStyles = _.memoStyles(() => ({
  parallaxBg: {
    marginTop: -8,
    height: _.parallaxImageHeight + 8,
    overflow: 'hidden'
  },
  parallaxImage: {
    width: '100%',
    height: '100%'
  }
}))
