import { useState, useEffect, useContext } from 'react'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// 슈나이더 view

import Tab1F from './Tab1F'
import Tab2F from './Tab2F'
import Tab3F from './Tab3F'
import Tab4F from './Tab4F'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

// ** Styles
import '@styles/react/apps/app-users.scss'

import RealtimeAlarm from '../../widget/RealtimeAlarm'


const DashboardIT = () => {
  const context = useContext(ThemeColors)

    // ** States & Vars
  const [activeTab, setActiveTab] = useState('1')

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)

  const { colors } = useContext(ThemeColors), trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Nav pills>
        <NavItem>
          <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
            <span className='align-middle d-none d-sm-block'>1F</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
            <span className='align-middle d-none d-sm-block'>2F</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === '3'} onClick={() => toggle('3')}>
            <span className='align-middle d-none d-sm-block'>3F</span>
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          {activeTab === '1' && <Tab1F />}
        </TabPane>
        <TabPane tabId='2'>
          {activeTab === '2' && <Tab3F />}
        </TabPane>
        <TabPane tabId='3'>
          {activeTab === '3' && <Tab4F />}
        </TabPane>
      </TabContent>
      <Row>
        <Col>
          <RealtimeAlarm cate={'IT'}></RealtimeAlarm>
        </Col>
      </Row>
    </div>
  )
}

export default DashboardIT
