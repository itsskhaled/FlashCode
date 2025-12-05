"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import humanity from "@/image/humanity.jpg";
import spontaneity from "@/image/spontaneity.jpg";
import authenticity from "@/image/authenticity.jpg";
import inclusivity from "@/image/inclusivity.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function CardsValuesJSX() {
    const containerRef = useRef(null);
    const boxBlurRef = useRef(null);
    useGSAP(() => {
        const cards = gsap.utils.toArray(".card");
        const titlePhoto = gsap.utils.toArray(".titlePhoto");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "+=50%",
                toggleActions: "play none none none",
            }
        })
        tl.from(cards, {
            height: "0%",
            duration: 0.8,
            stagger: { each: 0.1 },
            ease: "power2.out",
        })
        tl.from(titlePhoto, {
            opacity: 0,
            duration: 0.8,
            stagger: { each: 0.1 },
            ease: "power2.out",
        })

    });

    return (
        <>
            <section ref={containerRef} className="heightCardValuesLandscape w-full h-[250vh] sm:h-[250vh] md:h-[200vh] lg:h-screen relative overflow-hidden">
                <div className="relative z-2 flex flex-wrap w-full h-screen justify-center items-center gap-10">
                    <div className="card w-[250px] h-[350px] rounded-md border relative -rotate-10 top-20 z-8">
                        <div className="absolute w-full h-full object-cover ">
                            <Image src={humanity} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-5 pointer-events-none" />
                        <h1 className="titlePhoto absolute text-xl px-5 bottom-2 capitalize z-6">humanity: real people real connections</h1>
                    </div>
                    <div className="card w-[250px] h-[350px] rounded-md border relative -rotate-10 top-20 z-8">
                        <div className="absolute w-full h-full object-cover">
                            <Image src={spontaneity} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-5 pointer-events-none" />
                        <h1 className="titlePhoto absolute text-xl px-5 bottom-2 capitalize z-6">spontaneity: embrace the unexpected</h1>
                    </div>
                    <div className="card w-[250px] h-[350px] rounded-md border relative rotate-10 top-10 z-1">
                        <div className="absolute w-full h-full object-cover">
                            <Image src={authenticity} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-5 pointer-events-none" />
                        <h1 className="titlePhoto absolute text-xl px-5 bottom-2 capitalize z-6">authenticity: be your true self</h1>
                    </div>
                    <div className="card w-[250px] h-[350px] rounded-md border relative -rotate-10 z-5">
                        <div className="absolute w-full h-full object-cover">
                            <Image src={inclusivity} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-5 pointer-events-none" />
                        <h1 className="titlePhoto absolute text-xl px-5 bottom-2 capitalize z-6">inclusivity: everyone is welcome</h1>
                    </div>
                </div>
            </section>
        </>
    );
}