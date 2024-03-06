import { Icons } from "@/components/Icons"
import React from "react"

const Page = () => {
    return(
        <>
            <div className="flex flex-col items-center justify-center pt-20 lg:px-0 container relative">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Icons.logo className="h-20 w-20"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page