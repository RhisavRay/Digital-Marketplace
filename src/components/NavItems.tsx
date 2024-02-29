"use client"
import { useState } from "react"

 //Added to turn it to a client side component. Bydefault all Next.js components are server side components.

const NavItems = () => {

  const [activeState, setActiveState] = useState< null | number >(null)
  // Everything is is the same as using useState while in JS. The only new thing is the content within <>
  // Since this is TypeScript, we need to define the data types that the variable of the state, i.e., the variable "activeState" for this case, can accept.

  return (
    <div className="flex gap-4 h-full"></div>
  )
}

export default NavItems