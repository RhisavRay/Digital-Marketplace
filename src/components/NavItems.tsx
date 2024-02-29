"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"
import NavItem from "./NavItem"

 //Added to turn it to a client side component. Bydefault all Next.js components are server side components.

const NavItems = () => {

  const [activeIndex, setActiveIndex] = useState< null | number >(null)
  // Everything is is the same as using useState while in JS. The only new thing is the content within <>
  // Since this is TypeScript, we need to define the data types that the variable of the state, i.e., the variable "activeIndex" for this case, can accept.

  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {

        const handleOpen = () => {
          if(activeIndex === i)
          {
            setActiveIndex(null)
          }
          else
          {
            setActiveIndex(i)
          }
        }

        const isOpen = i === activeIndex //To check if the current index is open or not

        return(
        <NavItem/>
        )
      })}
    </div>
  )
}

export default NavItems