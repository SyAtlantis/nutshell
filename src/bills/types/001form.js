import React from 'react'
import { translate } from 'react-i18next'
// import { connect } from 'redux-bundler-react'

class MyForm extends React.Component {
  state = {
    issue_date: '1111',
    bill_due_date: '',
    bill_state: '',
    bill_no: '',
    drawer_name: '',
    drawer_account: '',
    drawer_bank: '',
    payee_name: '',
    payee_account: '',
    payee_bank: '',
    bail_name: '',
    bail_address: '',
    bail_date: '',
    money: '',
    acceptor_name: '',
    acceptor_account: '',
    acceptor_bank_no: '',
    acceptor_bank_name: '',
    contract_no: '',
    is_transfer: '',
    acceptor_date: '',
    drawer_rate: '',
    drawer_credit: '',
    drawer_due_date: '',
    acceptor_rate: '',
    acceptor_credit: '',
    acceptor_due_date: ''
  }

  handleChange = (key, event) => {
    let form = this.state.form
    for (let item in this.state.form) {
      if (item === key) {
        form[item] = event.target.value
        this.setState({ form: form })
      }
    }
  }
  render () {
    return (
      <div>
        <div><span>出票日期：</span><input type="text" onChange={this.handleChange.bind(this, 'issue_date')}/></div>
        <div>汇票到期日：<input type="text" onChange={this.handleChange.bind(this, 'bill_due_date')}/></div>
        <div>票据状态：<input type="text" onChange={this.handleChange.bind(this, 'bill_state')}/></div>
        <div>票据号码：<input type="text" onChange={this.handleChange.bind(this, 'bill_no')}/></div>
        <div>出票人 全称：<input type="text" onChange={this.handleChange.bind(this, 'drawer_name')}/></div>
        <div>出票人 账号：<input type="text" onChange={this.handleChange.bind(this, 'drawer_account')}/></div>
        <div>出票人 开户银行：<input type="text" onChange={this.handleChange.bind(this, 'drawer_bank')}/></div>
        <div>收票人 全称：<input type="text" onChange={this.handleChange.bind(this, 'payee_name')}/></div>
        <div>收票人 账号：<input type="text" onChange={this.handleChange.bind(this, 'payee_account')}/></div>
        <div>收票人 开户银行：<input type="text" onChange={this.handleChange.bind(this, 'payee_bank')}/></div>
        <div>保证人名称：<input type="text" onChange={this.handleChange.bind(this, 'bail_name')}/></div>
        <div>保证人地址：<input type="text" onChange={this.handleChange.bind(this, 'bail_address')}/></div>
        <div>保证日期：<input type="text" onChange={this.handleChange.bind(this, 'bail_date')}/></div>
        <div>人民币：<input type="text" onChange={this.handleChange.bind(this, 'money')}/></div>
        <div>承兑人 全称：<input type="text" onChange={this.handleChange.bind(this, 'acceptor_name')}/></div>
        <div>承兑人 账号：<input type="text" onChange={this.handleChange.bind(this, 'acceptor_account')}/></div>
        <div>承兑人 开户行行号：<input type="text" onChange={this.handleChange.bind(this, 'acceptor_bank_no')}/></div>
        <div>承兑人 开户行名称：<input type="text" onChange={this.handleChange.bind(this, 'acceptor_bank_name')}/></div>
        <div>交易合同号：<input type="text" onChange={this.handleChange.bind(this, 'contract_no')}/></div>
        <div>能否转让：<input type="text" onChange={this.handleChange.bind(this, 'is_transfer')}/></div>
        <div>承兑日期：<input type="text" onChange={this.handleChange.bind(this, 'acceptor_date')}/></div>
        <div>出票人 评级主体：<input type="text" onChange={this.handleChange.bind(this, 'drawer_rate')}/></div>
        <div>出票人 信用等级：<input type="text" onChange={this.handleChange.bind(this, 'drawer_credit')}/></div>
        <div>出票人 评级到期日：<input type="text" onChange={this.handleChange.bind(this, 'drawer_due_date')}/></div>
        <div>承兑人 评级主体：<input type="text" onChange={this.handleChange.bind(this, 'acceptor_rate')}/></div>
        <div>承兑人 信用等级：<input type="text" onChange={this.handleChange.bind(this, 'acceptor_credit')}/></div>
        <div>承兑人 评级到期日：<input type="text" onChange={this.handleChange.bind(this, 'acceptor_due_date')}/></div>
      </div>
    )
  }
}

export default translate('peers')(MyForm)
