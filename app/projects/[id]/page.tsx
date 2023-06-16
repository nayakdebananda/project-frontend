
import { Button } from "@/components/ui/button"
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
import { Textarea } from "@/components/ui/textarea"
import { FaPlus, FaRegCopy } from "react-icons/fa"

interface ParamsType {
  params: {
    id: String
  }
}
const playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
  "sia",
  "unstopable"
]
function ProjectDetailsPage({ params }: ParamsType) {
  console.log(params)

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
                {playlists?.map((playlist, i) => (
                  <Button
                    key={`${playlist}-${i}`}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start font-normal"
                  >
                    {playlist}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="mt-4 flex w-full flex-col gap-4 px-5">
            <Button variant='outline' className="justify-start px-4 py-3 font-mono text-sm"><FaRegCopy className="mr-5" /> <Method text='PATCH' /> api/todo/id</Button>
            <div className="grow rounded-md border-2 p-5">
              api/todo/id
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

{/* <Card className="grid h-full grid-cols-1 gap-6 p-6">
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
        </Card> */}

export default ProjectDetailsPage
