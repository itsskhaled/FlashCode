"use client";

import Image from "next/image";
import Iphone from "@/image/IphoneMap.png";
import { Plus } from "@deemlol/next-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import LayoutScrollSmoother from "@/app/ScrollSmoother";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)
export default function HomeJSX() {
    const sectionRef = useRef(null);
    const infoHeroRef = useRef(null);
    const imageRef = useRef(null);
    const btnRef = useRef(null);
    const subTitleRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(imageRef.current, {
            scale: 1.5,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
        const titles = gsap.utils.toArray(".title");
        const titleSplit = new SplitText(titles, {
            type: "words",
            mask: "words"
        })
        const subtitleSplit = new SplitText(subTitleRef.current, {
            type: "lines",
            mask: "lines"
        })
        tl.from(titleSplit.words, {
            y: 50,
            opacity: 0,
            filter: "blur(10px)",
            ease: "power2.out",
            duration: 1,
            stagger: { each: 0.1 }
        }, "<50%");
        tl.from(btnRef.current, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            duration: 0.5
        }, "<");
        tl.from(subtitleSplit.lines, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            duration: 0.5
        }, "<40%")

        gsap.to(infoHeroRef.current, {
            width: "60%", transformOrigin: "center",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "50% 10%",
                end: "+=300",
                scrub: true,
            }
        })

        const mm = gsap.matchMedia();
        mm.add({
            isMobile: '(max-width : 768px)',
            isDesktop: '(min-width : 769px)'
        }, (context) => {
            const { isMobile, isDesktop } = context.conditions;
            if (isDesktop) {
                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    scroller: LayoutScrollSmoother.wrapper,
                    pin: true,
                    pinSpacing: false,
                });
            }
        })





    })

    return (
        <section id="WhatWeAre" ref={sectionRef} className="heightHomeLandscape w-full h-screen relative overflow-hidden">

            <div className=" w-[95%] h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-screen flex justify-center items-center text-5xl sm:text-5xl md:text-7xl lg:text-9xl m-auto">
                <div ref={imageRef} className="absolute top-60 sm:top-5 md:top-5 lg:top-10 w-[350px] sm:w-[350px] md:w-[550px] lg:w-[750px] z-2">
                    <Image src={Iphone} alt="" className="w-full h-full object-cover" />
                </div>
                <div ref={infoHeroRef} className="flex justify-center sm:justify-center md:justify-center lg:justify-between gap-5 w-full capitalize">
                    <div>
                        <h1 className="title">connect</h1>
                        <h1 className="title text-right">people</h1>
                    </div>
                    <div>
                        <h1 className="title">expand</h1>
                        <h1 className="title">horizons</h1>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center text-center absolute bottom-5">
                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-3 -bottom-10" />
                <div className="z-4">
                    <div className="">
                        <div ref={btnRef} className="flex justify-center items-center ">
                            <div className="flex items-center gap-2">
                                <Link href="https://www.instagram.com">
                                    <div className="rounded-xl p-0.5 bg-linear-to-r from-[#FF3600] to-[#34C404]">
                                        <button className="bg-black text-white rounded-xl py-3 px-6 capitalize cursor-pointer flex items-center gap-2">
                                            get early access now
                                            <Plus size={24} color="#FFFFFF" />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex items-center absolute">
                                <span className="absolute left-18 p-2 rounded-full bg-neutral-800 cursor-pointer"><Plus size={24} color="#FFFFFF" /></span>
                            </div>
                        </div>
                        <p ref={subTitleRef} className="capitalize mt-5">don`t be late to the party - get early access today!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}