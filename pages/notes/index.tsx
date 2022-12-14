import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 3600 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  const notes = Object.values(props.recordMap.block).map((block: any, i) => (
    <>
      {block.value &&
      block.value.properties &&
      block.value.type &&
      block.value.type === 'page' ? (
        <div key={i} className='p-4'>
          {block.value.properties.title ? (
            <>
              <h2 className='text-xl'>{block.value.properties.title[0][0]}</h2>
              <p>
                {block.value.properties.title[0][0]
                  .toLowerCase()
                  .replace(/[^A-Za-z0-9 ]/g, '')
                  .replaceAll(' ', '-')}
              </p>
            </>
          ) : (
            <></>
          )}
          {block.value.id ? <p>{block.value.id}</p> : <></>}
          {block.value.properties['Y]q}'] ? (
            <p>{block.value.properties['Y]q}'][0][0]}</p>
          ) : (
            <></>
          )}
          {block.value.properties['kKTk'] ? (
            <p>{block.value.properties['kKTk'][0][0]}</p>
          ) : (
            <></>
          )}
          {block.value.properties['jRIm'] ? (
            <p>{block.value.properties['jRIm'][0][0]}</p>
          ) : (
            <></>
          )}
          {block.value.properties['ea=E'] ? (
            <p>
              {JSON.stringify(block.value.properties['ea=E'][0][0].split(','))}
            </p>
          ) : (
            <></>
          )}
          {block.value.properties['cKLX'] ? (
            <p>{block.value.properties['cKLX'][0][0]}</p>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  ))
  return (
    <>
      {notes}
      {/* <NotionPage {...props} /> */}
    </>
  )
}
