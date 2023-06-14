import Image from 'next/image'
import { FC } from 'react'

import { Badge } from '@/components/ui/badge'

interface iWork {
  name: string
  date: string
  description: string
  image?: string
  alt?: string
  status: 'deprecated' | 'active' | 'in progress' | 'finished'
  link?: string
  technologies: string[]
}

const Works: FC = () => {
  const works: iWork[] = [
    {
      name: 'ESD - Ecommerce for Web security.',
      date: 'May 2023 - Ongoing',
      description: 'Ecommerce, CRM and CMS for web security',
      status: 'in progress',
      technologies: ['TailwindCSS', 'React', 'NextJS', 'zustand', 'MantineUI'],
      image: '/portfolio/esd.png'
    },
    {
      name: 'Ecommerce for wholesale',
      date: 'May 2023 - Ongoing',
      description: 'Ecommerce, CRM and CMS for wholesale',
      status: 'in progress',
      technologies: ['TailwindCSS', 'React', 'NextJS', 'zustand', 'MantineUI'],
      image: '/portfolio/ecommerce.png'
    },
    {
      name: 'AutotechIQ - Frontend',
      date: 'January 2023 - March 2023',
      description: 'Frontend for Static site generation.',
      status: 'finished',
      link: 'https://www.autotechiq.com/',
      technologies: ['TailwindCSS', 'Svelte'],
      image: '/portfolio/autotechiq.png'
    },
    {
      name: 'EcoDeliveryKZ - Logistics & Warehouse management system',
      date: 'March 2023 - May 2023',
      description:
        'Logistics and warehouse management system for FMCG products. Integrated with 1C, prediction models for warehouses and automatic sorting of items to be shipped.',
      status: 'finished',
      technologies: [
        'PostgreSQL',
        'LiveBlocks',
        'Websockets',
        'NextJS',
        'Typescript',
        'React',
        'Javascript',
        'LevelDB',
        'Docker',
        'Zustand',
        'MantineUI',
        'axios',
        'formik',
        'prismaORM'
      ]
    },
    {
      name: 'QService',
      date: 'March 2023 - May 2023',
      description: 'Support Ticket system and lending',
      status: 'finished',
      link: 'https://qservice.kz/',
      technologies: ['TailwindCSS', 'React', 'NextJS'],
      image: '/portfolio/qservice.png'
    },
    {
      name: 'Op-onai - LMS for collaborative coding',
      date: 'August 2022 - December 2022 (pivot) - January 2023',
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
      name: 'Personal blog',
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
    },
    {
      name: 'Op-onai v2 - Social Network for Learners',
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
    },
    {
      name: 'Project Athena',
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
    },
    {
      name: 'CodeW Website',
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
    },
    {
      name: 'Telegram bot for Linnux fans',
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
    },
    {
      name: 'Qosylike - video conferencing for parties',
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
    },
    {
      name: 'WMTM - Theme Manager for Sway',
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
    },
    {
      name: 'Telegram-bot for QWANT',
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
    },
    {
      name: 'Website for SmartExport',
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
    <div key={i} className='flex flex-col md:flex-row flex-nowrap my-8'>
      {work.image ? (
        <div className='min-w-[18rem] w-full flex items-center justify-start'>
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
          work.image
            ? 'border-t mt-8 pt-8 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:pl-8 md:ml-8 border-foreground dark:border-background'
            : ''
        }  flex flex-col justify-center h-full`}
      >
        <div className='my-12'>
          <div className='text-4xl font-runs'>{work.name}</div>
          <div className='text-sm '>{work.date}</div>
          <div className='mb-4'>
            Status: <span className='font-bold text-lg'>{work.status}</span>
          </div>
          <div className='flex flex-wrap'>
            {work.technologies.map((tech, indexTech) => (
              <Badge rounded='full' key={indexTech} margin='2'>
                {tech}
              </Badge>
            ))}
          </div>
          <div className='my-4'>{work.description}</div>
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
