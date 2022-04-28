import isArray from 'lodash/isArray'
import isUndefined from 'lodash/isUndefined'
import React, { memo } from 'react'
import { Keyboard } from 'react-native'

import { varCreator as varCreatorButton } from '../button/style'
import { usePersistFn } from '../hooks'
import Selector from '../selector'
import type { SelectorValue } from '../selector/interface'
import TextInputClear from '../text-input/text-input-clear'
import Theme from '../theme'

import FieldText from './field-text'
import type { FieldSelectorProps } from './interface'

/**
 * 输入框 选择输入
 */
const FieldSelector: React.FC<FieldSelectorProps> = ({
  value,
  options,
  multiple,
  onChange,
  optionsLoading = false,
  innerStyle,
  editable = true,
  clearable = false,
  selectorTitle = '请选择',

  isLink = true,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV_BUTTON = Theme.createVar(TOKENS, varCreatorButton)

  const onPressCell = usePersistFn(() => {
    Keyboard.dismiss()
    if (editable) {
      Selector({
        title: selectorTitle,
        multiple,
        options,
        value,
        onChange,
      }).catch(() => {})
    }
  })
  const hasValue = multiple
    ? isArray(value as SelectorValue[]) && (value as SelectorValue[]).length > 0
    : !isUndefined(value as SelectorValue)
  const value2text = hasValue
    ? ((multiple ? value : [value]) as SelectorValue[])
        .map(o => {
          const index = options.findIndex(ops => ops.value === o)
          if (index >= 0) {
            return options[index].label
          }
          return null
        })
        .filter(Boolean)
        .join('、')
    : undefined

  return (
    <FieldText
      {...restProps}
      innerStyle={
        optionsLoading
          ? [
              innerStyle,
              {
                opacity: CV_BUTTON.button_active_opacity,
              },
            ]
          : innerStyle
      }
      onPress={optionsLoading ? undefined : onPressCell}
      value={value2text}
      isLink={hasValue && clearable ? false : isLink}
      valueExtra={
        hasValue && clearable ? (
          <>
            {restProps.valueExtra}
            <TextInputClear
              onPress={() => {
                onChange(multiple ? [] : undefined, multiple ? [] : undefined)
              }}
            />
          </>
        ) : (
          restProps.valueExtra
        )
      }
    />
  )
}

export default memo(FieldSelector)
