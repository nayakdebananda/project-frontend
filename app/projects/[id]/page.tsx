
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger
} from '@/components/ui/sheet'
import { Textarea } from "@/components/ui/textarea"
import { Grid } from "lucide-react"
import * as React from "react"

interface ParamsType {
  params: {
    id: String
  }
}

function ProjectDetailsPage({ params }: ParamsType) {
  console.log(params)

  return (
    <>
      <Sheet>
        <Card className="grid h-full grid-cols-1 gap-6 p-6">
          <div>
            <Label className="mb-4 block">{params.id}</Label>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col justify-start overflow-y-scroll">
          <Textarea className="" readOnly={true} value='body Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt impedit ullam molestiae. Ipsa error asperiores quae perferendis iusto explicabo facere adipisci accusamus et est eius vitae voluptas, accusantium, quia ab.' />
          <Textarea className="" readOnly={true} value='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt impedit ullam molestiae. Ipsa error asperiores quae perferendis iusto explicabo facere adipisci accusamus et est eius vitae voluptas, accusantium, quia ab.' />
          </div>
        </Card>
      </Sheet>

    </>
  )
}



export default ProjectDetailsPage
