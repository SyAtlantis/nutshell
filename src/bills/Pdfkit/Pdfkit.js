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
      doc.image(invoiceBgBs64, {
        fit: [800, 600],
        align: 'center',
        valign: 'center'
      })

      doc.fontSize(15).text('12333444', 100, 138)
      doc.fontSize(15).text('12333444', 100, 160)
      doc.fontSize(15).text('12333444', 550, 138)
      doc.fontSize(15).text('12333444', 550, 160)

      doc.fontSize(15).text('12333444', 130, 188)
      doc.fontSize(15).text('12333444', 130, 210)
      doc.fontSize(15).text('12333444', 130, 232)
      doc.fontSize(15).text('12333444', 480, 188)
      doc.fontSize(15).text('12333444', 480, 210)
      doc.fontSize(15).text('12333444', 480, 232)

      doc.fontSize(15).text('12333444', 193, 254)
      doc.fontSize(15).text('12333444', 455, 254)
      doc.fontSize(15).text('12333444', 670, 254)

      doc.fontSize(15).text('222222', 190, 288)
      doc.fontSize(15).text('9', 500, 300)
      doc.fontSize(15).text('8', 522, 300)
      doc.fontSize(15).text('7', 544, 300)
      doc.fontSize(15).text('6', 566, 300)
      doc.fontSize(15).text('5', 587, 300)
      doc.fontSize(15).text('4', 608, 300)
      doc.fontSize(15).text('3', 630, 300)
      doc.fontSize(15).text('2', 651, 300)
      doc.fontSize(15).text('1', 672, 300)
      doc.fontSize(15).text('9', 695, 300)
      doc.fontSize(15).text('8', 716, 300)
      doc.fontSize(15).text('7', 736, 300)

      doc.fontSize(15).text('12333444', 206, 325)
      doc.fontSize(15).text('12333444', 206, 348)
      doc.fontSize(15).text('12333444', 480, 325)
      doc.fontSize(15).text('12333444', 480, 348)

      doc.fontSize(15).text('12333444', 130, 369)
      doc.fontSize(15).text('12333444', 130, 400)
      doc.fontSize(15).text('12333444', 670, 414)

      doc.fontSize(15).text('12333444', 190, 435)
      doc.fontSize(15).text('12333444', 450, 435)
      doc.fontSize(15).text('12333444', 670, 435)

      doc.fontSize(15).text('12333444', 262, 458)
      doc.fontSize(15).text('12333444', 542, 458)
      doc.fontSize(15).text('12333444', 684, 458)
      doc.fontSize(15).text('12333444', 262, 482)
      doc.fontSize(15).text('12333444', 542, 482)
      doc.fontSize(15).text('12333444', 684, 482)

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
