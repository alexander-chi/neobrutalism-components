import { SquareArrowOutUpRight } from 'lucide-react'

import Code from '@/components/app/Code'
import ComponentWrapper from '@/components/app/ComponentWrapper'
import CopyCode from '@/components/app/CopyCode'

type Props = {
  name: string
  component: string
  codeSnippetName: string
  exampleComponent: JSX.Element
  tailwindConfig: string | null
  docsLink?: string
}

export default function Component({
  name,
  component,
  codeSnippetName,
  exampleComponent,
  tailwindConfig,
  docsLink,
}: Props) {
  const indexHtml = codeSnippetName === 'Drawer' || codeSnippetName === 'Modal'

  return (
    <div id={name} className="not-prose m400:text-sm">
      <h2 className="mb-5 text-2xl font-bold m400:text-xl">{name}</h2>

      {docsLink && (
        <a
          className="mb-5 flex w-max items-center gap-3 rounded-base border-2 border-black bg-main px-2 py-0.5 text-[13px]"
          target="_blank"
          href={docsLink}
        >
          shadcn docs
          <SquareArrowOutUpRight size={16} />
        </a>
      )}

      <ComponentWrapper>{exampleComponent}</ComponentWrapper>
      <Code code={component} name={codeSnippetName + '.tsx'} />
      <CopyCode copyBtnText="Copy this component" code={component} />

      {indexHtml && (
        <div>
          <Code
            limitedHeight={false}
            code={
              codeSnippetName === 'Drawer'
                ? '<div id="drawer"></div>'
                : '<div id="modal"></div>'
            }
            name={'index.html'}
          />
          <CopyCode
            copyBtnText="Copy this tag"
            code={
              codeSnippetName === 'Drawer'
                ? '<div id="drawer"></div>'
                : '<div id="modal"></div>'
            }
          />
        </div>
      )}

      {tailwindConfig && (
        <div>
          <Code
            limitedHeight={false}
            code={tailwindConfig}
            name={'tailwind.config.js'}
          />
          <CopyCode copyBtnText="Copy this config" code={tailwindConfig} />
        </div>
      )}
    </div>
  )
}
