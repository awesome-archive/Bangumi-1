/*
 * @Author: czy0729
 * @Date: 2026-05-06 18:21:52
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-06 18:29:20
 */
import type { SubjectId, SubjectType, UserId } from '@types'

export type Props = {
  id: 'collectionTimelines' | 'trackComment'
  userId: UserId
  subjectId?: SubjectId
  type?: SubjectType
}
