import Loadable from 'react-loadable'
import ComponentLoader from '../loader/ComponentLoader.js'

const LoadableBillsPage = Loadable({
  loader: () => import('./BillsPage'),
  loading: ComponentLoader
})

export default LoadableBillsPage
