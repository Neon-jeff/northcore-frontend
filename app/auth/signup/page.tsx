import { SignUpForm } from '@/components/forms/auth'
import AuthLayout from '@/components/layout/auth'
import React from 'react'

const SignupPage = () => {
  return (
    <div className='place-content-center h-screen'>
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </div>
  )
}

export default SignupPage