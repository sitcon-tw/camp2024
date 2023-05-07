import Link from 'next/link';
function AboutSection({ children }: { children: React.ReactNode }) {
  return (
    <section className={`mt-16 lg:flex lg:items-start gap-8 relative`}>
      {children}
    </section>
  )
}
function AboutTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold my-4 lg:min-w-[200px] lg:mt-0 block">{children}</h2>
  )
}
function AboutContent({ children }: { children: React.ReactNode }) {
  return (
    <p>{children}</p>
  )
}
export default function About() {
  return <div className="container">
    <AboutSection>
      <AboutTitle>
        關於 SITCON
      </AboutTitle>
      <AboutContent>
        SITCON 學生計算機年會是由學生自發舉辦，投身學生資訊教育與推廣開源精神的社群， 也是一個由學生主辦、學生擔任講者、以學生為主軸的資訊研討會，給學生們一個發表交流技術的舞台。 除了技術研討之外，還有許多從學生角度出發的經驗分享、專題研究成果或探討學生相關議題等等議程。
        我們也曾舉辦黑客松、工作坊，和各地學校社團舉辦聯合講座等等。
        <div className='h-3' />
        <Link href={`/teams`} className='link'> 了解更多</Link>
      </AboutContent>
    </AboutSection>
    <AboutSection>
      <AboutTitle>
        行為準則
        <br />
        Code of Conduct
      </AboutTitle>
      <AboutContent>
        SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。
        為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀社群的的 <Link href="/coc" className='link'>行為準則（Code of Conduct）</Link>，共同創造一個友善的環境。
        <div className='h-3' />
        <Link href={`/coc`} className='link'> 了解更多</Link>
      </AboutContent>
    </AboutSection>
  </div>
}