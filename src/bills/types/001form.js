import React from 'react'
import { translate } from 'react-i18next'
// import { connect } from 'redux-bundler-react'

class MyForm extends React.Component {
  state = {
    issue_date: '',
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
    const inputTitle = {
      width: '160px',
      display: 'inline-block'
    }
    return (
      <div>
        <div><div style={inputTitle}>出票日期：</div><input type="text" onChange={this.handleChange.bind(this, 'issue_date')} /></div>
        <div><div style={inputTitle}>汇票到期日：</div><input type="text" onChange={this.handleChange.bind(this, 'bill_due_date')} /></div>
        <div><div style={inputTitle}>票据状态：</div><input type="text" onChange={this.handleChange.bind(this, 'bill_state')} /></div>
        <div><div style={inputTitle}>票据号码：</div><input type="text" onChange={this.handleChange.bind(this, 'bill_no')} /></div>
        <div><div style={inputTitle}>出票人 全称：</div><input type="text" onChange={this.handleChange.bind(this, 'drawer_name')} /></div>
        <div><div style={inputTitle}>出票人 账号：</div><input type="text" onChange={this.handleChange.bind(this, 'drawer_account')} /></div>
        <div><div style={inputTitle}>出票人 开户银行：</div><input type="text" onChange={this.handleChange.bind(this, 'drawer_bank')} /></div>
        <div><div style={inputTitle}>收票人 全称：</div><input type="text" onChange={this.handleChange.bind(this, 'payee_name')} /></div>
        <div><div style={inputTitle}>收票人 账号：</div><input type="text" onChange={this.handleChange.bind(this, 'payee_account')} /></div>
        <div><div style={inputTitle}>收票人 开户银行：</div><input type="text" onChange={this.handleChange.bind(this, 'payee_bank')} /></div>
        <div><div style={inputTitle}>保证人名称：</div><input type="text" onChange={this.handleChange.bind(this, 'bail_name')} /></div>
        <div><div style={inputTitle}>保证人地址：</div><input type="text" onChange={this.handleChange.bind(this, 'bail_address')} /></div>
        <div><div style={inputTitle}>保证日期：</div><input type="text" onChange={this.handleChange.bind(this, 'bail_date')} /></div>
        <div><div style={inputTitle}>票据金额：</div><input type="text" onChange={this.handleChange.bind(this, 'money')} /></div>
        <div><div style={inputTitle}>承兑人 全称：</div><input type="text" onChange={this.handleChange.bind(this, 'acceptor_name')} /></div>
        <div><div style={inputTitle}>承兑人 账号：</div><input type="text" onChange={this.handleChange.bind(this, 'acceptor_account')} /></div>
        <div><div style={inputTitle}>承兑人 开户行行号：</div><input type="text" onChange={this.handleChange.bind(this, 'acceptor_bank_no')} /></div>
        <div><div style={inputTitle}>承兑人 开户行名称：</div><input type="text" onChange={this.handleChange.bind(this, 'acceptor_bank_name')} /></div>
        <div><div style={inputTitle}>交易合同号：</div><input type="text" onChange={this.handleChange.bind(this, 'contract_no')} /></div>
        <div><div style={inputTitle}>能否转让：</div><input type="text" onChange={this.handleChange.bind(this, 'is_transfer')} /></div>
        <div><div style={inputTitle}>承兑日期：</div><input type="text" onChange={this.handleChange.bind(this, 'acceptor_date')} /></div>
        <div><div style={inputTitle}>出票人 评级主体：</div><input type="text" onChange={this.handleChange.bind(this, 'drawer_rate')} /></div>
        <div><div style={inputTitle}>出票人 信用等级：</div><input type="text" onChange={this.handleChange.bind(this, 'drawer_credit')} /></div>
        <div><div style={inputTitle}>出票人 评级到期日：</div><input type="text" onChange={this.handleChange.bind(this, 'drawer_due_date')} /></div>
        <div><div style={inputTitle}>承兑人 评级主体：</div><input type="text" onChange={this.handleChange.bind(this, 'acceptor_rate')} /></div>
        <div><div style={inputTitle}>承兑人 信用等级：</div><input type="text" onChange={this.handleChange.bind(this, 'acceptor_credit')} /></div>
        <div><div style={inputTitle}>承兑人 评级到期日：</div><input type="text" onChange={this.handleChange.bind(this, 'acceptor_due_date')} /></div>
      </div>
    )
  }
}

export default translate('peers')(MyForm)
