/*
 * @Author: czy0729
 * @Date: 2019-05-25 23:00:45
 * @Last Modified by: czy0729
 * @Last Modified time: 2020-01-23 19:55:41
 */
import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react'
import { Flex, Text, Touchable } from '@components'
import { _ } from '@stores'
import { getTimestamp } from '@utils'
import { HTMLDecode } from '@utils/html'
import { t } from '@utils/fetch'
import { EVENT } from '@constants'
import Tag from '../base/tag'
import Stars from '../base/stars'
import Cover from '../base/cover'

const imgWidth = 88
const imgHeight = 1.28 * imgWidth

function ItemCollections({
  navigation,
  index,
  id,
  cover,
  name,
  nameCn,
  tip,
  score,
  time,
  tags,
  comments,
  type,
  isCatalog,
  isCollect,
  isDo,
  isOnHold,
  isDropped,
  event
}) {
  const styles = memoStyles()
  const isFirst = index === 0
  const hasName = !!name
  const hasTip = !!tip
  const hasScore = !!score
  const hasTags = !!tags
  const hasComment = !!comments
  let days
  if (isDo || isOnHold || isDropped) {
    days = Math.ceil((getTimestamp() - getTimestamp(time)) / 86400)
  }
  return (
    <Touchable
      style={[styles.container, isCollect && styles.containerActive]}
      highlight
      onPress={() => {
        const { eventId, eventData } = event
        t(eventId, {
          to: 'Subject',
          subjectId: id,
          type: 'list',
          ...eventData
        })

        navigation.push('Subject', {
          subjectId: id,
          _jp: name,
          _cn: nameCn,
          _image: cover
        })
      }}
    >
      <Flex align='start' style={[styles.wrap, !isFirst && styles.border]}>
        <View style={styles.imgContainer}>
          <Cover
            style={styles.image}
            src={cover}
            width={imgWidth}
            height={imgHeight}
            radius
            shadow
          />
        </View>
        <Flex.Item style={_.ml.wind}>
          <Flex
            style={[!isCatalog && styles.content]}
            direction='column'
            justify={isCatalog ? undefined : 'between'}
            align='start'
          >
            <Flex>
              <Flex.Item>
                <Text numberOfLines={2}>
                  {HTMLDecode(nameCn)}
                  {hasName && name !== nameCn && (
                    <Text type='sub' size={12} lineHeight={14}>
                      {' '}
                      {HTMLDecode(name)}
                    </Text>
                  )}
                </Text>
              </Flex.Item>
              {!!type && <Tag style={_.ml.sm} value={type} />}
            </Flex>
            {hasTip && (
              <Text style={_.mt.sm} size={12} numberOfLines={2}>
                {HTMLDecode(tip)}
              </Text>
            )}
            <Flex style={_.mt.sm} align='start'>
              {hasScore && (
                <Stars style={_.mr.xs} value={score} color='warning' />
              )}
              <Text style={_.mr.sm} type='sub' size={12} numberOfLines={2}>
                {hasScore && '/ '}
                {isDo && `${days}天 / `}
                {isOnHold && `搁置${days}天 / `}
                {isDropped && `抛弃${days}天 / `}
                {time} {hasTags && '/'} {tags.replace(' ', '')}
              </Text>
            </Flex>
          </Flex>
          {hasComment && (
            <Text style={[styles.comments, _.mt.md]}>{comments}</Text>
          )}
        </Flex.Item>
      </Flex>
    </Touchable>
  )
}

ItemCollections.defaultProps = {
  tags: '',
  event: EVENT
}

export default observer(ItemCollections)

const memoStyles = _.memoStyles(_ => ({
  container: {
    paddingLeft: _.wind,
    backgroundColor: _.colorPlain
  },
  containerActive: {
    backgroundColor: _.select(_.colorMainLight, 'rgb(59, 48 ,51)')
  },
  imgContainer: {
    width: imgWidth
  },
  wrap: {
    paddingVertical: _.wind,
    paddingRight: _.wind
  },
  border: {
    borderTopColor: _.colorBorder,
    borderTopWidth: _.hairlineWidth
  },
  content: {
    height: imgHeight
  },
  comments: {
    padding: _.sm,
    backgroundColor: _.select(_.colorBg, _._colorDarkModeLevel1),
    borderWidth: 1,
    borderColor: _.colorBorder,
    borderRadius: _.radiusXs,
    overflow: 'hidden'
  }
}))
