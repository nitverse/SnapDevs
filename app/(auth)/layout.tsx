import { FC, ReactNode } from 'react'

interface layoutProps {
  children:ReactNode
}

const layout: FC<layoutProps> = ({children}) => {
  return (

<div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fffc00] to-[#fffc00]'>
{children}
</div>
)
}

export default layout