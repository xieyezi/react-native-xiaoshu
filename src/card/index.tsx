import React, { memo } from 'react'
import { View } from 'react-native'

import Skeleton from '../skeleton'
import { useTheme, widthStyle } from '../theme'
import { isDef, renderTextLikeJSX } from '../helpers'
import type { CardProps } from './interface'
import { createStyles } from './style'

const Card: React.FC<CardProps> = ({
  children,
  title,
  titleLeftExtra,
  extra,
  footer,
  headerStyle,
  titleStyle,
  titleTextStyle,
  bodyStyle,
  footerStyle,
  footerTextStyle,
  size = 'm',
  square = false,
  loading = false,
}) => {
  const isS = size === 's'

  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const hasTitleLeftExtra = isDef(titleLeftExtra)
  const titleJSX = renderTextLikeJSX(
    title,
    [
      STYLES.title_text,
      isS ? STYLES.title_text_s : null,
      titleTextStyle,
      hasTitleLeftExtra ? STYLES.title_text_margin_left : null,
    ],
    {
      numberOfLines: 1,
    },
  )
  const footerJSX = renderTextLikeJSX(footer, [
    STYLES.footer_text,
    footerTextStyle,
  ])

  const showHeader = isDef(titleJSX) || hasTitleLeftExtra || isDef(extra)

  return (
    <View style={[STYLES.card, square ? null : STYLES.card_radius]}>
      {showHeader ? (
        <View
          style={[STYLES.header, isS ? STYLES.header_s : null, headerStyle]}>
          <View style={[STYLES.title, titleStyle]}>
            {titleLeftExtra}
            {titleJSX}
          </View>
          {extra}
        </View>
      ) : null}
      <View style={[STYLES.body, bodyStyle]}>
        {loading ? <Skeleton loading /> : children}
      </View>

      {isDef(footerJSX) ? (
        <View style={[STYLES.footer, footerStyle]}>{footerJSX}</View>
      ) : null}
    </View>
  )
}

export default memo<typeof Card>(Card)
