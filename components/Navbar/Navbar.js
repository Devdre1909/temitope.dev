import React from 'react'
import Image from 'next/image'

import { Button } from '../Button'


const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-end fixed w-full h-16">
        <div className="container w-10/12 mx-auto flex items-center justify-end space-x-5">
          <Button download href="/docs/adegoke_temitope_cv.pdf">Resume</Button>
          <img alt="menu" src="/images/ri_menu-4-fill.svg"  />
        </div>
      </div>
    </>
  )
}

export default Navbar
