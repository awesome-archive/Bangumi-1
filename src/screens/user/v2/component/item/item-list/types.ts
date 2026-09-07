/*
 * @Author: czy0729
 * @Date: 2025-08-27 15:57:18
 * @Last Modified by: czy0729
 * @Last Modified time: 2025-10-23 19:40:31
 */
import type { UserCollectionsItem } from '@stores/collection/types'
import type { RenderItem } from '@types'

export type Props = RenderItem<
  UserCollectionsItem,
  {
    page: number
  }
>
