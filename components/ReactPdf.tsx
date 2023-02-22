import React from 'react'

import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer'

// transform: 'rotate(90deg)'
// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    backgroundColor: '#ece7e1'
  },
  section: {
    // margin: 10,
    // padding: 10,
    flexGrow: 1
  }
})

// Create Document Component
const MyDocument = ({ t }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.section}>
            <Text style={{ fontSize: 30 }}>{t('name')}</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ flexBasis: 1, flexGrow: 1, display: 'flex' }}>
            <View>
              <Text
                style={{
                  transform: 'rotate(90deg) translate(160px, 130px)',
                  fontSize: 12
                }}
              >
                EDUCATION
              </Text>
            </View>
            <View style={{ marginLeft: 30 }}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Text>
            </View>
          </View>
          <View style={{ flexBasis: 1, flexGrow: 1, display: 'flex' }}>
            <View>
              <Text
                style={{
                  transform: 'rotate(90deg) translate(160px, 130px)',
                  fontSize: 12
                }}
              >
                EDUCATION
              </Text>
            </View>
            <View style={{ marginLeft: 30 }}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Text>
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
