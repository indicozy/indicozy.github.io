import { PDFDownloadLink } from '@react-pdf/renderer'

import { MyDocument } from './ReactPdf'

const MyDocumentDownload = ({ t }) => {
  return (
    <PDFDownloadLink
      className='bg-red-300 px-4 py-2 rounded-sm'
      document={<MyDocument t={t} />}
      fileName='Burkit-Karlibay-Frontend-Engineer-Resume.pdf'
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  )
}
export default MyDocumentDownload
