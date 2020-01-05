import React from 'react'
import { translate } from 'react-i18next'
import { connect } from 'redux-bundler-react'
import Button from '../components/button/Button'
import { invoiceBgBs64 } from './types/001map'

class EditCanvas extends React.Component {
  state = {
    pdfurl: '',
    form: {
      issue_date: '2020-01-01',
      bill_due_date: '2020-12-31',
      bill_state: '有效',
      bill_no: '123456789',
      drawer_name: '张三',
      drawer_account: '785612300045',
      drawer_bank: '963456987136641145662',
      payee_name: '李四',
      payee_account: '6587449611',
      payee_bank: '156546611541616511000',
      drawer_bail_name: '王五',
      drawer_bail_address: '湖北武汉',
      drawer_bail_date: '2019-12-31',
      money: '123456',
      money_0: '壹贰叁肆伍陆',
      money_1: '0',
      money_2: '0',
      money_3: '6',
      money_4: '5',
      money_5: '4',
      money_6: '3',
      money_7: '2',
      money_8: '1',
      money_9: '0',
      money_10: '0',
      money_11: '0',
      money_12: '0',
      acceptor_name: '赵六',
      acceptor_account: '48489211544202321',
      acceptor_bank_no: '96654485',
      acceptor_bank_name: '中国银行武汉支行',
      contract_no: '123456789',
      is_transfer: '是',
      acceptor_date: '2019-12-31',
      acceptor_bail_name: '王麻子',
      acceptor_bail_address: '留学生产业园',
      acceptor_bail_date: '2020-01-01',
      drawer_rate: '熊大',
      drawer_credit: 'A+',
      drawer_due_date: '20-12-31',
      acceptor_rate: '熊二',
      acceptor_credit: 'A+',
      acceptor_due_date: '20-12-31'
    }
  }

  componentDidMount () {
    this.fillCanvas()
  }

  componentDidUpdate () {
    this.fillCanvas()
  }

  fillCanvas () {
    var ctx = document.getElementById('myCanvas').getContext('2d')

    var imgObj = new Image()
    imgObj.onload = () => {
      ctx.drawImage(imgObj, 0, 66)
      ctx.font = 'bold 15px 宋体'

      ctx.fillText(this.state.form['issue_date'], 105, 135)
      ctx.fillText(this.state.form['bill_due_date'], 105, 160)
      ctx.fillText(this.state.form['bill_state'], 575, 135)
      ctx.fillText(this.state.form['bill_no'], 575, 160)

      ctx.fillText(this.state.form['drawer_name'], 140, 188)
      ctx.fillText(this.state.form['drawer_account'], 140, 212)
      ctx.fillText(this.state.form['drawer_bank'], 140, 236)
      ctx.fillText(this.state.form['payee_name'], 510, 188)
      ctx.fillText(this.state.form['payee_account'], 510, 212)
      ctx.fillText(this.state.form['payee_bank'], 510, 236)

      ctx.fillText(this.state.form['drawer_bail_name'], 205, 261)
      ctx.fillText(this.state.form['drawer_bail_address'], 484, 261)
      ctx.fillText(this.state.form['drawer_bail_date'], 717, 261)

      ctx.fillText(this.state.form['money_0'], 200, 298)
      ctx.fillText(this.state.form['money_12'], 538, 310)
      ctx.fillText(this.state.form['money_11'], 560, 310)
      ctx.fillText(this.state.form['money_10'], 582, 310)
      ctx.fillText(this.state.form['money_9'], 604, 310)
      ctx.fillText(this.state.form['money_8'], 627, 310)
      ctx.fillText(this.state.form['money_7'], 650, 310)
      ctx.fillText(this.state.form['money_6'], 674, 310)
      ctx.fillText(this.state.form['money_5'], 695, 310)
      ctx.fillText(this.state.form['money_4'], 718, 310)
      ctx.fillText(this.state.form['money_3'], 742, 310)
      ctx.fillText(this.state.form['money_2'], 766, 310)
      ctx.fillText(this.state.form['money_1'], 786, 310)

      ctx.fillText(this.state.form['acceptor_name'], 216, 335)
      ctx.fillText(this.state.form['acceptor_account'], 216, 358)
      ctx.fillText(this.state.form['acceptor_bank_no'], 510, 335)
      ctx.fillText(this.state.form['acceptor_bank_name'], 510, 358)

      ctx.fillText(this.state.form['contract_no'], 140, 382)
      ctx.fillText(this.state.form['is_transfer'], 140, 420)
      ctx.fillText(this.state.form['acceptor_date'], 717, 430)

      ctx.fillText(this.state.form['acceptor_bail_name'], 205, 455)
      ctx.fillText(this.state.form['acceptor_bail_address'], 484, 455)
      ctx.fillText(this.state.form['acceptor_bail_date'], 717, 455)

      ctx.fillText(this.state.form['drawer_rate'], 277, 480)
      ctx.fillText(this.state.form['drawer_credit'], 577, 480)
      ctx.fillText(this.state.form['drawer_due_date'], 730, 480)
      ctx.fillText(this.state.form['acceptor_rate'], 277, 504)
      ctx.fillText(this.state.form['acceptor_credit'], 577, 504)
      ctx.fillText(this.state.form['acceptor_due_date'], 730, 504)
    }
    imgObj.src = invoiceBgBs64
  }

