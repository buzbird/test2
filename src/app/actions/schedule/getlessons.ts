"use server";
import { revalidatePath } from "next/cache";

export const getLessons = async(date:any,group_id:any,lesson_number:any) =>{
    revalidatePath('/schedule')
    const data  = await fetch(process.env.API +"/api/schedule/getLessons/",{
        method:'POST',
        body: JSON.stringify({date:date,group_id:group_id,lesson_number:lesson_number}),
    })
    const lessons = await data.json()
    revalidatePath('/schedule')
    return lessons
}
export const DeleteLessons = async(id:any) =>{
    revalidatePath('/schedule')
    const data  = await fetch(process.env.API +"/api/schedule/getLessons/",{
        method:'DELETE',
        body: JSON.stringify({id:id}),
    })
    console.log(data)
    revalidatePath('/schedule')
}