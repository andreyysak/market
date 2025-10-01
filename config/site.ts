export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Market",
  description: "Discover technical products.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Catalog",
      href: "/catalog",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Information",
      href: "/information",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  catalogItems: [
    { title: 'Processors', href: '/catalog/processors' },
    { title: 'Monitors', href: '/catalog/monitors' },
    { title: 'Cases', href: '/catalog/cases' },
    { title: 'CPU', href: '/catalog/cpu' },
    { title: 'Video Cards', href: '/catalog/video-cards' },
    { title: 'Motherboards', href: '/catalog/motherboards' },
  ],
};
