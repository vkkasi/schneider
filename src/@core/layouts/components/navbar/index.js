// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import NavbarUser from './NavbarUser'
import NavbarBookmarks from './NavbarBookmarks'

import Clock from '@src/views/schneider/common/Clock'

const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  return (
    <Fragment>
      {/* <div className='bookmark-wrapper d-flex align-items-center'>
        <NavbarBookmarks setMenuVisibility={setMenuVisibility} />
      </div> */}
      <Clock/>
      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  )
}

export default ThemeNavbar
