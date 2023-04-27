export default function SectionTitle({ children, id }: { children: React.ReactNode, id: string }) {
  return <h1 className="text-4xl font-bold text-[#FFF] text-center my-4 py-4 border-b border-[#FFF] scroll-mt-32" id={id}>
    {children}
  </h1>
}