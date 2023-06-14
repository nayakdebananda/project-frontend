import { Metadata, ResolvingMetadata } from "next"
import { SidebarNav } from "@/components/sidebar-nav"
import { Card } from "@/components/ui/card"

type Props = {
  params: { id: String }
}

export async function generateMetadata({params}:Props,parent?:ResolvingMetadata):Promise<Metadata>{
  const id = params.id

  
  return {
    title:"Todo Server",
    openGraph:{
      
    }
  }
}

const sidebarNavItems = [
  {
    title: "Projects",
    href: "/projects/3",
  },
  {
    title: "Example",
    href: "/projects/examples",
  },
  {
    title: "something",
    href: "/projects/something",
  },
  {
    title: "Anything",
    href: "/projects/anything",
  },
  {
    title: "Nothing",
    href: "/projects/nothing",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-3 p-10 pb-1 md:block">
        <div className="">
          <h2 className="text-2xl font-bold tracking-tight text-lime-500 dark:text-lime-200">Todo Service</h2>
        </div>
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0">
          <Card className="">
            <SidebarNav items={sidebarNavItems} />
          </Card>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  )
}