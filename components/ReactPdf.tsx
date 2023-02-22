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
            transform: 'rotate(-90deg) translate(50px, -120px)',
            fontSize: 7,
            // fontFamily: 'TT Runs',
            textTransform: 'uppercase',
            // letterSpacing: 1.1,
            fontWeight: 600
          }}
        >
          {sidebar}
          {'    '}
          ---------
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
  return <Text style={{ fontSize: 8, lineHeight: 1.2 }}>{children}</Text>
}
const Br: FC = () => <Text style={{ fontSize: 8 }}>------------------</Text>

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
                  indicozy@gmail.com | github: indicozy
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
                  working with design teams to develop simple, impactful, and
                  shippable solutions focused on the customer.
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
                  <TextSection>{`BeLearn (op-onai.kz, 02.2023 -)
                  Social Network for Active Learners with Personal Recommendation System.
                  Typescript, tRPC, Next, React, neo4j, Algolia, Vercel`}</TextSection>
                  <Br />
                  <TextSection>{`Op-onai (old.op-onai.kz, 09.2022 - 01.2023)
                  Live Collaborative Learning for IT Schools.
                  Typescript, tRPC, Next, React, prismaORM, MongoDB, zustand, socket.io, Mantine, LevelDB`}</TextSection>
                  <Br />
                  <TextSection>{`Personal Blog (indicozy.vercel.app, 01.2022 - )
                  My personal space for notes, activity and blog.
                  NotionCMS, Next, React, Tailwind, Vercel, Typescript`}</TextSection>
                  <Br />
                  <TextSection>{`TinderBot (github.com/indicozy/cbtb, 08.2022 - 09.2022)
                  Kaspi Market and Tinder for University.
                  800 users and 80,000KZT in sales in 1 week`}</TextSection>
                  <Br />
                  <TextSection>{`WMTM (github.com/indicozy/wmtm, 01.2021 - 02.2021 )
                  WM-agnostic Theme Manager for Linux in Bash.`}</TextSection>
                </ViewSection>
                <ViewSection sidebar='experience'>
                  <TextSection>
                    {`Jezgrads Foundation
                    Contributed to Vercel, Prisma, Pupilfirst, DiceBear, Searchkit, Vanilla-OS, uiwjs, Mantine, Faker-JS`}
                  </TextSection>
                  <Br />
                  <TextSection>{`ACM CodeW (codew.kz, January 2022 - 02.2022)
                  Website for Code-Women, ACM Student Chapter.
                  Next, tRPC, PostgreSQL, AWS S3, ThreeJS, react-hook-form, Framer Motion, HeadlessUI, Tailwind`}</TextSection>
                  <Br />
                  <TextSection>{`Mentorship (codew.kz, January 2022 - 02.2022)
                  Website for Code-Women, ACM Student Chapter.
                  Next, tRPC, PostgreSQL, AWS S3, ThreeJS, react-hook-form, Framer Motion, HeadlessUI, Tailwind`}</TextSection>
                  <Br />
                  <TextSection>{`Youtube Channel (codew.kz, January 2022 - 02.2022)
                  Website for Code-Women, ACM Student Chapter.
                  Next, tRPC, PostgreSQL, AWS S3, ThreeJS, react-hook-form, Framer Motion, HeadlessUI, Tailwind`}</TextSection>
                  <Br />
                  <TextSection>
                    {`QWANT
                    Contributed to Vercel, Prisma, Pupilfirst, DiceBear, Searchkit, Vanilla-OS, uiwjs, Mantine, Faker-JS`}
                  </TextSection>
                  <Br />
                  <TextSection>
                    {`Open-Source
                    Contributed to Vercel, Prisma, Pupilfirst, DiceBear, Searchkit, Vanilla-OS, uiwjs, Mantine, Faker-JS`}
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
                    Redux, Jotai, ReactQuery, Axios, Storybook

                    BACKEND (Intermediate):
                    Python, Go, NodeJS, Elixir, Rust, PrismaORM, Flask,
                    Django, ExpressJS, Rails, Sinatra, Gin, Fiber, Git

                    DEVOPS (Advanced):
                    Linux, Open/FreeBSD, Nix/NixOS, Terraform, Bash, Ansible, Docker, CI/CD, Vercel, Grafana, Zabbix

                    DATABASES & API (Advanced):
                    neo4j, LevelDB, MongoDB, PostgreSQL, Cassandra, ScyllaDB, Redis, ElasticSearch, tRPC, REST, GraphQL

                    LOW/HIGH FIDELITY DESIGN (Intermediate):
                    Wireframing, Sketching, Ideation, User flows, Prototyping, Design specs, Design systems,
                    Miro, Photoshop, Illustrator, Figma, Inkscape

                    User/Customer Experience (Intermediate):
                    User Research, Market Research, Usability Testing`}
                  </TextSection>
                </ViewSection>
                <ViewSection sidebar='soft skills'>
                  <TextSection>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </TextSection>
                </ViewSection>
                <ViewSection sidebar='education'>
                  <TextSection>
                    {`NAZARBAYEV UNIVERSITY
                    BA Degree in Sociology
                   August 2018 - May 2023`}

                    {`
                    
                    JEZKAZGAN KAZAKH-TURKISH LYCEUM
                   May 2018`}
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
