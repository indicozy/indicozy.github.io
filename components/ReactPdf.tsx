import { FC, ReactNode } from 'react'

import {
  Document,
  Font,
  Link,
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
                  Fullstack Engineer
                </Text>
                <Text style={{ fontSize: 8 }}>
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    src='mailto:indicozy@gmail.com'
                  >
                    indicozy@gmail.com
                  </Link>
                  |{' '}
                  <Link
                    style={{ color: 'black', textDecoration: 'none' }}
                    src='https://github.com/indicozy'
                  >
                    GitHub: indicozy
                  </Link>
                </Text>
                <Text style={{ fontSize: 8 }}>
                  <Link
                    style={{ color: 'black', textDecoration: 'underline' }}
                    src='https://indicozy.vercel.app'
                  >
                    indicozy.vercel.app
                  </Link>
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
              style={{ display: 'flex', flexDirection: 'row', marginTop: 24 }}
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
                  <TextSection>
                    {`BELEARN (02.2023 - Present)
`}

                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'underline',
                        paddingBottom: 1
                      }}
                      src='https://op-onai.kz'
                    >
                      op-onai.kz
                    </Link>
                    {`

                  Social Network for Active Learners with Personal Recommendation System.
                  Typescript, tRPC, Next, React, neo4j, Algolia, Vercel`}
                  </TextSection>
                  <Br />
                  <TextSection>
                    {`OP-ONAI (September 2022 - January 2023)
`}
                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'underline',
                        paddingBottom: 1
                      }}
                      src='https://old.op-onai.kz'
                    >
                      old.op-onai.kz
                    </Link>

                    {`

                  Live Collaborative Learning for IT Schools.
                  Typescript, tRPC, Next, React, prismaORM, MongoDB, zustand, socket.io, Mantine, LevelDB`}
                  </TextSection>
                  <Br />
                  <TextSection>
                    {`PERSONAL BLOG (January 2022 - Present)
`}
                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'underline',
                        paddingBottom: 1
                      }}
                      src='https://indicozy.vercel.app'
                    >
                      indicozy.vercel.app
                    </Link>
                    {`

                  My personal space for notes, activity and blog.
                  NotionCMS, Next, React, Tailwind, Vercel, Typescript`}
                  </TextSection>
                  <Br />
                  <TextSection>
                    {`TINDERBOT (August 2022 - September 2022)
`}
                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'underline',
                        paddingBottom: 1
                      }}
                      src='https://github.com/indicozy/cbtb'
                    >
                      github.com/indicozy/cbtb
                    </Link>
                    {`


                  Ebay-like Marketplace and Tinder for University.
                  800 users and 80,000KZT in sales in 1 week`}
                  </TextSection>
                  <Br />
                  <TextSection>
                    {`WMTM (January 2021 - February 2021 )
`}
                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'underline',
                        paddingBottom: 1
                      }}
                      src='https://github.com/indicozy/wmtm'
                    >
                      github.com/indicozy/wmtm
                    </Link>
                    {`

                  WM-agnostic Theme Manager for Linux in Bash.`}
                  </TextSection>
                </ViewSection>
                <ViewSection sidebar='experience'>
                  <TextSection>
                    {`JEZGRADS FOUNDATION (November 2019 - Present)
                      Head of Digitization and Design

                      Raised 78 million tenge (~$180,000) for public funding, gathered 500 people into 6 events, collected information of every participant, developed website, WhatsApp bot, designed logo, instagram posts and merch.`}
                  </TextSection>
                  <Br />
                  {/* <TextSection>{`ACM CODEW (January 2022 - January 2022)
                  Frontend Developer, codew.kz

                  Designed and developed website for Code-Women, ACM Student Chapter. Gathered 200 leads for event.`}</TextSection> */}

                  <TextSection>{`Databar.ai (December 2022 - February 2022)
                  Frontend Developer

                  Migrated React codebase to Next.js. Improved client performance, SEO, First Contentful Paint.`}</TextSection>
                  <Br />
                  <TextSection>{`MENTORSHIP (March 2021 - Present)
                  Personal Mentor

                  Personally mentored about 50 students on programming basics, frontend, backend and devops. 85% of them finished their projects and 60% found a job in IT.`}</TextSection>
                  <Br />
                  <TextSection>
                    {`QWANT (May 2021 - December 2021)
                    Marketing and Sales Manager

                    As being responsible for all B2C sales, I have marketed and sold courses for 300 paying customers in 4 months. I developed telegram bot for marketing and sales funnel, which gathered 50 clients, developed website for sales, created design system for instagram posts, mentored web development and linux administration. `}
                  </TextSection>
                  <Br />
                  <TextSection>{`ACM CODEW (January 2022 - January 2022)
                  Frontend Developer, codew.kz`}</TextSection>
                  {/* <TextSection>
                    {`FREELANCING (May 2020 - May 2021)
                    Developer`}
                  </TextSection> */}
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

                    USER/CUSTOMER EXPERIENCE (Beginner):
                    User Research, Market Research, Usability Testing

                    PRODUCT/PROJECT MANAGEMENT (Beginner)
                    Creating Startups, Design Sprints, User Story Mapping, Release Planning, Agile
                    Tools: Miro, Jira, Trello, Asana, Notion, YCombinator
                    `}
                  </TextSection>
                </ViewSection>
                <ViewSection sidebar='open--source'>
                  <TextSection>
                    {`VERCEL/NEXT.JS
                    Example code for documentation
`}
                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'underline',
                        paddingBottom: 1
                      }}
                      src='https://github.com/vercel/next.js'
                    >
                      github.com/vercel/next.js
                    </Link>
                    {`

                    Updated example code for integration of NextJS with Headless Wordpress through GraphQL.`}
                  </TextSection>
                  <Br />
                  <TextSection>
                    {`PUPILFIRST/PUPILFIRST
                    Internationalization (i18n), documentation,
                    bug fixes, development
`}
                    <Link
                      style={{
                        color: 'black',
                        textDecoration: 'underline',
                        paddingBottom: 1
                      }}
                      src='https://github.com/pupilfirst/pupilfirst'
                    >
                      github.com/pupilfirst/pupilfirst
                    </Link>
                    {`

                    Imporved internationalization (i18n) from ~10% to 100%. Added russian localization. Fixed bugs on Rescript and Ruby-on-Rails. Added markdown input and rendering for quiz questions.`}
                  </TextSection>
                  <Br />
                  <TextSection>
                    {`OTHERS
                    Issues & Discussions

                    Reported bugs, asked for feature requests and discussed in Prisma, DiceBear, Searchkit, Vanilla-OS, uiwjs, Mantine and Faker-JS.`}
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
