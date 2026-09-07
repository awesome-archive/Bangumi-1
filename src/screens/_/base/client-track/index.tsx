/*
 * @Author: czy0729
 * @Date: 2026-05-06 18:21:15
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-06 18:36:48
 */
import { subjectStore, timelineStore } from '@stores'
import { r } from '@utils/dev'
import { useMount } from '@utils/hooks'
import { COMPONENT, DELAY_MS } from './ds'

import type { Props as ClientTrackProps } from './types'
export type { ClientTrackProps }

/** 客户端一次启动周期, 同一 key 追踪只会自增一次 */
const TRACKED = new Map<string, boolean>()

/** 客户端内部约定计数（追踪）自增 */
export function ClientTrack({ id, userId, subjectId, type }: ClientTrackProps) {
  r(COMPONENT)

  useMount(() => {
    if (!userId) return

    let key: string = ''

    // 用户的收藏时间线
    if (id === 'collectionTimelines') {
      key = [id, userId, subjectId].join('|')
      if (TRACKED.has(key)) return

      TRACKED.set(key, true)
      setTimeout(() => {
        timelineStore.trackCollectionTimelines(userId)
      }, DELAY_MS)
    }

    // 条目吐槽
    if (id === 'trackComment') {
      key = [id, userId, subjectId, type].join('|')
      if (TRACKED.has(key)) return

      TRACKED.set(key, true)
      setTimeout(() => {
        subjectStore.trackComment(userId, type)
      }, DELAY_MS)
    }
  })

  return null
}

export default ClientTrack
