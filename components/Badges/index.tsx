import { Repository } from '../../typings'

export const NodeJSBadge = () => (
  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
    NodeJS
  </span>
)
export const TypeScriptBadge = () => (
  <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
    TypeScript
  </span>
)
export const RustBadge = () => (
  <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
    Rust
  </span>
)
export const ExpressJSBadge = () => (
  <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
    ExpressJS
  </span>
)
export const HTMLBadge = () => (
  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
    HTML
  </span>
)
export const DockerBadge = () => (
  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
    Docker
  </span>
)
export const CSSBadge = () => (
  <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
    CSS
  </span>
)
export const PythonBadge = () => (
  <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
    Python
  </span>
)
export const JavaScriptBadge = () => (
  <span className="bg-amber-100 text-amber-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-amber-200 dark:text-amber-900">
    Javascript
  </span>
)

export const NextJSBadge = () => (
  <span className="bg-lime-100 text-lime-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-lime-200 dark:text-lime-900">
    NextJS
  </span>
)
export const SWCBadge = () => (
  <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
    SWC
  </span>
)
export const TailWindCSSBadge = () => (
  <span className="bg-slate-100 text-slate-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-slate-200 dark:text-slate-900">
    TailwindCSS
  </span>
)
export type Topic =
  | 'nodejs'
  | 'python'
  | 'typescript'
  | 'rust'
  | 'expressjs'
  | 'docker'
  | 'css'
  | 'html'
  | 'javascript'
  | 'tailwindcss'
  | 'swc'
  | 'nextjs'

export interface BadgeProps {
  topic: Topic | string
}
