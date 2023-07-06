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
  SelectGroup,
  SelectItem,
  SelectLabel,
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
import useClipboard from '@/app/hooks/useClipboard'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'


interface ParamsType {
  params: {
    id: String
  }
}

interface Response {
  url: String,
  method: String
}


function ProjectDetailsPage({ params }: ParamsType) {
  console.log(params)

  const axios = useAxiosPrivate()
  const [user, loading, error] = useAuthState(auth)
  const [url, setUrl] = useState<Response[]>([])
  const [response, setResponse] = useState()
  const [endpoint, setEndpoint] = useState("/api/")
  const router = useRouter()
  const [c, copy] = useClipboard()
  const [method, setMethod] = useState("GET")
  const [route, setRoute] = useState("")
  const [status, setStatus] = useState("200")
  const [responseData, setResponseData] = useState("")
  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(`/project/links/${params.id}`)
        setUrl(response.data)
      })()
    } catch (error) {
      console.log(error)
    }
    console.log("hello")

  }, [user])
  async function postData() {
    if(!responseData || !status || !method || !route) return
    const data = {response:responseData,statusCode:status,url:route,method:method}
    const res = await axios.post(`/project/${params.id}`,JSON.stringify(data))
    console.log(res);
  }

  return (
    <>
      <Sheet>
        <div className="flex flex-row">
          <div className="flex w-96 flex-col">
            <div className="container mx-auto mt-4 flex flex-row justify-between align-middle">
              <h1 className="inline-block text-xl"><strong>ToDo api</strong></h1>
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
                    onClick={() => {
                      setEndpoint(`/api/${params.id}${obj.url}`)
                      axios.get(`/project/${params.id}?links=${obj.url}&method=${obj.method}`).then(data => setResponse(data.data[0].response))
                    }}
                  >
                    <Method text={obj.method} />{obj.url}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="mt-4 flex w-full flex-col gap-4 px-5">
            <Button variant='outline' className="justify-start px-4 py-3 font-mono text-sm active:bg-green-700" onClick={() => copy(endpoint)}><FaRegCopy className="mr-5" /> <Method text='PATCH' /> {endpoint}</Button>
            <ScrollArea className="h-[70vh]  rounded-md border-2 p-5">
              <pre className='min-h-full max-w-[70vw] overflow-y-scroll '>
                {
                  JSON.stringify(response, null, 2)
                }
              </pre>

            </ScrollArea>
          </div>
        </div>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>create/modify a new resource</SheetTitle>
            <SheetDescription>Remember : matching resource will be modified</SheetDescription>
          </SheetHeader>
          <Input type='url' className='mt-5' placeholder='/endpoint' onChange={e => { setRoute(e.target.value) }} />
          <Select onValueChange={value => { setMethod(value) }}>
            <SelectTrigger className="mt-5">
              <SelectValue placeholder="Select a http method" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>methods</SelectLabel>
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
                <SelectItem value="UPDATE">UPDATE</SelectItem>
                <SelectItem value="DELETE">DELETE</SelectItem>
                <SelectItem value="PATCH">PATCH</SelectItem>
                <SelectItem value="PUT">PUT</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input type='text' className='mt-5' placeholder='status code (200)' onChange={e => setStatus(e.target.value)} />
          <Textarea className='mt-5' placeholder='JSON response' onChange={e => setResponseData(e.target.value)} />
          <Button variant='secondary' className="mt-5" onClick={postData}>Submit</Button>
        </SheetContent>
      </Sheet>
    </>
  )
}


export default ProjectDetailsPage
