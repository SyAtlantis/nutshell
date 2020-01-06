/* eslint-disable use-isnan */
import React from 'react'
import { translate } from 'react-i18next'
import { connect } from 'redux-bundler-react'
import Button from '../components/button/Button'
import { invoiceBgBs64 } from './types/001map'
import { filesToStreams } from '../lib/files'
// import Canvas2Image from 'canvas2image'

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
      money: '',
      money_zh: '',
      money_1: '',
      money_2: '',
      money_3: '',
      money_4: '',
      money_5: '',
      money_6: '',
      money_7: '',
      money_8: '',
      money_9: '',
      money_10: '',
      money_11: '',
      money_12: '',
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

      ctx.fillText(this.state.form['money_zh'], 200, 298)
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
          let v = parseFloat(event.target.value).toFixed(2)
          form['money_zh'] = this.changeNumMoneyToChinese(v)

          if (event.target.value) {
            let s = (v * 100).toFixed(0).toString()
            for (let i = s.length; i >= 0; i--) {
              form['money_' + (s.length - i)] = s[i]
            }
          } else {
            for (let i = 1; i <= 12; i++) {
              form['money_' + i] = ''
            }
          }
          console.log(v, form['money_zh'], (v * 100).toString())
        }
        form[item] = event.target.value
        this.setState({ form: form })
      }
    }
  }

  changeNumMoneyToChinese = (money) => {
    console.log(money)
    // eslint-disable-next-line no-array-constructor
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖') // 汉字的数字
    // eslint-disable-next-line no-array-constructor
    var cnIntRadice = new Array('', '拾', '佰', '仟')// 基本单位
    // eslint-disable-next-line no-array-constructor
    var cnIntUnits = new Array('', '万', '亿', '兆')// 对应整数部分扩展单位
    // eslint-disable-next-line no-array-constructor
    var cnDecUnits = new Array('角', '分', '毫', '厘')// 对应小数部分单位
    var cnInteger = '整'// 整数金额时后面跟的字符
    var cnIntLast = '元'// 整型完以后的单位
    var maxNum = 999999999999999.9999// 最大处理的数字
    var IntegerNum// 金额整数部分
    var DecimalNum// 金额小数部分
    var ChineseStr = ''// 输出的中文金额字符串
    var parts// 分离金额后用的数组，预定义
    var Symbol = ''// 正负值标记
    if (money === '') {
      return ''
    }

    money = parseFloat(money)
    if (money >= maxNum) {
      alert('超出最大处理数字')
      return ''
    }
    if (money === 0) {
      ChineseStr = cnNums[0] + cnIntLast + cnInteger
      return ChineseStr
    }
    if (money < 0) {
      money = -money
      Symbol = '负'
    }
    money = money.toString()// 转换为字符串
    if (money.indexOf('.') === -1) {
      IntegerNum = money
      DecimalNum = ''
    } else {
      parts = money.split('.')
      IntegerNum = parts[0]
      DecimalNum = parts[1].substr(0, 4)
    }
    if (parseInt(IntegerNum, 10) > 0) { // 获取整型部分转换
      var zeroCount = 0
      var IntLen = IntegerNum.length
      for (var i = 0; i < IntLen; i++) {
        var n = IntegerNum.substr(i, 1)
        var p = IntLen - i - 1
        var q = p / 4
        var m = p % 4
        if (n === '0') {
          zeroCount++
        } else {
          if (zeroCount > 0) {
            ChineseStr += cnNums[0]
          }
          zeroCount = 0// 归零
          ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
        }
        if (m === 0 && zeroCount < 4) {
          ChineseStr += cnIntUnits[q]
        }
      }
      ChineseStr += cnIntLast // 整型部分处理完毕
    }
    if (DecimalNum !== '') { // 小数部分
      var decLen = DecimalNum.length
      for (let i = 0; i < decLen; i++) {
        let n = DecimalNum.substr(i, 1)
        if (n !== '0') {
          ChineseStr += cnNums[Number(n)] + cnDecUnits[i]
        }
      }
    }
    if (ChineseStr === '') {
      ChineseStr += cnNums[0] + cnIntLast + cnInteger
    } else if (DecimalNum === '') {
      ChineseStr += cnInteger
    }
    ChineseStr = Symbol + ChineseStr

    return ChineseStr
  }

  upload () {
    var ctx = document.getElementById('myCanvas')

    ctx.toBlob((blob) => {
      const { doFilesWrite } = this.props

      blob.name = this.state.form.bill_no || new Date().getTime()
      filesToStreams([blob])
        .then(result => {
          doFilesWrite('/', result)
        })
        .catch(error => {
          console.log('filetostream error:', error)
        })
      // console.log(blob)
    })
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
