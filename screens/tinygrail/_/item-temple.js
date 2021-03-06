/*
 * @Author: czy0729
 * @Date: 2019-11-17 12:08:17
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-12-23 15:10:50
 */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Touchable, Flex, Text, Image } from '@components'
import { _ } from '@stores'
import { Avatar } from '@screens/_'
import { toFixed } from '@utils'
import { HTMLDecode } from '@utils/html'
import { tinygrailOSS } from '@utils/app'
import { t } from '@utils/fetch'
import { EVENT } from '@constants'

const imageWidth = _.window.width * 0.28
const marginLeft = (_.window.width - 3 * imageWidth) / 4

function ItemTemple(
  {
    id,
    userId,
    cover,
    avatar,
    name,
    nickname,
    sacrifices,
    level,
    rate,
    event,
    type,
    onPress
  },
  { navigation }
) {
  const { id: eventId, data: eventData } = event
  const isView = type === 'view' // 后来加的最近圣殿
  const isFormCharaAssets = !!onPress
  const _name = HTMLDecode(nickname || name)

  let colorLevel
  let plusRate = 0.2
  if (level === 3) {
    colorLevel = _.colorDanger
    plusRate = 0.8
  } else if (level === 2) {
    colorLevel = _.colorWarning
    plusRate = 0.4
  }
  return (
    <View style={styles.item}>
      <Image
        size={imageWidth}
        height={imageWidth * 1.28}
        src={tinygrailOSS(cover)}
        radius
        imageViewer={!onPress}
        imageViewerSrc={tinygrailOSS(cover, 480)}
        border={colorLevel}
        borderWidth={3}
        event={{
          id: eventId,
          data: {
            name,
            ...eventData
          }
        }}
        onPress={onPress}
      />
      {isView ? (
        <View style={_.mt.sm}>
          <Text
            style={{
              color: _.colorTinygrailPlain
            }}
            numberOfLines={1}
            onPress={() => {
              t(eventId, {
                to: 'TinygrailSacrifice',
                monoId: id,
                ...eventData
              })

              navigation.push('TinygrailSacrifice', {
                monoId: `character/${id}`
              })
            }}
          >
            {HTMLDecode(name)}
          </Text>
          <Text
            style={[
              {
                color: _.colorTinygrailText
              },
              _.mt.xs
            ]}
            size={12}
            numberOfLines={1}
            onPress={() => {
              t(eventId, {
                to: 'Zone',
                userId,
                ...eventData
              })

              navigation.push('Zone', {
                userId,
                _id: userId,
                _name: nickname
              })
            }}
          >
            {HTMLDecode(nickname)}
          </Text>
        </View>
      ) : (
        <Touchable style={_.mt.sm} withoutFeedback onPress={onPress}>
          <Flex>
            {!!avatar && (
              <Avatar
                style={_.mr.sm}
                navigation={navigation}
                size={28}
                src={avatar}
                userId={name}
                name={_name}
                borderColor='transparent'
                event={event}
              />
            )}
            <Flex.Item>
              <Text
                style={{
                  color: _.colorTinygrailPlain
                }}
                size={isFormCharaAssets ? 16 : 13}
                numberOfLines={1}
              >
                {_name}
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  color: _.colorTinygrailText
                }}
                size={isFormCharaAssets ? 14 : 12}
                numberOfLines={1}
              >
                {sacrifices} / {rate ? `+${toFixed(rate, 2)}` : `+${plusRate}`}
              </Text>
            </Flex.Item>
          </Flex>
        </Touchable>
      )}
    </View>
  )
}

ItemTemple.contextTypes = {
  $: PropTypes.object,
  navigation: PropTypes.object
}

ItemTemple.defaultProps = {
  event: EVENT
}

export default observer(ItemTemple)

const styles = StyleSheet.create({
  item: {
    width: imageWidth,
    marginTop: 24,
    marginLeft
  }
})
