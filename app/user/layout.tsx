import UserLayout from '@/components/layout/user'
import React from 'react'

const UserAreaLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <main className='max-md:pb-10'>
        <UserLayout>
            {children}
        </UserLayout>
    </main>
  )
}

export default UserAreaLayout