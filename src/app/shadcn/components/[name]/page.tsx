import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import { redirect } from 'next/navigation'

import components from '@/data/components/shadcn'

import Component from '@/components/app/Component'
import Pagination from '@/components/app/Pagination'

import { transformToName, transformToSlug } from '@/lib/utils'

const readFilePath = async (filePath: string) => {
  const readFile = promisify(fs.readFile)
  const fileContent = await readFile(path.join(process.cwd(), filePath), 'utf8')
  return fileContent
}

const getCode = async (filePath: string) => {
  const code = await readFilePath(filePath)

  if (code.includes("'use client'")) {
    return code.slice(14)
  }

  // if component has use client in it we will remove it because these are react components, not nextjs components

  return code
}

export async function generateStaticParams() {
  const componentSlugs = components.map((component) => ({
    name: component.url,
  }))

  return componentSlugs
}

export const dynamicParams = false

export default async function Installation({
  params,
}: {
  params: { name: string }
}) {
  const currentComponent = components.find(
    (component) => component.url === params.name,
  )

  if (!currentComponent) {
    redirect('/shadcn/installation')
  }

  const filePath = `./src/components/ui/${currentComponent.url}.tsx`

  const code = await getCode(filePath)

  return (
    <>
      <Component
        name={currentComponent.name}
        codeSnippetName={
          'components/ui/' + transformToSlug(currentComponent.url)
        }
        component={code}
        tailwindConfig={null}
        exampleComponent={<currentComponent.exampleComponent />}
        docsLink={`https://ui.shadcn.com/docs/components/${currentComponent.url}`}
      />

      <Pagination
        prev={
          currentComponent.prevComponent
            ? {
                name: `${transformToName(currentComponent.prevComponent)}`,
                path: `/shadcn/components/${currentComponent.prevComponent}`,
              }
            : undefined
        }
        next={
          currentComponent.nextComponent
            ? {
                name: `${transformToName(currentComponent.nextComponent)}`,
                path: `/shadcn/components/${currentComponent.nextComponent}`,
              }
            : undefined
        }
      />
    </>
  )
}
