import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

export const Button = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'>>(function ButtonBase(
  { className = '', ...props },
  ref
) {
  return (
    <button
      {...props}
      ref={ref}
      className={`${className} text-white bg-zinc-800 hover:bg-zinc-700 font-medium rounded-md text-sm px-4 py-2 me-2 mb-2 dark:bg-zinc-600 dark:hover:bg-zinc-700 focus:outline-none`}
    />
  )
})
