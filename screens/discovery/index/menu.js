/*
 * @Author: czy0729
 * @Date: 2019-10-02 02:57:39
 * @Last Modified by: czy0729
 * @Last Modified time: 2020-01-19 15:30:11
 */
import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { Flex, Touchable, Text, Iconfont, Image } from '@components'
import { _ } from '@stores'
import { observer } from '@utils/decorators'
import { info } from '@utils/ui'
import { t } from '@utils/fetch'
import ImageAnitama from '@assets/images/anitama.jpg'

const menus = [
  {
    title: '排行榜',
    icon: 'shou-fu',
    path: 'Rank'
  },
  {
    title: '索引',
    icon: 'menu',
    path: 'Browser'
  },
  {
    title: '每日放送',
    icon: 'calendar',
    path: 'Calendar'
  },
  {
    title: '随便看看',
    icon: 'xin-fan',
    path: 'Random'
  },
  {
    title: 'Anitama',
    icon: 'anitama',
    path: 'Anitama'
  },
  {
    title: '标签',
    icon: 'paihang',
    path: 'Tags'
  },
  {
    title: '目录',
    icon: 'bag',
    path: 'Catalog'
  },
  {
    title: '我的人物',
    icon: 'like',
    path: 'Character',
    login: true
  }
]

function Menu(props, { $, navigation }) {
  const styles = memoStyles()
  const { username, id } = $.userInfo
  return (
    <Flex style={styles.container} wrap='wrap'>
      {menus.map(item => (
        <Touchable
          key={item.path}
          onPress={() => {
            if (item.login && !username && !id) {
              info('请先登陆')
              return
            }

            t('发现.跳转', {
              to: item.path
            })

            navigation.push(
              item.path,
              item.login
                ? {
                    userName: username || id
                  }
                : {}
            )
          }}
        >
          <Flex style={styles.wrap} justify='center'>
            <Flex style={styles.item} direction='column'>
              <View style={styles.border} />
              <Flex style={styles.icon} justify='center'>
                {item.icon === 'anitama' ? (
                  <Image
                    src={ImageAnitama}
                    size={32}
                    radius={16}
                    placeholder={false}
                    quality={false}
                  />
                ) : (
                  <Iconfont
                    name={item.icon}
                    size={28}
                    color={_.__colorPlain__}
                  />
                )}
              </Flex>
              <Text style={_.mt.sm} size={12}>
                {item.title}
              </Text>
            </Flex>
          </Flex>
        </Touchable>
      ))}
    </Flex>
  )
}

Menu.contextTypes = {
  $: PropTypes.object,
  navigation: PropTypes.object
}

export default observer(Menu)

const memoStyles = _.memoStyles(_ => ({
  container: {
    paddingHorizontal: _.wind
  },
  wrap: {
    width: (_.window.width - 2 * _.wind) * 0.249,
    marginTop: _.md
  },
  item: {
    width: 56
  },
  icon: {
    width: 56,
    height: 56,
    backgroundColor: _.select(_.colorDark, _._colorDarkModeLevel1),
    borderRadius: 56
  },
  border: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    width: 56,
    height: 56,
    marginTop: 1,
    marginRight: -2,
    backgroundColor: _.colorDanger,
    borderRadius: 56
  }
}))
