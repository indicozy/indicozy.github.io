import { PDFDownloadLink } from '@react-pdf/renderer'

import { MyDocument } from './ReactPdf'

const MyDocumentDownload = ({ t }) => {
  return (
    <PDFDownloadLink
      className='bg-zinc-50 dark:bg-zinc-700 border border-zinc-500 dark:border-zinc-400 px-4 hover:px-8 transition-[padding] transition-[font-weight] font-normal hover:font-bold py-2 rounded-md'
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
