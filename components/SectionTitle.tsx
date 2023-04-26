export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold text-[#FFF] text-center my-4 py-4 border-b border-[#FFF]">
    {children}
  </ h1>
}