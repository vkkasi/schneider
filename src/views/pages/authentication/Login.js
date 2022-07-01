// ** React Imports
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'

// ** Third Party Components
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, X } from 'react-feather'

// ** Actions
import { handleLogin } from '@store/authentication'

// ** Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Utils
import { getHomeRouteForLoggedInUser } from '@utils'

// ** Reactstrap Imports
// import { Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, UncontrolledTooltip } from 'reactstrap'
import { Card, CardBody, CardTitle, CardText, Form, Label, Input, Button, FormGroup } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const ToastContent = ({ t, name, role }) => {
  name = 'schneider'
  return (
    <div className='d-flex'>
      <div className='me-1'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between'>
          <h6>{name}</h6>
          <X size={12} className='cursor-pointer' onClick={() => toast.dismiss(t.id)} />
        </div>
        <h6 className='toast-title font-weight-bold'>{name}님 반갑습니다.</h6>
      </div>
    </div>
  )
}

const defaultValues = {
  password: 'admin',
  loginEmail: 'admin@demo.com'
}

const Login = () => {
  // ** Hooks
  const { skin } = useSkin()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ability = useContext(AbilityContext)
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      useJwt
        .login({ email: data.loginEmail, password: data.password })
        .then(res => {
          const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
          dispatch(handleLogin(data))
          ability.update(res.data.userData.ability)
          navigate(getHomeRouteForLoggedInUser(data.role))
          toast(t => (
            <ToastContent t={t} role={data.role || 'admin'} name={data.fullName || data.username || 'schneider'} />
          ))
        })
        .catch(err => console.log(err))
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <div className='auth-wrapper auth-basic px-2'>
      <Card className='mb-0'>
        <CardBody>
          <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
            <img style={{width: '100%'}} src="/images/logo_login_schneider.png"/>
          </Link>
          {/* <CardTitle tag='h4' className='mb-1 text-center'>
            <img src="/images/logo_login_schneider.jpg"/>
          </CardTitle> */}
          {/* <CardText className='mb-2'>관리자를 통해 사용자 등록 후 서비스를 이용하실 수 있습니다.</CardText> */}
          <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label className='form-label' for='login-email'>
                Email
              </Label>
              <Input type='email' id='login-email' placeholder='john@example.com' autoFocus />
            </FormGroup>
            <FormGroup>
              <div className='d-flex justify-content-between'>
                <Label className='form-label' for='login-password'>
                  Password
                </Label>
                <Link to='/pages/forgot-password-v1'>
                  <small>비밀번호를 잊으셨나요?</small>
                </Link>
              </div>
              <InputPasswordToggle className='input-group-merge' id='login-password' />
            </FormGroup>
            <div className='form-check mb-1'>
                <Input type='checkbox' id='remember-me' />
                <Label className='form-check-label' for='remember-me'>
                  Remember Me
                </Label>
              </div>
            <Button.Ripple type='submit' color='success' block>
              LOGIN
            </Button.Ripple>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default Login
