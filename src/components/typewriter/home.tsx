'use client'

import Typewriter, { type TypewriterClass } from 'typewriter-effect';
import Age from '../age';

export default function HomeTypewriter() {
    const typewriter = (e: TypewriterClass) => e
        .typeString(`<span class="text-white">Target:</span> Ahmadreza Ebrahimi <br>`)
        .typeString(`<span class="text-white">Location:</span> Iran - Tehran <br>`)
        .typeString(`<span class="text-white">Age:</span> ${Age('1999-08-02')} <br>`)
        .typeString(`<span class="text-white">Case Subject:</span> Introduce <br><br>`)
        .typeString(`<span class="text-white">Description:</span> <br>`)
        .pauseFor(2500)
        .start()

    return <Typewriter onInit={typewriter} options={{ delay: 75 }} />
}