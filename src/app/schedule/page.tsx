import React from 'react'
import Link from 'next/link'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import ScheduleTable from '../components/Modals/schedule/Schedule'

const Schedule = async() => {
  const grouplist = await fetch(process.env.API +"/api/schedule/grouplist",{
        method:'POST',
        body: JSON.stringify({teacher_id: 1}),
    })
    const data = await grouplist.json()
    return (
      <>
      <div>
        <ScheduleTable  data={data}/>
      </div>
      </>
    )
}

export default Schedule