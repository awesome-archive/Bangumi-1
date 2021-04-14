/*
 * @Author: czy0729
 * @Date: 2021-01-21 14:29:44
 * @Last Modified by: czy0729
 * @Last Modified time: 2021-03-18 19:57:10
 */
import React from 'react'
import { Flex, Iconfont, Touchable } from '@components'
import { _ } from '@stores'
import { obc } from '@utils/decorators'

function BtnBookNext({ subjectId, epStatus, volStatus }, { $ }) {
  return (
    <Touchable
      style={styles.btn}
      onPress={() => $.doUpdateNext(subjectId, epStatus, volStatus)}
    >
      <Flex justify='center'>
        <Iconfont
          style={styles.icon}
          name='md-check-circle-outline'
          size={18}
        />
      </Flex>
    </Touchable>
  )
}

export default obc(BtnBookNext)

const styles = _.create({
  btn: {
    paddingLeft: _.xs,
    paddingRight: _.sm + 2
  },
  icon: {
    marginBottom: -1
  }
})