  handleChange = (key, event) => {
    // console.log(key, event, event.target.value)
    // this.setState({ issue_date: event.target.value })
    let form = this.state.form
    for (let item in this.state.form) {
      if (item === key) {
        if (key === 'money') {
          // let v = parseFloat(event.target.value).toFixed(2)
          // // let zh = this.changeNumMoneyToChinese(v)
          // form['money_0'] = this.changeNumMoneyToChinese(v)
        } else {
          form[item] = event.target.value
        }
        this.setState({ form: form })
      }
    }
  }

  upload () {

  }

  render () {
    const inputTitle = {
      width: '160px',
      display: 'inline-block'
    }
    return (
      <div>
        {/* <CanvasDraw /> */}
        <div className='flex justify-between'>
          <div>
            <div><div style={inputTitle}>出票日期：</div><input type="text" value={this.state.form.issue_date} onChange={this.handleChange.bind(this, 'issue_date')} /></div>
            <div><div style={inputTitle}>汇票到期日：</div><input type="text" value={this.state.form.bill_due_date} onChange={this.handleChange.bind(this, 'bill_due_date')} /></div>
            <div><div style={inputTitle}>票据状态：</div><input type="text" value={this.state.form.bill_state} onChange={this.handleChange.bind(this, 'bill_state')} /></div>
            <div><div style={inputTitle}>票据号码：</div><input type="text" value={this.state.form.bill_no} onChange={this.handleChange.bind(this, 'bill_no')} /></div>
            <div><div style={inputTitle}>出票人 全称：</div><input type="text" value={this.state.form.drawer_name} onChange={this.handleChange.bind(this, 'drawer_name')} /></div>
            <div><div style={inputTitle}>出票人 账号：</div><input type="text" value={this.state.form.drawer_account} onChange={this.handleChange.bind(this, 'drawer_account')} /></div>
            <div><div style={inputTitle}>出票人 开户银行：</div><input type="text" value={this.state.form.drawer_bank} onChange={this.handleChange.bind(this, 'drawer_bank')} /></div>
            <div><div style={inputTitle}>收票人 全称：</div><input type="text" value={this.state.form.payee_name} onChange={this.handleChange.bind(this, 'payee_name')} /></div>
            <div><div style={inputTitle}>收票人 账号：</div><input type="text" value={this.state.form.payee_account} onChange={this.handleChange.bind(this, 'payee_account')} /></div>
            <div><div style={inputTitle}>收票人 开户银行：</div><input type="text" value={this.state.form.payee_bank} onChange={this.handleChange.bind(this, 'payee_bank')} /></div>
            <div><div style={inputTitle}>出票 保证人名称：</div><input type="text" value={this.state.form.drawer_bail_name} onChange={this.handleChange.bind(this, 'drawer_bail_name')} /></div>
            <div><div style={inputTitle}>出票 保证人地址：</div><input type="text" value={this.state.form.drawer_bail_address} onChange={this.handleChange.bind(this, 'drawer_bail_address')} /></div>
            <div><div style={inputTitle}>出票 保证日期：</div><input type="text" value={this.state.form.drawer_bail_date} onChange={this.handleChange.bind(this, 'drawer_bail_date')} /></div>
            <div><div style={inputTitle}>票据金额：</div><input type="text" value={this.state.form.money} onChange={this.handleChange.bind(this, 'money')} /></div>
            <div><div style={inputTitle}>承兑人 全称：</div><input type="text" value={this.state.form.acceptor_name} onChange={this.handleChange.bind(this, 'acceptor_name')} /></div>
            <div><div style={inputTitle}>承兑人 账号：</div><input type="text" value={this.state.form.acceptor_account} onChange={this.handleChange.bind(this, 'acceptor_account')} /></div>
            <div><div style={inputTitle}>承兑人 开户行行号：</div><input type="text" value={this.state.form.acceptor_bank_no} onChange={this.handleChange.bind(this, 'acceptor_bank_no')} /></div>
            <div><div style={inputTitle}>承兑人 开户行名称：</div><input type="text" value={this.state.form.acceptor_bank_name} onChange={this.handleChange.bind(this, 'acceptor_bank_name')} /></div>
            <div><div style={inputTitle}>交易合同号：</div><input type="text" value={this.state.form.contract_no} onChange={this.handleChange.bind(this, 'contract_no')} /></div>
            <div><div style={inputTitle}>能否转让：</div><input type="text" value={this.state.form.is_transfer} onChange={this.handleChange.bind(this, 'is_transfer')} /></div>
            <div><div style={inputTitle}>承兑日期：</div><input type="text" value={this.state.form.acceptor_date} onChange={this.handleChange.bind(this, 'acceptor_date')} /></div>
            <div><div style={inputTitle}>承兑 保证人名称：</div><input type="text" value={this.state.form.acceptor_bail_name} onChange={this.handleChange.bind(this, 'acceptor_bail_name')} /></div>
            <div><div style={inputTitle}>承兑 保证人地址：</div><input type="text" value={this.state.form.acceptor_bail_address} onChange={this.handleChange.bind(this, 'acceptor_bail_address')} /></div>
            <div><div style={inputTitle}>承兑 保证日期：</div><input type="text" value={this.state.form.acceptor_bail_date} onChange={this.handleChange.bind(this, 'acceptor_bail_date')} /></div>
            <div><div style={inputTitle}>出票人 评级主体：</div><input type="text" value={this.state.form.drawer_rate} onChange={this.handleChange.bind(this, 'drawer_rate')} /></div>
            <div><div style={inputTitle}>出票人 信用等级：</div><input type="text" value={this.state.form.drawer_credit} onChange={this.handleChange.bind(this, 'drawer_credit')} /></div>
            <div><div style={inputTitle}>出票人 评级到期日：</div><input type="text" value={this.state.form.drawer_due_date} onChange={this.handleChange.bind(this, 'drawer_due_date')} /></div>
            <div><div style={inputTitle}>承兑人 评级主体：</div><input type="text" value={this.state.form.acceptor_rate} onChange={this.handleChange.bind(this, 'acceptor_rate')} /></div>
            <div><div style={inputTitle}>承兑人 信用等级：</div><input type="text" value={this.state.form.acceptor_credit} onChange={this.handleChange.bind(this, 'acceptor_credit')} /></div>
            <div><div style={inputTitle}>承兑人 评级到期日：</div><input type="text" value={this.state.form.acceptor_due_date} onChange={this.handleChange.bind(this, 'acceptor_due_date')} /></div>
          </div>
          <div>
            <div className='flex justify-end mb3'>
              <Button onClick={this.upload.bind(this)}>上传</Button>
            </div>
            <canvas id='myCanvas' width='860' height='600'></canvas>
          </div>
        </div>
      </div>
    )
  }
}

export default connect('doConnectSwarm', translate('bills')(EditCanvas))
