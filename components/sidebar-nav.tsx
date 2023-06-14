"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const pathname = usePathname()

    return (
        <nav className="grid max-h-[70vh] grid-flow-col flex-col overflow-y-scroll md:flex md:w-64">
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        buttonVariants({ variant: "link" }),
                        pathname === item.href
                            ? "text-primary"
                            : "text-muted-foreground hover:underline",
                        "block justify-start"
                    )}
                >
                    {item.title}


                </Link>
            ))}

        </nav>
    )
}



