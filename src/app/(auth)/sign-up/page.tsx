import { Icons } from "@/components/Icons"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

const Page = () => {
    return(
        <>
            <div className="flex flex-col items-center justify-center pt-20 lg:px-0 container relative">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Icons.logo className="h-20 w-20"/>

                        <h1 className="text-2xl font-bold"> Create an account </h1>

                        <Link href='/sign-in' className={buttonVariants({
                            variant: "link"
                        })}>
                            Already have an account with us?
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page