"use client"

type AgeInterface = string | Date

export default function Age(birthdate: AgeInterface) {

    birthdate = new Date(birthdate)
    const difference = new Date(Date.now() - birthdate.getTime())
    const year = difference.getUTCFullYear()
    const age = Math.abs(year - 1970)

    return age

}