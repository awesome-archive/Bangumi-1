/*
 * @Author: czy0729
 * @Date: 2019-09-12 15:35:26
 * @Last Modified by: czy0729
 * @Last Modified time: 2021-03-20 15:30:40
 */
import React from 'react'
import { View } from 'react-native'
import { Flex, Text, Touchable, Iconfont } from '@components'
import { _ } from '@stores'
import { formatNumber } from '@utils'
import { obc } from '@utils/decorators'

function Logs({ style }, { $ }) {
  const styles = memoStyles()
  const { bids, asks } = $.userLogs
  return (
    <Flex style={[styles.container, style]} align='start'>
      <Flex.Item>
        <Flex
          style={{
            marginBottom: _.sm
          }}
        >
          <Flex.Item>
            <Text type='bid' size={16}>
              买入委托
            </Text>
          </Flex.Item>
          {!!bids.length && (
            <Touchable
              style={[styles.cancel, _.ml.sm]}
              onPress={() => $.doCancelAll('bid')}
            >
              <Iconfont name='md-close' size={14} color={_.colorTinygrailIcon} />
            </Touchable>
          )}
        </Flex>
        {!bids.length && <Text type='tinygrailText'>-</Text>}
        {bids
          .sort((a, b) => b.price - a.price)
          .map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <View key={index} style={styles.item}>
              <Flex>
                <Flex.Item>
                  <Text size={12} type='tinygrailPlain'>
                    {formatNumber(item.price)}
                    {item.type === 1 && (
                      <Text size={12} type='tinygrailText'>
                        {' '}
                        [冰山]
                      </Text>
                    )}
                  </Text>
                </Flex.Item>
                <Text type='tinygrailText' size={12}>
                  {formatNumber(item.amount, 0)}
                </Text>
                <Touchable
                  style={[styles.cancel, _.ml.sm]}
                  onPress={() => $.doCancel('bid', item.id)}
                >
                  <Iconfont
                    name='md-close'
                    size={14}
                    color={_.colorTinygrailIcon}
                  />
                </Touchable>
              </Flex>
            </View>
          ))}
      </Flex.Item>
      <Flex.Item style={_.ml.wind}>
        <Flex>
          <Flex.Item>
            <Text type='ask' size={16}>
              卖出委托
            </Text>
          </Flex.Item>
          {!!asks.length && (
            <Touchable
              style={[styles.cancel, _.ml.sm]}
              onPress={() => $.doCancelAll('ask')}
            >
              <Iconfont name='md-close' size={14} color={_.colorTinygrailIcon} />
            </Touchable>
          )}
        </Flex>
        {!asks.length && <Text type='tinygrailText'>-</Text>}
        {asks
          .sort((a, b) => a.price - b.price)
          .map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <View key={index} style={styles.item}>
              <Flex>
                <Flex.Item>
                  <Text size={12} type='tinygrailPlain'>
                    {formatNumber(item.price)}
                    {item.type === 1 && (
                      <Text size={12} type='tinygrailText'>
                        {' '}
                        [冰山]
                      </Text>
                    )}
                  </Text>
                </Flex.Item>
                <Text type='tinygrailText' size={12}>
                  {formatNumber(item.amount, 0)}
                </Text>
                <Touchable
                  style={[styles.cancel, _.ml.sm]}
                  onPress={() => $.doCancel('ask', item.id)}
                >
                  <Iconfont
                    name='md-close'
                    size={14}
                    color={_.colorTinygrailIcon}
                  />
                </Touchable>
              </Flex>
            </View>
          ))}
      </Flex.Item>
    </Flex>
  )
}

export default obc(Logs)

const memoStyles = _.memoStyles(_ => ({
  container: {
    minHeight: 120,
    paddingVertical: _.md,
    paddingHorizontal: _.wind,
    borderTopWidth: _.sm,
    borderTopColor: _.colorTinygrailBg
  },
  item: {
    width: '100%'
  },
  cancel: {
    paddingVertical: _.sm,
    paddingLeft: _.sm
  }
}))
