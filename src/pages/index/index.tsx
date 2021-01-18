import React, { Component } from 'react'
import { View, Text, Video } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Video src="https://img.1000.com/qm-a-img%2Fattach4%2Fqm25966oof%2F4295058d-7a0c-4ffc-b6f0-d01d048e5670.MP4" />
      </View>
    )
  }
}
