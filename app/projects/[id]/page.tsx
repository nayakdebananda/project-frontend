"use client"
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { auth } from '@/app/utils/firebase'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Method from "@/components/ui/method"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger
} from '@/components/ui/sheet'
import { FaPlus, FaRegCopy } from "react-icons/fa"
import JSXStyle from "styled-jsx/style"
import useAxiosPrivate from '@/app/hooks/useAxiosPrivate'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useRouter } from 'next/navigation'


interface ParamsType {
  params: {
    id: String
  }
}

interface Response {
    url: String,
    method:String
}

const data = {
  message: "success",
  name: "debananda",
  title: "login success",
}

function ProjectDetailsPage({ params }: ParamsType) {
  console.log(params)
  
  const axios = useAxiosPrivate()
  const [user,loading,error] = useAuthState(auth)
  const [url,setUrl] = useState<Response[]>([])
  const [response, setResponse] = useState()
  const router = useRouter()
  useEffect(()=>{
    try {
      (async()=>{
        const response = await axios.get(`/project/links/${params.id}`)
        setUrl(response.data)
      })()
    } catch (error) {
      console.log(error)
    }
    console.log("hello");
    
  },[user])
  return (
    <>
      <Sheet>
        <div className="flex flex-row">
          <div className="flex w-96 flex-col">
            <div className="container mx-auto mt-4 flex flex-row justify-between align-middle">
              <h1 className="inline-block text-xl"><strong>Project Name</strong></h1>
              <SheetTrigger asChild>
                <Button>
                  <FaPlus />
                </Button>
              </SheetTrigger>
            </div>
            <ScrollArea className="mt-5 h-[70vh] overscroll-contain px-2">
              <div className="space-y-1 p-2">
                {url?.map((obj, i) => (
                  <Button
                    key={`${obj.url}-${i}`}
                    variant="ghost"
                    size="sm"
                    className=" w-full justify-start font-normal"
                    onClick={()=>{
                      axios.get(`/project/${params.id}?links=${obj.url}&method=${obj.method}`).then(data=>setResponse(data.data[0].response))
                    }}
                  >
                    <Method text={obj.method}/>{obj.url}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="mt-4 flex w-full flex-col gap-4 px-5">
            <Button variant='outline' className="justify-start px-4 py-3 font-mono text-sm"><FaRegCopy className="mr-5" /> <Method text='PATCH' /> api/todo/id</Button>
            <div className="h-[70vh] rounded-md border-2 p-5">
              <div className=''>
              <pre className='inline-block overflow-scroll'>
                {
                  JSON.stringify(response, null, 2)
                }
              </pre>
              </div>
              
            </div>
          </div>
        </div>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create a new resource</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}


export default ProjectDetailsPage
