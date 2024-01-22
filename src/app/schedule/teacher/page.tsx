import React from 'react'
import Link from 'next/link'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import ScheduleTeacher from '@/app/components/Modals/schedule/teacher/Schedule'

const Schedule = async() => {

    return (
      <>
      <div>
        <ScheduleTeacher teacher_id={1}/>
      </div>
      </>
    )
}

export default Schedule