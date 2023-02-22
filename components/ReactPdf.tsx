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
    { src: '/fonts/runs/variable.ttf' } // font-style: normal, font-weight: normal
  ]
})

Font.register({
  family: 'TT Norms Pro',
  fonts: [
    { src: '/fonts/norms/Regular.ttf' } // font-style: normal, font-weight: normal
  ]
})

const ViewSection: FC<{ children: ReactNode; sidebar: string }> = ({
  children,
  sidebar
}) => {
  return (
    <View style={{ minHeight: 70, backgroundColor: 'red' }}>
      <View>
        <Text
          style={{
            transform: 'rotate(90deg) translate(128px, 110px)',
            fontSize: 8,
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }}
        >
          {sidebar}
        </Text>
      </View>
      <View
        style={{ marginLeft: 30, display: 'flex', flexDirection: 'column' }}
      >
        {children}
      </View>
    </View>
  )
}

const TextSection: FC<{ children: ReactNode }> = ({ children }) => {
  return <Text style={{ fontSize: 8 }}>{children}</Text>
}

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
                transform: 'rotate(90deg) translate(320px, 270px)',
                fontSize: 10
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
                  flexGrow: 1,
                  fontFamily: 'TT Runs'
                }}
              >
                <Text
                  style={{
                    fontSize: 30
                  }}
                >
                  {t('name')}
                </Text>
                <Text style={{ fontSize: 10 }}>Frontend Engineer</Text>
                <Text style={{ fontSize: 10 }}>indicozy.vercel.app</Text>
              </View>
              <View
                style={{
                  flexBasis: 1,
                  flexGrow: 1
                }}
              >
                <Text style={{ fontSize: 10 }}>
                  I fall in love with products and design thoughtful user
                  experiences that piece together the big picture with simple,
                  impactful and shippable solutions focused on the customer.
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
                <ViewSection sidebar='education'>
                  <TextSection>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
