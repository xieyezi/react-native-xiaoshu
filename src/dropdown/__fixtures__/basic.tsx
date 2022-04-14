/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import { Cell, Dropdown } from '@fruits-chain/react-native-xiaoshu'

const itemOptions = [
  { label: '全部商品', value: null },
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14].map(v => ({
    label: `商品分类${v}`,
    value: v,
  })),
]

const itemOptions2 = [
  { label: '全部商品', value: null },
  ...[1, 2, 3, 4].map(v => ({
    label: `商品分类${v}`,
    value: v,
  })),
]

const itemOptions3 = [
  { label: '全部商品', value: null, children: [] },
  ...[1, 2, 3, 4].map(v => ({
    label: `分类_${v}`,
    value: `${v}`,
    children: [6, 7, 8].map(vv => ({
      label: `分类_${v}_${vv}`,
      value: `${v}_${vv}`,
      children: [9, 10, 11].map(vvv => ({
        label: `分类_${v}_${vv}_${vvv}`,
        value: `${v}_${vv}_${vvv}`,
      })),
    })),
  })),
]

const BasicDropdown: React.FC = () => {
  const [values, setValues] = useState({
    v1: itemOptions[0].value,
    v2: itemOptions[3].value,
    v3: itemOptions[2].value,
    v4: itemOptions[4].value,
  })

  return (
    <ScrollView scrollsToTop={false}>
      <Cell.Group title="基础用法">
        <Dropdown>
          <Dropdown.Item
            options={itemOptions}
            value={values.v1}
            onChange={(v, d) => {
              console.log(d)
              setValues(s => ({
                ...s,
                v1: v as number,
              }))
            }}
          />
          <Dropdown.Item
            options={itemOptions}
            defaultValue={itemOptions[2].value}
          />
        </Dropdown>

        <View style={{ height: 200 }} />

        <Dropdown>
          <Dropdown.Item
            disabled
            options={itemOptions}
            value={values.v1}
            onChange={v => {
              setValues(s => ({
                ...s,
                v1: v as number,
              }))
            }}
          />
          <Dropdown.Item options={itemOptions} value={itemOptions[2].value} />
        </Dropdown>

        <View style={{ height: 200 }} />

        <Dropdown direction="up" activeColor="#f30">
          <Dropdown.Item
            loading
            options={itemOptions}
            value={values.v3}
            onChange={v => {
              setValues(s => ({
                ...s,
                v3: v as number,
              }))
            }}
          />
          <Dropdown.Item
            options={itemOptions2}
            value={values.v4}
            onChange={v => {
              setValues(s => ({
                ...s,
                v4: v as number,
              }))
            }}
          />
        </Dropdown>

        <View style={{ height: 500 }} />

        <Dropdown direction="up" activeColor="#f30">
          <Dropdown.Item
            options={itemOptions}
            value={values.v3}
            onChange={v => {
              setValues(s => ({
                ...s,
                v3: v as number,
              }))
            }}
          />
          <Dropdown.Item
            options={itemOptions2}
            value={values.v4}
            onChange={v => {
              setValues(s => ({
                ...s,
                v4: v as number,
              }))
            }}
          />
        </Dropdown>

        <View style={{ height: 500 }} />

        <Dropdown>
          <Dropdown.Item
            options={itemOptions3}
            defaultValue={null}
            divider={false}
            onChange={(v, d) => {
              console.log(v)
              console.log(d)
            }}
          />
          <Dropdown.Item options={itemOptions3} defaultValue={null} />
        </Dropdown>

        <View style={{ height: 300 }} />
      </Cell.Group>
    </ScrollView>
  )
}

export default BasicDropdown
