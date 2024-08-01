import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='login-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input className='form-control' type='email' name='email' placeholder='Email'/>
                                </div>
                                <div className='mt-1'>
                                    <input className='form-control' type='password' name='password' placeholder='password'/>
                                </div>
                                <div>
                                    <Link to='/forgot-password'>Forgot password</Link>
                                    <div className='mt-3 d-flex justify-content-center gap-20 align-items-center'>
                                        <button className='button border-0'>Login</button>
                                        <Link className='button signup'>SignUp</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
