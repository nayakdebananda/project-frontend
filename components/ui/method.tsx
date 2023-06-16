import React from "react"


type PropType = {
    text: React.ReactNode,
}

export default function Method({ text }: PropType) {
    let colorClass = ""
    switch (text) {
        case 'GET':
            colorClass = "dark:text-lime-200 text-lime-600"
            break
        case 'POST':
            colorClass = " dark:text-yellow-200 text-yellow-600"
            break
        case 'UPDATE':
            colorClass = " dark:text-blue-200 text-blue-600"
            break
        case 'PUT':
            colorClass = "dark:text-amber-200 text-amber-600"
            break
        case 'PATCH':
            colorClass = "dark:text-fuchsia-200 text-fuchsia-600"
            break
        case 'DELETE':
            colorClass = "dark:text-red-400 text-red-600"
            break
        default:
            colorClass = "text-gray-700"
            break
    }
    return (
        <>
            <span className={`${colorClass} mr-1`}>{text}</span>
        </>

    )
}
