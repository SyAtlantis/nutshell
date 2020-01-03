import React from 'react'
import { translate } from 'react-i18next'

import Pdfkit from './Pdfkit/Pdfkit'
import MyForm from './types/001form'

const PeersPage = ({ t }) => (
  <div data-id='PeersPage'>
    <div className='flex justify-between'>
      <MyForm></MyForm>
      <Pdfkit className='pt3 ph3 pb4'/>
    </div>
  </div>
)

export default translate('peers')(PeersPage)
