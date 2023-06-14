import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger
} from '@/components/ui/sheet'
import { Plus} from 'lucide-react'
import Link from "next/link"

import React from 'react'

function ProjectsPage() {
  return (
    <Sheet>
      <div className=' m-3 grid h-max gap-4 align-middle md:grid-cols-2 lg:grid-cols-4'>
        <SheetTrigger>
          <Card className='flex h-44 items-center justify-center bg-lime-200 p-4 text-xl font-bold text-black  hover:bg-lime-50'>

            <Plus className="mr-1 block h-10 w-10 align-baseline" />New Project
          </Card>
        </SheetTrigger>
        <Link href='/hy'>
          <Card className='h-44 p-4 hover:bg-secondary'>
            <Label className='block pr-2 text-5xl text-lime-400 dark:text-lime-200'>01</Label>
            <Label className='mr-8 text-2xl'>Weather Service</Label>
            <h2 className='mt-2 truncate text-base font-medium'>Quickly get the weather service</h2>
          </Card>
        </Link>
        <Card className='h-44 p-4 hover:bg-secondary'>
          <Label className='block pr-2 text-5xl  text-lime-400 dark:text-lime-200'>02</Label>
          <Label className='mr-8 text-2xl'>Todo Service</Label>
          <h2 className='mt-2 truncate text-base font-medium'>Quickly get todo backend</h2>
        </Card>
        <Card className='h-44 p-4 hover:bg-secondary'>
          <Label className='block pr-2 text-5xl  text-lime-400 dark:text-lime-200'>03</Label>
          <Label className='mr-8 text-2xl'>Code Execution Service</Label>
          <h2 className='mt-2 truncate text-base font-medium'>Mock backend of a RCE Lorem, ipsum dolor.</h2>
        </Card>

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
              <Input id="title" placeholder="Project 101" value='' className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input id="description" placeholder='Project short description' value="" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </div>
    </Sheet>
  )
}

export default ProjectsPage