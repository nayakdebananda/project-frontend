export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Mock API",
  description:
    "Quickly simulate the behavior of your REST full backend server.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title:"Projects",
      href:'/projects'
    },
    {
      title:"Docs",
      href:'/docs'
    },
  ],
  links: {
    twitter: "/",
    github: "/",
    docs: "/docs",
  },
}
