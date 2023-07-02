import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { notFound, redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import type { Database } from '@/lib/database.types'

const Dashboard = async () => {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }


  return (
    <div>Welcome back, {session.user.email}</div>
  )
}

export default Dashboard;