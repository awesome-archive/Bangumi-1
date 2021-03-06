/*
 * @Author: czy0729
 * @Date: 2020-01-09 19:43:29
 * @Last Modified by: czy0729
 * @Last Modified time: 2020-01-12 19:55:24
 */
import { computed } from 'mobx'
import { tinygrailStore, userStore } from '@stores'
import { getTimestamp } from '@utils'
import store from '@utils/store'
import { info } from '@utils/ui'

export default class ScreenTinygrailAdvanceAuction extends store {
  init = () => {
    const { _loaded } = this.advanceAuctionList
    if (!_loaded) {
      this.fetchAdvanceAuctionList(false)
    }
  }

  // -------------------- fetch --------------------
  fetchAdvanceAuctionList = (showInfo = true) => {
    const { _loaded } = this.advanceAuctionList
    if (!_loaded) {
      return tinygrailStore.fetchAdvanceAuctionList()
    }

    if (!this.advance && getTimestamp() - _loaded < 60 * 60 * 4) {
      if (showInfo) {
        info('普通用户4小时内只能刷新一次')
      }
      return true
    }

    if (this.advance && getTimestamp() - _loaded < 60 * 1) {
      if (showInfo) {
        info('为避免服务器压力, 1分钟后再刷新吧')
      }
      return true
    }

    return tinygrailStore.fetchAdvanceAuctionList()
  }

  // -------------------- get --------------------
  @computed get advance() {
    return tinygrailStore.advance
  }

  @computed get advanceAuctionList() {
    return tinygrailStore.advanceAuctionList
  }

  @computed get myUserId() {
    return userStore.myUserId
  }
}
