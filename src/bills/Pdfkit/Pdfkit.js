import React from 'react'
import { translate } from 'react-i18next'
import { connect } from 'redux-bundler-react'

import PDFDocument from '@react-pdf/pdfkit'
import BlobStream from 'blob-stream'
import { invoiceBgBs64 } from '../types/001map'

class Pdfkit extends React.Component {
    state = {
      pdfurl: ''
    }

    componentDidMount () {
      const doc = new PDFDocument({ autoFirstPage: false })
      doc.addPage({ layout: 'landscape', size: [600, 800] })
      const stream = doc.pipe(BlobStream())
      // doc.fontSize(25).text('Here is some vector graphics...', 100, 100)
      // var img = require('./logo.png')
      doc.image(invoiceBgBs64, {
        fit: [800, 600],
        align: 'center',
        valign: 'center'
      })
      doc.fontSize(15).text('12333444', 120, 200)
      doc.end()
      stream.on('finish', () => {
        const url = stream.toBlobURL('application/pdf')
        this.setState({ 'pdfurl': url })
      })
    }

    render () {
      return (
        <div>
          <iframe title='pdfkit' src={this.state.pdfurl} width="800" height="700"></iframe>
        </div>
      )
    }
}

export default connect('doConnectSwarm', translate('bills')(Pdfkit))
