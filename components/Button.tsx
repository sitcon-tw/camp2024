export default function Button({ children, className, href, target, ...props }: {
  children: React.ReactNode,
  href?: string,
  target?: string,
  className?: string
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return <a
    className={`px-4 py-2 bg-[#01405D] hover:bg-[#013249] rounded-full flex gap-2 items-center leading-4 cursor-pointer ${className}`}
    href={href}
    {...props}
  >
    {children}
  </a>
}