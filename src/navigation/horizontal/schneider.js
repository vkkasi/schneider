import { Home, BarChart2, Sunrise, Server, AlignLeft, Users, Circle, Map, Monitor } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: '대시보드',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
        id: 'dashboardsIntergrated',
        title: '통합',
        navLink: '/dashboard/intergrated'
      },
      {
        id: 'dashboardsInstallation',
        title: '설비',
        navLink: '/dashboard/installation'
      },
      {
        id: 'dashboardsPower',
        title: '파워',
        navLink: '/dashboard/power'
      },
//      {
//        id: 'dashboardsFacilities',
//        title: '시설',
//        navLink: '/dashboard/facilities'
//      },
      {
        id: 'dashboardsIT',
        title: 'IT',
        navLink: '/dashboard/it'
      }
    ]
  },
  {
    id: 'resources',
    title: '자원',
    navLink: '/resources/',
    icon: <Sunrise size={20} />
    // children: [
    //   {
    //     id: 'resourcesEquipment',
    //     title: '통합',
    //     navLink: '/resources/equipment'
    //   },
    //   {
    //     id: 'resourcesFacilities',
    //     title: '설비',
    //     navLink: '/resources/facilities'
    //   },
    //   {
    //     id: 'resourcesFacilities',
    //     title: '보안',
    //     navLink: '/resources/facilities'
    //   },
    //   {
    //     id: 'resourcesFacilities',
    //     title: '전력',
    //     navLink: '/resources/facilities'
    //   },
    //   {
    //     id: 'resourcesFacilities',
    //     title: 'IT',
    //     navLink: '/resources/facilities'
    //   }
    // ]
  },
  {
    id: 'alarms',
    title: '알람',
    navLink: '/alarms/',
    icon: <Users size={20} />
    // children: [
    //   {
    //     id: 'businessNotice',
    //     title: '통합',
    //     navLink: '/business/notice'
    //   },
    //   {
    //     id: 'businessAccess',
    //     title: '설비',
    //     navLink: '/business/access'
    //   },
    //   {
    //     id: 'businessSchedule',
    //     title: '보안',
    //     navLink: '/business/schedule'
    //   },
    //   {
    //     id: 'businessDaily',
    //     title: '전력',
    //     navLink: '/business/daily'
    //   },
    //   {
    //     id: 'businessManpower',
    //     title: 'IT',
    //     navLink: '/business/manpower'
    //   }
    // ]
  },
  // {
  //   id: 'gridLayout',
  //   title: '그리드 레이아웃',
  //   navLink: '/gridlayout/',
  //   icon: <Server size={20} />
  // //   // children: [
  // //   //   {
  // //   //     id: 'recordEquipment',
  // //   //     title: '통합',
  // //   //     navLink: '/record/equipment'
  // //   //   },
  // //   //   {
  // //   //     id: 'recordEvent',
  // //   //     title: '설비',
  // //   //     navLink: '/record/event'
  // //   //   },
  // //   //   {
  // //   //     id: 'recordBusiness',
  // //   //     title: '업무기록',
  // //   //     navLink: '/record/business'
  // //   //   }
  // //   // ]
  // }
  // ,
  // {
  //   id: 'platform',
  //   title: '시스템 관리',
  //   icon: <Monitor size={20} />,
  //   navLink: '/boards/platform',
  //   children: [
  //     {
  //       id: 'platformManagement',
  //       title: '사용자 관리',
  //       navLink: '/platform/manager'
  //     },
  //     {
  //       id: 'platformAuthority',
  //       title: '권한 관리',
  //       navLink: '/platform/authority'
  //     },
  //     {
  //       id: 'platformClassification',
  //       title: '분류 관리',
  //       navLink: '/platform/classification'
  //     },
  //     {
  //       id: 'platformCode',
  //       title: '코드 관리',
  //       navLink: '/platform/code'
  //     },
  //     {
  //       id: 'platformDashboard',
  //       title: '대시보드 관리',
  //       navLink: '/platform/dashboard'
  //     },
  //     {
  //       id: 'platformReport',
  //       title: '레포트 관리',
  //       navLink: '/platform/report'
  //     },
  //     {
  //       id: 'platformGadget',
  //       title: '위젯 관리',
  //       navLink: '/platform/gadget'
  //     },
  //     {
  //       id: 'platformMenu',
  //       title: '메뉴 관리',
  //       navLink: '/platform/menu'
  //     },
  //     {
  //       id: 'platformScreen',
  //       title: '화면 관리',
  //       navLink: '/platform/screen'
  //     },
  //     {
  //       id: 'platformAdaptor',
  //       title: 'Adaptor 관리',
  //       navLink: '/platform/adaptor'
  //     },
  //     {
  //       id: 'platformPolicy',
  //       title: '정책 관리',
  //       navLink: '/platform/policy'
  //     },
  //     {
  //       id: 'platformResources',
  //       title: 'API 관리',
  //       navLink: '/platform/resources'
  //     }
  //   ]
  // }
]