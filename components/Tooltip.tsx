import { createRef, ReactNode, RefObject } from 'react'

export const Tooltip = ({
  message,
  children,
}: {
  message: string
  children: ReactNode
}) => {
  const tipRef: RefObject<any> = createRef()
  function handleMouseEnter() {
    tipRef.current.style.opacity = 1
    tipRef.current.style.marginLeft = '10px'
  }
  function handleMouseLeave() {
    tipRef.current.style.opacity = 0
    tipRef.current.style.marginLeft = '5px'
  }
  return (
    <div
      className="relative flex items-center "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="whitespace-no-wrap absolute flex items-center rounded bg-gradient-to-r from-zinc-900 to-zinc-600 px-4 py-2 text-white transition-all duration-150"
        style={{ left: '100%', opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="absolute h-3 w-3 bg-zinc-900"
          style={{ left: '-6px', transform: 'rotate(45deg)' }}
        />
        {message}
      </div>
      {children}
    </div>
  )
}
