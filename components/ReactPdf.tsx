import React, { FC, ReactNode } from 'react'

import {
  Document,
  Font,
  PDFViewer,
  Page,
  Text,
  View
} from '@react-pdf/renderer'

Font.register({
  family: 'TT Runs',
  fonts: [
    { src: '/fonts/runs/Thin.ttf', fontWeight: 100 }, // font-style: normal, font-weight: normal
    { src: '/fonts/runs/ExtraLight.ttf', fontWeight: 200 }, // font-style: normal, font-weight: normal
    { src: '/fonts/runs/Light.ttf', fontWeight: 300 }, // font-style: normal, font-weight: normal
    { src: '/fonts/runs/Regular.ttf', fontWeight: 400 }, // font-style: normal, font-weight: normal
    { src: '/fonts/runs/Medium.ttf', fontWeight: 500 }, // font-style: normal, font-weight: normal
    { src: '/fonts/runs/DemiBold.ttf', fontWeight: 600 }, // font-style: normal, font-weight: normal
    { src: '/fonts/runs/Bold.ttf', fontWeight: 700 }, // font-style: normal, font-weight: normal
    { src: '/fonts/runs/ExtraBold.ttf', fontWeight: 800 }, // font-style: normal, font-weight: normal
    { src: '/fonts/runs/Black.ttf', fontWeight: 900 } // font-style: normal, font-weight: normal
  ]
})

Font.register({
  family: 'TT Norms Pro',
  fonts: [
    { src: '/fonts/norms/Thin.ttf', fontWeight: 100 }, // font-style: normal, font-weight: normal
    { src: '/fonts/norms/ExtraLight.ttf', fontWeight: 200 }, // font-style: normal, font-weight: normal
    { src: '/fonts/norms/Light.ttf', fontWeight: 300 }, // font-style: normal, font-weight: normal
    { src: '/fonts/norms/Regular.ttf', fontWeight: 400 }, // font-style: normal, font-weight: normal
    { src: '/fonts/norms/Medium.ttf', fontWeight: 500 }, // font-style: normal, font-weight: normal
    { src: '/fonts/norms/Bold.ttf', fontWeight: 700 }, // font-style: normal, font-weight: normal
    { src: '/fonts/norms/ExtraBold.ttf', fontWeight: 800 }, // font-style: normal, font-weight: normal
    { src: '/fonts/norms/Black.ttf', fontWeight: 900 } // font-style: normal, font-weight: normal
  ]
})

const ViewSection: FC<{ children: ReactNode; sidebar: string }> = ({
  children,
  sidebar
}) => {
  return (
    <View style={{ minHeight: 86, marginTop: 14 }}>
      <View>
        <Text
          style={{
            transform: 'rotate(-90deg) translate(-130px, -121px)',
            fontSize: 7,
            // fontFamily: 'TT Runs',
            textTransform: 'uppercase',
            // letterSpacing: 1.1,
            fontWeight: 600,
            textAlign: 'right'
          }}
        >
          {sidebar} {'    '} ---------
        </Text>
      </View>
      <View
        style={{
          marginLeft: 20,
          display: 'flex',
          flexDirection: 'column',
          marginRight: 20
        }}
      >
        {children}
      </View>
    </View>
  )
}

const TextSection: FC<{ children: ReactNode }> = ({ children }) => {
  return <Text style={{ fontSize: 8, lineHeight: 1.15 }}>{children}</Text>
}
const Br: FC = () => (
  <Text style={{ fontSize: 8, marginBottom: 2, marginTop: 2 }}>
    ------------------
  </Text>
)

