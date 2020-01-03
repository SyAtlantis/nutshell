import { createRouteBundle } from 'redux-bundler'
import StatusPage from '../status/LoadableStatusPage'
import FilesPage from '../files/LoadableFilesPage'
import BillsPage from '../bills/LoadableBillsPage'
// import { ExplorePage } from 'ipld-explorer-components'
import PeersPage from '../peers/LoadablePeersPage'
import SettingsPage from '../settings/LoadableSettingsPage'
import AnalyticsPage from '../settings/AnalyticsPage'
import WelcomePage from '../welcome/LoadableWelcomePage'

export default createRouteBundle({
  // '/explore': StartExploringPage,
  // '/explore*': ExplorePage,
  '/files*': FilesPage,
  '/bills': BillsPage,
  '/peers': PeersPage,
  '/settings': SettingsPage,
  '/settings/analytics': AnalyticsPage,
  '/welcome': WelcomePage,
  '/': StatusPage,
  '': StatusPage
}, { routeInfoSelector: 'selectHash' })
