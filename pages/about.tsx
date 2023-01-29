import Image from 'next/image'
import { FC } from 'react'

import SkillsAll from '@/components/Skills'

const About: FC = () => {
  return (
    <div className='pt-40 relative'>
      <Image
        className='w-48 absolute top-[4rem] left-[30rem] z-[-1]'
        src='/me.jpg'
        width={1000}
        height={1000}
        alt='Burkit Karlibay'
      />
      <h1 className='text-[8rem] font-domain'>About Me</h1>
      <p>
        I like many stuff: Photography, Cinematography, programming, FOSS,
        designs, interior designs, mentoring, management, marketing, sales,
        economics...
      </p>
      <p>
        For now, I&apos;m developing a LMS for collaborative programming.
        Whether I will succeed or you&apos;ll see in May 2023. See ya.
      </p>
      <div className='mt-32'>
        <SkillsAll />
      </div>
    </div>
  )
}
export default About
