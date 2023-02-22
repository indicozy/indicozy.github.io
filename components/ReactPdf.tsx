import React, { FC, ReactNode } from 'react'

import {
  Document,
  Font,
  PDFDownloadLink,
  PDFViewer,
  Page,
  StyleSheet,
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
    <View style={{ minHeight: 80 }}>
      <View>
        <Text
          style={{
            transform: 'rotate(90deg) translate(130px, 120px)',
            fontSize: 7,
            // fontFamily: 'TT Runs',
            textTransform: 'uppercase',
            // letterSpacing: 1.1,
            fontWeight: 600
          }}
        >
          --------- {'    '}
          {sidebar}
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
const Br: FC = () => <Text> --------- </Text>

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
                <Text style={{ fontSize: 10, textTransform: 'uppercase' }}>
                  Frontend Engineer
                </Text>
                <Text style={{ fontSize: 8 }}>indicozy.vercel.app</Text>
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
                <ViewSection sidebar='experience'>
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
                   May 2023`}
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
                    neo4j, LevelDB, MySQL, PostgreSQL, Cassandra, ScyllaDB, Redis, ElasticSearch, tRPC, REST, GraphQL

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
                <ViewSection sidebar='recognition'>
                  <TextSection>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
