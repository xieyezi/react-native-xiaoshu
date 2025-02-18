---
title: Field 输入项
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 1
---

# Field 输入项

> 与表单进行交互，包含 onChange、value、defaultValue。

## 何时使用

适用于表单场景。

该系列组件采用单元格+其他组件组合而成，以单元格属性为主，其他组件属性为辅。

## 元素结构

```bash
## Field.Text
|-- Cell  ## 几乎就是一个单元格，右侧内容显示 value 或 placeholder

## Field.Selector | Field.Date
|-- Field.Text  ## 几乎就是一个 Field.Text

## Field.TextInput | Field.NumberInput | Field.Switch | Field.Password
|-- Cell
|--|-- value:TextInput|NumberInput|Switch|PasswordInput ## value 自定义元素

## Field.Checkbox
|-- Cell
|--|-- value:Space ## value 自定义元素
|--|--|-- Checkbox ## 遍历选项数组
```

## 代码演示

<code src="./__fixtures__/text.tsx"></code>

<code src="./__fixtures__/selector.tsx"></code>

<code src="./__fixtures__/text-input.tsx"></code>

<code src="./__fixtures__/number-input.tsx"></code>

<code src="./__fixtures__/switch.tsx"></code>

<code src="./__fixtures__/date.tsx"></code>

<code src="./__fixtures__/date-range.tsx"></code>

<code src="./__fixtures__/checkbox.tsx"></code>

<code src="./__fixtures__/password.tsx"></code>

<code src="./__fixtures__/button-option.tsx"></code>

## API

### Field.Text

<API hideTitle src="./field-text.tsx"></API>

### Field.Selector

<API hideTitle src="./field-selector.tsx"></API>

### Field.TextInput

<API hideTitle src="./field-text-input.tsx"></API>

### Field.NumberInput

<API hideTitle src="./field-number-input.tsx"></API>

### Field.Switch

<API hideTitle src="./field-switch.tsx"></API>

### Field.Date

<API hideTitle src="./field-date.tsx"></API>

### Field.DateRange

<API hideTitle src="./field-date-range.tsx"></API>

### Field.Checkbox

<API hideTitle src="./field-checkbox.tsx"></API>

### Field.Password

<API hideTitle src="./field-password.tsx"></API>

### Field.ButtonOption

<API hideTitle src="./field-button-option.tsx"></API>

## 主题定制

| 名称               | 默认值           | 描述 |
| :----------------- | ---------------- | ---- |
| field_checkbox_gap | `TOKENS.space_6` | -    |
