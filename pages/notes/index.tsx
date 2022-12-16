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
        <div
          key={i}
          className='p-6 mb-4 max-w-sm rounded-lg border border-gray-200 bg-stone-50'
        >
          {block.value.properties.title ? (
            <>
              <p className='text-2xl'>{block.value.properties.title[0][0]}</p>
              {/* <p>
                {block.value.properties.title[0][0]
                  .toLowerCase()
                  .replace(/[^A-Za-z0-9 ]/g, '')
                  .replaceAll(' ', '-')}
              </p> */}
            </>
          ) : (
            <></>
          )}
          {/* {block.value.id ? <p>{block.value.id}</p> : <></>} */}
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
          {block.value.properties.title ? (
            <a
              href={`${block.value.properties.title[0][0]
                .toLowerCase()
                .replace(/[^A-Za-z0-9 ]/g, '')
                .replaceAll(' ', '-')}
                `}
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800'
            >
              Read more
              <svg
                aria-hidden='true'
                className='-mr-1 ml-2 w-4 h-4'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          ) : (
            <></>
          )}
          {block.value.properties['jRIm'] ? (
            <a
              href={`${block.value.properties['jRIm'][0][0]}
                `}
              className='inline-flex items-center px-3 py-2 ml-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800'
            >
              Source
              <svg
                aria-hidden='true'
                className='-mr-1 ml-2 w-4 h-4'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
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
