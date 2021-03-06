/*
 * @Author: czy0729
 * @Date: 2019-03-23 04:30:59
 * @Last Modified by: czy0729
 * @Last Modified time: 2020-01-16 18:04:24
 */
import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Flex, Text } from '@components'
import { ScoreTag } from '@screens/_'
import { _ } from '@stores'
import { toFixed } from '@utils'
import { MODEL_SUBJECT_TYPE } from '@constants/model'
import Cover from './cover'

const imageWidth = 120

function Head({ style }, { $ }) {
  const styles = memoStyles()
  const { images = {} } = $.subject

  // bangumiInfo只有动画的数据
  let label = MODEL_SUBJECT_TYPE.getTitle($.subjectType)
  if (label === '动画') {
    const { bangumiInfo } = $.state
    label = String(bangumiInfo.type).toUpperCase()
  }
  return (
    <View style={[styles.container, style]}>
      <Cover image={images.common} placeholder={$.coverPlaceholder} />
      <Flex
        style={styles.content}
        direction='column'
        justify='between'
        align='start'
      >
        <View>
          {!!$.jp && (
            <Text type='sub' size={$.jp.length > 16 ? 11 : 13}>
              {$.jp}
              {!!label && ` · ${label}`}
            </Text>
          )}
          <Text style={!!$.cn && _.mt.xs} size={$.cn.length > 16 ? 16 : 20}>
            {$.cn}
          </Text>
        </View>
        <Flex>
          {!$.hideScore && (
            <>
              <Text type='main' size={22} lineHeight={1}>
                {$.rating.score === '' ? '-' : toFixed($.rating.score, 1)}
              </Text>
              {$.rating.score !== '' && (
                <ScoreTag style={_.ml.sm} value={$.rating.score} />
              )}
            </>
          )}
        </Flex>
      </Flex>
    </View>
  )
}

Head.contextTypes = {
  $: PropTypes.object
}

export default observer(Head)

const memoStyles = _.memoStyles(_ => ({
  container: {
    paddingTop: 48
  },
  content: {
    height: 144,
    paddingVertical: _.wind,
    paddingLeft: imageWidth + _.wind + 12,
    paddingRight: _.wind,
    backgroundColor: _.colorPlain,
    borderTopLeftRadius: _.radiusLg,
    borderTopRightRadius: _.radiusLg
  }
}))
