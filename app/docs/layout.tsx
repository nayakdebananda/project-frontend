import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: {
    default: `Documentation`,
    template: `%s - Documentation`,
  },
  description: "Read docs for more information",
}
interface LayoutProps {
  children: React.ReactNode,
}
function layout({children}:LayoutProps) {
  return (
    <div>{children}</div>
  )
}

export default layout