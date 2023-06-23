"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger
} from '@/components/ui/sheet'
import { Plus } from 'lucide-react'
import Link from "next/link"

import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'
import { useRouter } from 'next/navigation'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

function ProjectsPage() {
  const [user, loading,] = useAuthState(auth)
  const [projects, setProjects] = useState([])
  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const axios = useAxiosPrivate()
  const router = useRouter()

  useEffect(() => {
    (async () => {
      const response = await axios.get('/project')
      if(response?.status===200)
        setProjects(response.data)
    })()
  }, [user])

  async function postData(){
    if(!name || !description) return
    const data = await axios.post('/project',{name,description})
    console.log(data)
    
    if(data.status === 200) setProjects(data.data)
    
    
  }
  return (

    <Sheet>
      <div className=' m-3 grid h-max gap-4 align-middle md:grid-cols-2 lg:grid-cols-4'>
        <SheetTrigger>
          <Card className='flex h-44 items-center justify-center bg-lime-200 p-4 text-xl font-bold text-black  hover:bg-lime-50'>

            <Plus className="mr-1 block h-10 w-10 align-baseline" />New Project
          </Card>
        </SheetTrigger>
        {projects.map((data,index)=>{
          return <ProjectCard data={data} key={`key-${index}`} sno={index+1} /> 
        })}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create project</SheetTitle>
            <SheetDescription>
              Please fill out all mandatory fields.
              Click save when you are done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-left">
                Title
              </Label>
              <Input id="title" placeholder="Project 101" value={name} className="col-span-3" onChange={e=>{setName(e.target.value)}} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input id="description" placeholder='Project short description' value={description} className="col-span-3" onChange={e=>{setDescription(e.target.value)}} />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button  onClick={postData}>Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </div>
    </Sheet>
  )
}

type ProjectCardProps = {
  data:{
    name:String,
    description:String,
    _id:String
  },
  sno:Number
}


function ProjectCard({data,sno}:ProjectCardProps) {
  return (
    <Link href={`/projects/${data._id}`}>
    <Card className='h-44 p-4 hover:bg-secondary'>
      <Label className='block pr-2 text-5xl  text-lime-400 dark:text-lime-200'>{`${sno}`}</Label>
      <Label className='mr-8 text-2xl'>{data.name}</Label>
      <h2 className='mt-2 truncate text-base font-medium'>{data.description}</h2>
    </Card>
    </Link>
  )
}

export default ProjectsPage