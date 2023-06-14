import { SiteHeader } from '@/components/site-header'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: {
    default: `Projects`,
    template: `%s - Projects`,
  },
  description: "Your projects are listed here",
}

interface LayoutProps {
    children: React.ReactNode,
  }
function layout({children}:LayoutProps) {
  return (
    <>
    <SiteHeader />
    <div>{children}</div>
    </>
  )
}

export default layout