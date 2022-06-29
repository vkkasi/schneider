// ** Navigation imports
import apps from './apps'
import pages from './pages'
import others from './others'
import charts from './charts'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import formsAndTables from './forms-tables'

// Schneider 메뉴
import schneider from './schneider'

// ** Merge & Export
export default [...schneider, ...dashboards, ...apps, ...uiElements, ...formsAndTables, ...pages, ...charts]
// export default [...schneider]
