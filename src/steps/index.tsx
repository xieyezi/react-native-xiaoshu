import React, { createContext, memo, useRef, useMemo } from 'react'
import type { FC } from 'react'
import { ScrollView, View } from 'react-native'

import { useTheme, widthStyle } from '../theme'

import type { StepsPropsType } from './interface'
import Step from './step'
import { createStyles } from './style'

export const StepsContext = createContext<{
  current?: number
  data?: StepsPropsType['data']
}>({})

export const maxSteps = 3

const Steps: FC<StepsPropsType> = ({ current, data, style }) => {
  const ctx = useMemo(() => ({ current, data }), [current, data])
  const THEME_VAR = useTheme()
  const scrollRef = useRef<ScrollView>(null)
  const STYLES = widthStyle(THEME_VAR, createStyles)

  let inner = null
  if (data?.length > 0) {
    inner = (
      <View
        style={[STYLES.stepsBox, style]}
        onLayout={e => {
          setScrollDistance(e?.nativeEvent?.layout?.width)
        }}>
        <StepsContext.Provider value={ctx}>
          {data?.map((v, i) => {
            return <Step key={i} index={i} {...v} />
          })}
        </StepsContext.Provider>
      </View>
    )
  }
  const setScrollDistance = width => {
    if (scrollRef.current && data?.length > maxSteps) {
      scrollRef.current.scrollTo({
        x: (width / data?.length) * (current - 1 > 0 ? current - 1 : 0),
        y: 0,
      })
    }
  }
  return (
    <View style={STYLES.outWrap}>
      {data?.length > maxSteps ? (
        <ScrollView style={STYLES.scrollViewBox} horizontal ref={scrollRef}>
          {inner}
        </ScrollView>
      ) : (
        inner
      )}
    </View>
  )
}
export default memo(Steps)