// Create Document Component
export const MyDocument = ({ t }) => {
  return (
    <Document>
      <Page
        size='A4'
        style={{
          backgroundColor: '#ece7e1'
        }}
      >
        <View style={{ fontFamily: 'TT Norms Pro' }}>
          <View style={{ height: 0 }}>
            <Text
              style={{
                transform: 'rotate(-90deg) translate(260px, -280px)',
                fontSize: 6
              }}
            >
              2023
            </Text>
          </View>
          <View
            style={{
              marginLeft: 40,
              marginTop: 40,
              marginBottom: 40,
              marginRight: 40
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                display: 'flex',
                alignItems: 'flex-end'
              }}
            >
              <View
                style={{
                  flexBasis: 1,
                  flexGrow: 1
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: 'TT Runs',
                    lineHeight: 1,
                    marginLeft: -1.5,
                    marginRight: 10
                  }}
                >
                  {t('name')}
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    textTransform: 'uppercase',
                    fontWeight: 500
                  }}
                >
                  Frontend Engineer
                </Text>
                <Text style={{ fontSize: 8 }}>
                  indicozy@gmail.com | GitHub: indicozy
                </Text>
                <Text style={{ fontSize: 8, textDecoration: 'underline' }}>
                  indicozy.vercel.app
                </Text>
              </View>
              <View
                style={{
                  flexBasis: 1,
                  flexGrow: 1
                }}
              >
                <Text style={{ fontSize: 10 }}>
                  I am passionate about creating exceptional user experiences by
                  working with team to develop simple, impactful, and shippable
                  solutions focused on the customer.
                </Text>
              </View>
            </View>
            <View
              style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}
            >
              <View
                style={{
                  flexBasis: 1,
                  flexGrow: 1,
                  display: 'flex',
                  marginRight: 10
                }}
              >
                <ViewSection sidebar='projects'>
                  <TextSection>{`BeLearn (02.2023 - Present)
                  op-onai.kz

                  Social Network for Active Learners with Personal Recommendation System.
                  Typescript, tRPC, Next, React, neo4j, Algolia, Vercel`}</TextSection>
                  <Br />
                  <TextSection>{`Op-onai (September 2022 - January 2023)
                  old.op-onai.kz

                  Live Collaborative Learning for IT Schools.
                  Typescript, tRPC, Next, React, prismaORM, MongoDB, zustand, socket.io, Mantine, LevelDB`}</TextSection>
                  <Br />
                  <TextSection>{`Personal Blog (January 2022 - Present)
                  indicozy.vercel.app

                  My personal space for notes, activity and blog.
                  NotionCMS, Next, React, Tailwind, Vercel, Typescript`}</TextSection>
                  <Br />
                  <TextSection>{`TinderBot (August 2022 - September 2022)
                  github.com/indicozy/cbtb

                  Ebay-like Marketplace and Tinder for University.
                  800 users and 80,000KZT in sales in 1 week`}</TextSection>
                  <Br />
                  <TextSection>{`WMTM (January 2021 - February 2021 )
                    github.com/indicozy/wmtm

                  WM-agnostic Theme Manager for Linux in Bash.`}</TextSection>
                </ViewSection>
                <ViewSection sidebar='experience'>
                  <TextSection>
                    {`Jezgrads Foundation (November 2019 - Present)
                      Head of Digitization and Design

                      Raised 78 million tenge (~$180,000) for public funding, gathered 500 people into 6 events, collected information of every participant, developed website, WhatsApp bot, designed logo, instagram posts and merch.`}
                  </TextSection>
                  <Br />
                  <TextSection>{`ACM CodeW (January 2022 - January 2022)
                  Frontend Developer, codew.kz

                  Designed and developed website for Code-Women, ACM Student Chapter. Gathered 200 leads for event.`}</TextSection>
                  <Br />
                  <TextSection>{`Mentorship (March 2021 - Present)
                  Personal Mentor

                  Personally mentored about 50 students on programming basics, frontend, backend and devops.`}</TextSection>
                  <Br />
                  <TextSection>
                    {`QWANT (May 2021 - December 2021)
                    Marketing and Sales Manager

                    As being responsible for all B2C sales, I have marketed and sold courses for 300 paying customers in 4 months. I developed telegram bot for marketing and sales funnel, which gathered 50 clients, developed website for sales, created design system for instagram posts, mentored web development and linux administration. `}
                  </TextSection>
                  <Br />
                  <TextSection>
                    {`Open-Source (December 2021 - Present)

                    Contributed to Vercel, Prisma, Pupilfirst, DiceBear, Searchkit, Vanilla-OS, uiwjs, Mantine and Faker-JS.`}
                  </TextSection>
                </ViewSection>
              </View>

              <View
                style={{
                  flexBasis: 1,
                  flexGrow: 1,
                  display: 'flex',
                  marginRight: 10
                }}
              >
                <ViewSection sidebar='hard skills'>
                  <TextSection>
                    {`FRONTEND (Advanced):
                    React, Next, Typescript, Solid, Remix, Vite, Svelte,
                    TailwindCSS, HeadlessUI, Framer Motion, Zustand,
                    Redux, Jotai, ReactQuery, Axios, Storybook, Vue

                    BACKEND (Intermediate):
                    Python, Go, NodeJS, Elixir, Ruby, Rust, PrismaORM,
                    Flask, Django, ExpressJS, Rails, Sinatra, Gin, Fiber

                    DEVOPS (Intermediate):
                    Linux, Nix/NixOS, Terraform, Bash, Ansible, Docker, CI/CD, Vercel, Grafana, Zabbix, AWS, Jenkins, Git

                    DATABASES & API (Intermediate):
                    neo4j, LevelDB, MongoDB, PostgreSQL, Cassandra, ScyllaDB, Redis, ElasticSearch, tRPC, REST, GraphQL

                    LOW/HIGH FIDELITY DESIGN (Intermediate):
                    Wireframing, Sketching, Ideation, User flows, Prototyping, Design specs, Design systems,
                    Miro, Photoshop, Illustrator, Figma, Inkscape

                    User/Customer Experience (Intermediate):
                    User Research, Market Research, Usability Testing

                    PRODUCT/PROJECT MANAGEMENT (Beginner)
                    Design Sprints, User Story Mapping, Release Planning, Agile
                    Tools: Miro, Jira, Trello, Asana, Notion
                    `}
                  </TextSection>
                </ViewSection>
                <ViewSection sidebar='soft skills'>
                  <TextSection>
                    {`The experience I have gained with the various roles I have had throughout my career has given me a very well-rounded range of soft skills. As a PM, I have led cross-functional teams of 10+ designers and engineers for a number of years. I have also worked as both a designer and engineer and have the ability to empathise with both disciplines as well as understand the more technical side of product delivery.

                    -- Shape the vision and work towards a business or product
- strategy while keeping solutions simple enough to ship quickly and iteratively
- Use and understand data to back up my design solutions
- Collaborate well with others cross-functionally
- Know when to use low or high fidelity design methods
- Share my work early and often and communicate effectively
- Stay focused on the customer as the highest priority over my own opinions
- Lead teams when needed and help to align teams on solutions or mission`}
                  </TextSection>
                </ViewSection>
                <ViewSection sidebar='education'>
                  <TextSection>
                    {`NAZARBAYEV UNIVERSITY (August 2018 - May 2023)
                    BA Degree in Sociology

                    Human-Computer Interaction
                    Collaborative learning`}
                  </TextSection>
                  <Br />
                  <TextSection>
                    {`JEZKAZGAN KAZAKH-TURKISH LYCEUM
                    May 2018

                    Photography & Cinematography
                    C/C++, Python, Automation`}
                  </TextSection>
                </ViewSection>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
const Pdf = ({ t }) => {
  return (
    <PDFViewer className='w-full h-[40rem]'>
      <MyDocument t={t} />
    </PDFViewer>
  )
}

export default Pdf
