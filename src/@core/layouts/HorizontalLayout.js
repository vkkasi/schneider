// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { handleMenuHidden, handleContentWidth } from '@store/layout'

// ** Third Party Components
import classnames from 'classnames'
import { ArrowUp } from 'react-feather'

// ** Reactstrap Imports
import { Navbar, NavItem, Button } from 'reactstrap'

// ** Configs
import themeConfig from '@configs/themeConfig'

// ** Custom Components

import Customizer from '@components/customizer'
import ScrollToTop from '@components/scrolltop'
import NavbarComponent from './components/navbar'
import FooterComponent from './components/footer'
import MenuComponent from './components/menu/horizontal-menu'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'
import { useSkin } from '@hooks/useSkin'
import { useLayout } from '@hooks/useLayout'
import { useNavbarType } from '@hooks/useNavbarType'
import { useFooterType } from '@hooks/useFooterType'
import { useNavbarColor } from '@hooks/useNavbarColor'

// ** Styles
import '@styles/base/core/menu/menu-types/horizontal-menu.scss'

const HorizontalLayout = props => {
  // ** Props
  const { navbar, menuData, footer, children, menu } = props

  // ** Hooks
  const { skin, setSkin } = useSkin()
  const [isRtl, setIsRtl] = useRTL()
  const { navbarType, setNavbarType } = useNavbarType()
  const { footerType, setFooterType } = useFooterType()
  const { navbarColor, setNavbarColor } = useNavbarColor()
  const { layout, setLayout, setLastLayout } = useLayout()

  // ** States
  const [isMounted, setIsMounted] = useState(false)
  const [navbarScrolled, setNavbarScrolled] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const layoutStore = useSelector(state => state.layout)

  // ** Vars
  const contentWidth = layoutStore.contentWidth
  const isHidden = layoutStore.menuHidden

  // ** Handles Content Width
  const setContentWidth = val => dispatch(handleContentWidth(val))

  // ** Handles Content Width
  const setIsHidden = val => dispatch(handleMenuHidden(val))

  // ** UseEffect Cleanup
  const cleanup = () => {
    setIsMounted(false)
    setNavbarScrolled(false)
  }

  const onClickFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true)
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 65 && navbarScrolled === false) {
        setNavbarScrolled(true)
      }
      if (window.pageYOffset < 65) {
        setNavbarScrolled(false)
      }
    })
    return () => cleanup()
  }, [])

  // ** Vars
  const footerClasses = {
    static: 'footer-static',
    sticky: 'footer-fixed',
    hidden: 'footer-hidden'
  }

  const navbarWrapperClasses = {
    floating: 'navbar-floating',
    sticky: 'navbar-sticky',
    static: 'navbar-static'
  }

  const navbarClasses = {
    floating: contentWidth === 'boxed' ? 'floating-nav container-xxl' : 'floating-nav',
    sticky: 'fixed-top'
  }

  const bgColorCondition = navbarColor !== '' && navbarColor !== 'light' && navbarColor !== 'white'

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={classnames(
        `wrapper horizontal-layout horizontal-menu ${navbarWrapperClasses[navbarType] || 'navbar-floating'} ${
          footerClasses[footerType] || 'footer-static'
        } menu-expanded`
      )}
      {...(isHidden ? { 'data-col': '1-column' } : {})}
    >
      <Navbar
        expand='lg'
        container={false}
        className={classnames('header-navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center', {
          'navbar-scrolled': navbarScrolled
        })}
      >
        {!navbar && (
          <div className='navbar-header d-xl-block d-none'>
            <ul className='nav navbar-nav'>
              <NavItem>
                <Link to='/' className='navbar-brand'>
                  <span className='brand-logo'>
                    <img src={themeConfig.app.appLogoImage} alt='logo' />
                  </span>
                  <h2 className='brand-text mb-0'>{themeConfig.app.appName}</h2>
                </Link>
              </NavItem>
            </ul>
          </div>
        )}

        <div className='navbar-container d-flex content'>
          {navbar ? navbar({ skin, setSkin }) : <NavbarComponent skin={skin} setSkin={setSkin} />}
        </div>
      </Navbar>
      {!isHidden ? (
        <div className='horizontal-menu-wrapper'>
          <Navbar
            tag='div'
            expand='sm'
            light={skin !== 'dark'}
            dark={skin === 'dark' || bgColorCondition}
            className={classnames(`header-navbar navbar-horizontal navbar-shadow menu-border`, {
              [navbarClasses[navbarType]]: navbarType !== 'static',
              'floating-nav': (!navbarClasses[navbarType] && navbarType !== 'static') || navbarType === 'floating'
            })}
          >
            {menu ? menu({ menuData, routerProps, currentActiveItem }) : <MenuComponent menuData={menuData} />}
            <div className='buttons'>
              <a
                href="https://ecostruxurebuildingdemo.com/#%2FServer%201%2FEcostruxure%20Demo%2FGlobal%20Demo%2FResponsive%20Web%20Panels%2FMobile%20Panel%20Sizes%2FWorld%20Locations%20Mobile"
                target='_blank'
                rel='noopener noreferrer'>
                <Button size='sm'>
                  <span className='icon'><img src='/images/icons/bms_link.jpg' alt='bms_link'/></span>EBO 바로가기
                </Button>
              </a>
              <a
                href="https://app.ecostruxureit.com/manage/deep_link?demo=true"
                target='_blank'
                rel='noopener noreferrer'>
                <Button size='sm'>
                  <span className='icon'><img src='/images/icons/fms_link.jpg' alt='fms_link'/></span>ITE 바로가기
                </Button>
              </a>
              <a
                href="https://demo.ita.ecostruxureit.com/web/inventory"
                target='_blank'
                rel='noopener noreferrer'>
                <Button size='sm'>
                  <span className='icon'><img src='/images/icons/fms_link.jpg' alt='bms_link'/></span>ITA 바로가기
                </Button>
              </a>
              <a
                href="https://www.pmedemo.biz/web/"
                target='_blank'
                rel='noopener noreferrer'>
                <Button size='sm'>
                  <span className='icon'><img src='/images/icons/pme_link.jpg' alt='pme_link'/></span>PME 바로가기
                </Button>
              </a>
              <Button size='sm' onClick={onClickFullScreen}>
                <span className='icon'><img src='/images/icons/full_screen.jpg' alt='full_screen'/></span>
              </Button>
            </div>
          </Navbar>
        </div>
      ) : null}

      {children}
      {themeConfig.layout.customizer === true ? (
        <Customizer
          skin={skin}
          isRtl={isRtl}
          layout={layout}
          setSkin={setSkin}
          setIsRtl={setIsRtl}
          isHidden={isHidden}
          setLayout={setLayout}
          footerType={footerType}
          navbarType={navbarType}
          setIsHidden={setIsHidden}
          themeConfig={themeConfig}
          navbarColor={navbarColor}
          contentWidth={contentWidth}
          setFooterType={setFooterType}
          setNavbarType={setNavbarType}
          setLastLayout={setLastLayout}
          setNavbarColor={setNavbarColor}
          setContentWidth={setContentWidth}
        />
      ) : null}
      <footer
        className={classnames(`footer footer-light ${footerClasses[footerType] || 'footer-static'}`, {
          'd-none': footerType === 'hidden'
        })}
      >
        {footer ? footer : <FooterComponent footerType={footerType} footerClasses={footerClasses} />}
      </footer>
      

      {themeConfig.layout.scrollTop === true ? (
        <div className='scroll-to-top'>
          <ScrollToTop showOffset={300} className='scroll-top d-block'>
            <Button className='btn-icon' color='primary'>
              <ArrowUp size={14} />
            </Button>
          </ScrollToTop>
        </div>
      ) : null}
    </div>
  )
}
export default HorizontalLayout
