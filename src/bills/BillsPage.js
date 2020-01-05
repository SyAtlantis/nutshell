import React from 'react'
import { translate } from 'react-i18next'
import { Helmet } from 'react-helmet'
// import Pdfkit from './Pdfkit'
import EditCanvas from './EditCanvas'

const PeersPage = ({ t }) => (
  <div data-id='PeersPage'>
    <Helmet>
      <title>{t('title')} - NUTSHELL</title>
    </Helmet>

    <div >
      <EditCanvas/>
      {/* <Pdfkit className='pt3 ph3 pb4'/> */}
    </div>
  </div>
)

export default translate('bills')(PeersPage)
