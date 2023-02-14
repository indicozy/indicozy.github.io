import Image from 'next/image'
import { FC } from 'react'

import { Badge } from '@/components/ui/badge'

interface iWork {
  name: string
  date: string
  description: string
  image?: string
  alt?: string
  status: 'deprecated' | 'active' | 'in progress'
  link?: string
  technologies: string[]
}

const Works: FC = () => {
  const works: iWork[] = [
    {
      name: 'Op-onai - LMS for collaborative coding',
      date: 'December 2022 - January 2023',
      description:
        'Invite your students and start coding live with teacher, peer-to-peer or in group work. Create your own course with quizzes, coding assignments, and Markdown or Notion integration. Chat with your students in Forum annd Group chats. Deprecated because of SISP: It was a Solution In Search of a Problem.',
      status: 'deprecated',
      link: 'https://op-onai.kz',
      technologies: ['bruh'],
      image: '/portfolio/op-onai.png'
    }
  ]
  const WorkItems = works.map((work, i) => (
    <div key={i} className='flex flex-row flex-nowrap'>
      <div className='min-w-[24rem]'>
        {work.image ? (
          <Image
            src={work.image}
            width={600}
            height={600}
            alt={work.alt || 'alt'}
          />
        ) : (
          <div>Bruh</div>
        )}
      </div>
      <div>
        <div className='text-4xl'>{work.name}</div>
        <div className='text-sm'>{work.date}</div>
        <div>{work.description}</div>
        <div>Status: {work.status}</div>

        <div>
          <div>Technologies</div>
          <div className='flex space-x-2'>
            {work.technologies.map((tech, indexTech) => (
              <Badge key={indexTech}>{tech}</Badge>
            ))}
          </div>
        </div>
        <a className='px-2 py-1 text-sm border rounded-xl' href={work.link}>
          Link
        </a>
      </div>
    </div>
  ))
  return <>{WorkItems}</>
}

export default Works
