"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"

 //Added to turn it to a client side component. Bydefault all Next.js components are server side components.

const NavItems = () => {

  const [activeIndex, setActiveIndex] = useState< null | number >(null)
  // Everything is is the same as using useState while in JS. The only new thing is the content within <>
  // Since this is TypeScript, we need to define the data types that the variable of the state, i.e., the variable "activeIndex" for this case, can accept.

  const isAnyOpen = activeIndex !== null

  useEffect(() => {
    const handler = (e:KeyboardEvent) => {
      if(e.key === 'Escape'){
        setActiveIndex(null)
      }
    }

    document.addEventListener('keydown',handler)

    return () => {
      document.removeEventListener('keydown',handler)
    }
  }, [])

  const navRef = useRef< HTMLDivElement | null >(null)

  useOnClickOutside(navRef, () => setActiveIndex(null))

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
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
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
}

export default NavItems