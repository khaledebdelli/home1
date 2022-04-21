import {
  BadgeProps,
  CSSBadge,
  DockerBadge,
  ExpressJSBadge,
  HTMLBadge,
  JavaScriptBadge,
  NextJSBadge,
  NodeJSBadge,
  PythonBadge,
  RustBadge,
  SWCBadge,
  TailWindCSSBadge,
  TypeScriptBadge,
} from '.'

export const Badge = ({ topic }: BadgeProps) => {
  switch (topic) {
    case 'nodejs':
      return <NodeJSBadge />
    case 'python':
      return <PythonBadge />
    case 'typescript':
      return <TypeScriptBadge />
    case 'rust':
      return <RustBadge />
    case 'expressjs':
      return <ExpressJSBadge />
    case 'docker':
      return <DockerBadge />
    case 'css':
      return <CSSBadge />
    case 'html':
      return <HTMLBadge />
    case 'javascript':
      return <JavaScriptBadge />
    case 'swc':
      return <SWCBadge />
    case 'nextjs':
      return <NextJSBadge />
    case 'tailwindcss':
      return <TailWindCSSBadge />

    default:
      return null
  }
}
