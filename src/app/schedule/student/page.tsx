import React from 'react'
import Link from 'next/link'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import ScheduleStudent from '@/app/components/Modals/schedule/student/Schedule'


const Schedule = async() => {
    const grouplist = await fetch(process.env.API +"/api/schedule/grouplist",{
        method:'POST',
        body: JSON.stringify({teacher_id: 1}),
    })
    const data = await grouplist.json()
    return (
      <>
      <div>
        <ScheduleStudent data={data}/>
      </div>
      </>
    )
}

export default Schedule