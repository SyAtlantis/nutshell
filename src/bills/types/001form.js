import React from 'react'
import { translate } from 'react-i18next'
// import { connect } from 'redux-bundler-react'

class MyForm extends React.Component {
  render () {
    return (
      <div>
        <div>出票日期：<input/></div>
        <div>汇票到期日：<input/></div>
        <div>票据状态：<input/></div>
        <div>票据号码：<input/></div>
        <div>出票人 全称：<input/></div>
        <div>出票人 账号：<input/></div>
        <div>出票人 开户银行：<input/></div>
        <div>开票人 全称：<input/></div>
        <div>开票人 账号：<input/></div>
        <div>开票人 开户银行：<input/></div>
        <div>保证人名称：<input/></div>
        <div>保证人地址：<input/></div>
        <div>保证日期：<input/></div>
        <div>人民币(大写)：<input/></div>
        <div>保证日期：<input/></div>
        <div>保证日期：<input/></div>
        <div>保证日期：<input/></div>
        <div>保证日期：<input/></div>
        <div>保证日期：<input/></div>
        <div>保证日期：<input/></div>
        <div>保证日期：<input/></div>
        <div>保证日期：<input/></div>
        <div>保证日期：<input/></div>
      </div>
    )
  }
}

export default translate('peers')(MyForm)
