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
  ReactJSBadge,
  ReactQueryBadge,
  JWTBadge,
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
    case 'reactjs':
      return <ReactJSBadge />
    case 'react-query':
      return <ReactQueryBadge />
    case 'jwt':
      return <JWTBadge />

    default:
      return null
  }
}
