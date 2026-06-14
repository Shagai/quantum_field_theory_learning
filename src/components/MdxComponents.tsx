import type { ReactNode } from 'react'

type CalloutProps = {
  title: string
  children: ReactNode
}

type ChildrenProps = {
  children: ReactNode
}

export function Callout({ title, children }: CalloutProps) {
  return (
    <aside className="callout">
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  )
}

export function Sidenote({ children }: ChildrenProps) {
  return <span className="sidenote">{children}</span>
}

export function Term({ children }: ChildrenProps) {
  return <span className="term">{children}</span>
}
