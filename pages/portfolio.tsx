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
      technologies: [
        'MongoDB',
        'LiveBlocks',
        'Websockets',
        'NextJS',
        'Typescript',
        'React',
        'Javascript',
        'LevelDB',
        'Docker',
        'Ruby',
        'Sinatra',
        'Zustand',
        'MantineUI',
        'axios',
        'formik',
        'prismaORM'
      ],
      image: '/portfolio/op-onai.png'
    },

    {
      name: 'UniConnectBot - social bot for my university',
      date: 'August 2022 - September 2022',
      description:
        '1. Kaspi Shop-like marketplace for students to buy and sell their products and services. 2. Tinder-like app for matching. Made sales for 80,000KZT in 2 weeks and got 800 Users in one month. Deprecation reason: no profit',
      status: 'deprecated',
      link: 'https://github.com/indicozy/cbtb',
      technologies: [
        'Python',
        'python-telegram-bot',
        'SQLAlchemy',
        'PostgreSQL'
      ]
    }
  ]
  const WorkItems = works.map((work, i) => (
    <div key={i} className='flex flex-row flex-nowrap my-8'>
      {work.image ? (
        <div className='min-w-[24rem] flex items-center justify-start'>
          <Image
            src={work.image}
            width={600}
            height={600}
            alt={work.alt || 'alt'}
          />
        </div>
      ) : (
        <></>
      )}
      <div
        className={`${
          work.image ? 'border-l pl-8 ml-8' : ''
        }  flex flex-col justify-center h-full py-12`}
      >
        <div>
          <div className='text-4xl'>{work.name}</div>
          <div className='text-sm mb-4'>{work.date}</div>
          <div className='flex space-x-2 flex-wrap'>
            {work.technologies.map((tech, indexTech) => (
              <Badge rounded='full' key={indexTech}>
                {tech}
              </Badge>
            ))}
          </div>
          <div>{work.description}</div>
          <div>
            Status: <span className='font-bold text-lg'>{work.status}</span>
          </div>
          <div className='mt-2'>
            <a
              className='px-6 py-2 border border-zinc-300 dark:border-zinc-500 rounded-lg bg-zinc-50 dark:bg-zinc-700'
              href={work.link}
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  ))
  return <>{WorkItems}</>
}

export default Works
