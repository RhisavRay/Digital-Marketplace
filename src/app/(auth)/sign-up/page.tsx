"use client"

import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthCredentialValidator, TAuthCredentialValidator } from "@/lib/validators/account-credentials-validator"
import { trpc } from "@/trpc/client"

const Page = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TAuthCredentialValidator>({
        resolver: zodResolver(AuthCredentialValidator)
    })

    const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({})

    const onSubmit = ({email, password} : TAuthCredentialValidator) => {
        // Send data to the server to handle the sign up/in logic
    }

    return(
        <>
            <div className="flex flex-col items-center justify-center pt-20 lg:px-0 container relative">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Icons.logo className="h-20 w-20"/>

                        <h1 className="text-2xl font-bold"> Create an account </h1>

                        <Link href='/sign-in' className={buttonVariants({
                            variant: "link",
                            className: "gap-1.5"
                        })}>
                            Already have an account with us?

                            <ArrowRight className="h-4 w-4"/>
                        </Link>
                    </div>

                    <div className="grid gap-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        className={cn({
                                            "focus-visible:ring-red-500": errors.email
                                        })}
                                        placeholder="you@example.com"
                                        {...register('email')}
                                    />
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        className={cn({
                                            "focus-visible:ring-red-500": errors.password
                                        })}
                                        placeholder="password"
                                        {...register('password')}
                                    />
                                </div>

                                <Button>Sign Up</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page