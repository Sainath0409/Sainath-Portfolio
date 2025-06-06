import React from 'react';
import { data } from '../data';


const Socials = () => {

    return (
        <section id='socials' className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
            {data?.socials.map((s) => {
                return (
                    <a href={s.link} target="_blank" rel="noreferrer" key={s.icon} className={s.icon+" grid place-items-center p-3 hover:animate-bounce rounded-full bg-[#DC143C] text-white"}>
                    </a>
                )
            })}
        </section>
    )
}

export default Socials