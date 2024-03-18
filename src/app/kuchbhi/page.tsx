"use client"

import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function KuchBhi() {
    const [text, setText] = useState("hello")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    return <div>
        <Input type="text" placeholder="Enter some text" onChange={handleChange} />

        <h1>{text}</h1>
    </div>
}