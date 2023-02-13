import { FC } from 'react'

import { Badge } from '@/components/ui/badge'

interface iWork {
  name: string
  date: string
  description: string
  image?: string
  status: 'deprecated' | 'active' | 'in progress'
  link?: string
  technologies: string[]
}

const Works: FC = () => {
  const works: iWork[] = [
    {
      name: 'Op-onai',
      date: 'December 2022 - January 2023',
      description:
        'LMS for collaborative coding. Invite your students and start coding live with teacher, peer-to-peer or in group work. Create your own course with quizzes, coding assignments, and Markdown or Notion integration. Chat with your students in Forum annd Group chats. Deprecated because of SISP: It was a Solution In Search of a Problem.',
      status: 'deprecated',
      link: 'https://op-onai.kz',
      technologies: ['bruh']
    }
  ]
  const WorkItems = works.map((work, i) => (
    <div key={i}>
      <div>{work.name}</div>
      <div>{work.date}</div>
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
      <a className='' href={work.link}>
        Link
      </a>
    </div>
  ))
  return <>{WorkItems}</>
}

export default Works
