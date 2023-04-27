function NavItem({ href, children }: {
  href: string,
  children: React.ReactNode
}) {
  return <a href={href} className="text-white hover:text-[#F9A8D4] font-bold">{children}</a>
}
export default function Nav() {
  return (
    <div className="container sticky top-16 z-50">
      <nav className="bg-[#7A44AF] bg-opacity-80 backdrop-blur-xl rounded-full py-4 px-6 mt-8 flex justify-between shadow-2xl">
        <div>
          SITCON Camp 2023
        </div>
        <div className="flex space-x-4">
          <NavItem href='#application-info'>報名資訊</NavItem>
          <NavItem href='#events'>課程活動</NavItem>
          <NavItem href='#'>過往紀錄</NavItem>
          <NavItem href='#'>行為準則</NavItem>
          <NavItem href='#'>籌備團隊</NavItem>
        </div>
      </nav>
    </div>
  )

}