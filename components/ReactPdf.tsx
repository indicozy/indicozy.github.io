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
const Hr: FC = () => (
  <Text style={{ fontSize: 8, marginBottom: 2, marginTop: 2 }}>
    ------------------
  </Text>
)

// Create Document Component
export const MyDocument = ({ t }) => {
  const prefix = `resume.frontend`
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
                  {t(`${prefix}.title`)}
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
                <Text style={{ fontSize: 10 }}>{t(`${prefix}.summary`)}</Text>
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
                <ViewSection sidebar='experience'>
                  {t(`${prefix}.experience`).map(
                    (
                      exp: {
                        title: string
                        date: string
                        role: string
                        description: string
                      },
                      i
                    ) => (
                      // TODO ERROR?
                      <>
                        {i ? <Hr /> : <></>}
                        <TextSection key={i}>
                          {`${exp.title} (${exp.date})
                      ${exp.role}

                      ${exp.description}`}
                        </TextSection>
                      </>
                    )
                  )}
                </ViewSection>
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
                  <Hr />
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
                  <Hr />
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
                  <Hr />
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
                  <Hr />
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
                  {t(`${prefix}.hard-skills`).map(
                    (
                      os: {
                        title: string
                        level: string
                        skills: string
                      },
                      i
                    ) => (
                      // TODO no key
                      <>
                        {i ? <Hr /> : <></>}
                        <TextSection>
                          {`${os.title.toUpperCase()} (${os.level})

                            ${os.skills}`}
                        </TextSection>
                      </>
                    )
                  )}
                </ViewSection>
                <ViewSection sidebar='open--source'>
                  {t(`${prefix}.opensource`).map(
                    (
                      os: {
                        title: string
                        role: string
                        link: string
                        description: string
                      },
                      i
                    ) => (
                      // TODO no key
                      <>
                        {i ? <Hr /> : <></>}
                        <TextSection>
                          {`${os.title}
                            ${os.role}
`}
                          <Link
                            style={{
                              color: 'black',
                              textDecoration: 'underline',
                              paddingBottom: 1
                            }}
                            src={`https://${os.link}`}
                          >
                            {os.link}
                          </Link>
                          {`

                            ${os.description}`}
                        </TextSection>
                      </>
                    )
                  )}
                </ViewSection>
                <ViewSection sidebar='education'>
                  {t(`${prefix}.education`).map(
                    (
                      os: {
                        title: string
                        role: string
                        date: string
                        description: string
                      },
                      i
                    ) => (
                      // TODO no key
                      <>
                        {i ? <Hr /> : <></>}
                        <TextSection>
                          {`${os.title} (${os.date})
                            ${os.role}

                            ${os.description}`}
                        </TextSection>
                      </>
                    )
                  )}
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
