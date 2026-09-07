/*
 * @Author: czy0729
 * @Date: 2023-02-14 03:18:33
 * @Last Modified by: czy0729
 * @Last Modified time: 2026-05-06 05:43:21
 */
import { rc } from '@utils/dev'
import { COMPONENT as PARENT } from '../ds'

export const COMPONENT = rc(PARENT, 'Blocks')

export const TEXTS = {
  track: {
    hd: '追踪'
    // information: '追踪他人吐槽评论、进度、小组回复'
  },
  collectionTimelines: {
    hd: '追踪 TA 的动画进度',
    information:
      '定期获取追踪用户的在看、看过动画，获取具体看到多少话，在章节按钮旁显示该用户头像，可以营造出一起追番、了解用户收看情况等效果'
  },
  comment: {
    hd: '追踪 TA 的评论 (条目)',
    information: '每次首次进入条目页，会对追踪的用户批量发请求，若有数据会在吐槽顶部显示对应评论'
  },
  topic: {
    hd: '追踪 TA 的帖子回复',
    information: '帖子回复上方会对追踪用户的回复进行独立分组'
  }
} as const
