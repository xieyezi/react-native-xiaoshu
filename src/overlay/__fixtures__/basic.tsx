/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'

import {
  Overlay,
  Button,
  Card,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const BasicOverlay: React.FC = () => {
  const [state, setState] = useState<
    Record<'normal' | 'inset' | 'backgroundColor', boolean>
  >({
    normal: false,
    inset: false,
    backgroundColor: false,
  })

  return (
    <>
      <Space tail head>
        <Card title="简单使用" square>
          <Button
            text="显示遮罩层 Android 返回关闭"
            type="primary"
            onPress={() => {
              setState(s => ({
                ...s,
                normal: true,
              }))
            }}
          />
        </Card>

        <Card title="嵌入内容" square>
          <Button
            text="嵌入内容"
            type="primary"
            onPress={() => {
              setState(s => ({
                ...s,
                inset: true,
              }))
            }}
          />
        </Card>

        <Card title="自定义背景色" square>
          <Button
            text="自定义背景色"
            type="primary"
            onPress={() => {
              setState(s => ({
                ...s,
                backgroundColor: true,
              }))
            }}
          />
        </Card>
      </Space>

      <Overlay
        visible={state.normal}
        onPress={() => {
          setState(s => ({
            ...s,
            normal: false,
          }))
        }}
        onRequestClose={() => {
          console.log('???')
          setState(s => ({
            ...s,
            normal: false,
          }))
          return true
        }}
      />

      <Overlay
        visible={state.inset}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          setState(s => ({
            ...s,
            inset: false,
          }))
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('????====')
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 200,
              height: 300,
              zIndex: 4,
              borderRadius: 4,
            }}
          />
        </TouchableWithoutFeedback>
      </Overlay>

      <Overlay
        visible={state.backgroundColor}
        backgroundColor="rgba(0,255,0,0.3)"
        onPress={() => {
          setState(s => ({
            ...s,
            backgroundColor: false,
          }))
        }}
      />
    </>
  )
}

export default BasicOverlay
