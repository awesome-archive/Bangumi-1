/*
 * 头像
 * @Author: czy0729
 * @Date: 2019-05-19 17:10:16
 * @Last Modified by: czy0729
 * @Last Modified time: 2020-01-23 20:06:27
 */
import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react'
import { Image } from '@components'
import { _, systemStore } from '@stores'
import { getCoverMedium } from '@utils/app'
import { t } from '@utils/fetch'
import { IOS } from '@constants'
import { CDN_OSS_AVATAR } from '@constants/cdn'

function Avatar({
  style,
  navigation,
  userId,
  name,
  src,
  size,
  borderColor = _.colorBorder,
  event,
  onPress,
  onLongPress
}) {
  const styles = memoStyles()
  const { cdn, avatarRound } = systemStore.setting
  const _src = cdn
    ? CDN_OSS_AVATAR(getCoverMedium(src, true))
    : getCoverMedium(src, true)
  const radius = avatarRound ? size / 2 : true
  const _onPress = () => {
    if (onPress) {
      onPress()
      return
    }

    if (navigation && userId) {
      const { id, data = {} } = event
      t(id, {
        to: 'Zone',
        userId,
        ...data
      })

      navigation.push('Zone', {
        userId,
        _id: userId,
        _image: _src,
        _name: name
      })
    }
  }

  /**
   * @notice 安卓gif图片不能直接设置borderRadius, 需要再包一层
   * 然后就是bgm的默认图/icon.jpg根本不是jpg是gif
   */
  if (!IOS && src && src.includes('/icon.jpg')) {
    const _style = [
      styles.avatar,
      {
        width: size,
        height: size,
        borderColor
      },
      style
    ]
    if (avatarRound) {
      _style.push({
        borderRadius: size / 2
      })
    }
    return (
      <View style={_style}>
        <Image
          size={size}
          src={_src}
          radius={radius}
          quality={false}
          onPress={_onPress}
          onLongPress={onLongPress}
        />
      </View>
    )
  }

  return (
    <Image
      style={style}
      size={size}
      src={_src}
      radius={radius}
      border={borderColor}
      quality={false}
      onPress={_onPress}
      onLongPress={onLongPress}
    />
  )
}

Avatar.defaultProps = {
  navigation: undefined,
  userId: undefined,
  src: undefined,
  size: 28,
  borderColor: undefined,
  event: {},
  onPress: undefined,
  onLongPress: undefined
}

export default observer(Avatar)

const memoStyles = _.memoStyles(_ => ({
  avatar: {
    borderWidth: _.hairlineWidth,
    borderColor: _.colorBorder,
    borderRadius: _.radiusXs,
    overflow: 'hidden'
  }
}))
