import * as React from 'react'
import Link from 'next/link'

import { NotionPage } from '@/components/NotionPage'
import { Badge } from '@/components/ui/badge'
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
    <div key={i}>
      {block.value &&
      block.value.properties &&
      block.value.type &&
      block.value.type === 'page' ? (
        <div className='py-20 border-b border-b-black'>
          {block.value.properties.title ? (
            <>
              <Link
                className='inline-block text-2xl font-semibold bg-background sm:text-6xl font-domain'
                href={`${block.value.id.replaceAll('-', '')}
                `}
              >
                {block.value.properties.title[0][0]}
                {/* <p>
                {block.value.properties.title[0][0]
                  .toLowerCase()
                  .replace(/[^A-Za-z0-9 ]/g, '')
                  .replaceAll(' ', '-')}
              </p> */}
              </Link>
            </>
          ) : (
            <></>
          )}
          {/* {block.value.id ? <p>{block.value.id}</p> : <></>} */}
          <div className='mt-1'>
            {block.value.properties['kKTk'] ? (
              <Badge>{block.value.properties['kKTk'][0][0]}</Badge>
            ) : (
              <></>
            )}
            {block.value.properties['ea=E'] ? (
              <>
                {block.value.properties['ea=E'][0][0].split(',').map((e, i) => (
                  <Badge key={i}> {e}</Badge>
                ))}
              </>
            ) : (
              <></>
            )}
            {block.value.properties['cKLX'] ? (
              <Badge>{block.value.properties['cKLX'][0][0]}</Badge>
            ) : (
              <></>
            )}
          </div>
          {block.value.properties['Y]q}'] ? (
            <div className='mt-2'>
              <p className='inline-block text-base bg-background'>
                {block.value.properties['Y]q}'][0][0]}
              </p>
            </div>
          ) : (
            <></>
          )}
          {/* <div className='mt-4'>
            {block.value.properties.title ? (
              <Link
                href={`${block.value.properties.title[0][0]
                  .toLowerCase()
                  .replace(/[^A-Za-z0-9 ]/g, '')
                  .replaceAll(' ', '-')}
                `}
              >
                <a className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800'>
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
              </Link>
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
          </div> */}
        </div>
      ) : (
        <></>
      )}
    </div>
  ))
  return (
    <div className='container px-2 mx-auto sm:px-0'>
      {process.env.NODE_ENV === 'development' ? (
        <NotionPage {...props} />
      ) : (
        <></>
      )}
      {notes}
    </div>
  )
}
