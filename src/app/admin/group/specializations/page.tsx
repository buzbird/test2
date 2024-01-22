import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Create from "@/app/components/modals/group/specialization/create"
import Update from "@/app/components/modals/group/specialization/update"
async function getSpecialization() {
  const session = await getServerSession(authOptions)
  const users = await fetch(process.env.API +"/api/admin/group/specializations",{
      method:'POST',
      body: JSON.stringify({email: session?.user?.email}),
  })
  const data = await users.json()
  console.log(data.data)
  return (
        <>
        {data.data.specializations.map((specialization => {return (
           <><tr>
            <td>{specialization.specializations_id}</td>
            <td>{specialization.specializations_name}</td>
            <td><Update specializations_id={specialization.specializations_id} specializations_name={specialization.specializations_name}/></td>
          </tr></>)
        }))}
        </>
      )  
}
const Specialization = async() => {
  const specialization = await getSpecialization()
  return (
    <div>
      специальности
      <><Create/></>
      <table >
            <thead>
                <tr>
                    <th>Шифр</th>
                    <th>Наименование</th>
                </tr>
            </thead>
            
            <tbody>
            {specialization}
            </tbody>
      </table>
    </div>
  )
}

export default Specialization