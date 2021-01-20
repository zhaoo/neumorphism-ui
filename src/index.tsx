import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Text } from './components'
import './components/style/index.scss'
import './index.scss'

ReactDOM.render(
  <div className="neu-container">
    <section className="neu-button-section">
      <Button size="small">小号</Button>
      <Button size="normal">中号</Button>
      <Button size="large">大号</Button>
      <Button type="error">失败</Button>
      <Button type="success">成功</Button>
      <Button type="info">信息</Button>
      <Button type="warning">警告</Button>
      <Button disabled>禁用</Button>
      <Button shape="round">椭圆</Button>
    </section>
    <section className="neu-text-section">
      <Text>Helle, Word!</Text>
      <Text unselectable>选不了我？F12 试试~</Text>
      <Text lines={2}>
        别凑字数啦，没用哒！别凑字数啦，没用哒！别凑字数啦，没用哒！别凑字数啦，没用哒！别凑字数啦，没用哒！别凑字数啦，没用哒！别凑字数啦，没用哒！
      </Text>
    </section>
  </div>,
  document.getElementById('root')
)
