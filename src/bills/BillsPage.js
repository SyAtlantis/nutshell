import React from 'react'
import { translate } from 'react-i18next'
import { connect } from 'redux-bundler-react'
import { Helmet } from 'react-helmet'
// import Pdfkit from './Pdfkit'
import EditCanvas from './EditCanvas'

const PeersPage = (props) => (
  <div data-id='PeersPage'>
    <Helmet>
      <title>{props.t('title')} - NUTSHELL</title>
    </Helmet>

    <div >
      <EditCanvas {...props}/>
      {/* <Pdfkit className='pt3 ph3 pb4'/> */}
    </div>
  </div>
)

export default connect(
  'selectIpfsProvider',
  'selectIpfsConnected',
  'doUpdateHash',
  'doFilesDelete',
  'doFilesMove',
  'doFilesWrite',
  'doFilesAddPath',
  'doFilesDownloadLink',
  'doFilesMakeDir',
  'doFilesFetch',
  'doFilesNavigateTo',
  'doFilesUpdateSorting',
  'selectFiles',
  'selectGatewayUrl',
  'selectFilesPathFromHash',
  'selectFilesSorting', translate('bills')(PeersPage)
)
