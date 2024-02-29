import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"

interface NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = () => {
  return (
    <div className="flex">
        <div className="relative flex items-center">
            <Button className="gap-1.5"></Button>
        </div>
    </div>
  )
}

export default NavItem