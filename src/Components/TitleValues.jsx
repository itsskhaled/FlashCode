"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function TitleValuseJSX() {
    const containerRef = useRef(null);
    const subTitleRef = useRef(null);
    const titleRef = useRef(null);
    const svgRef = useRef(null);

    useGSAP(() => {

        const subTitleSplit = new SplitText(subTitleRef.current, {
            type: "words",
            mask: "words"
        });
        const titleSplit = new SplitText(titleRef.current, {
            type: "words",
            mask: "words"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "+=50%",
                toggleActions: "play none none none",
            }
        });

        tl.from(subTitleSplit.words, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: { each: 0.04 },
            ease: "power2.out"
        })
        tl.from(titleSplit.words, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: { each: 0.04 },
            ease: "power2.out"
        }, "<30%")

        const paths = svgRef.current.querySelectorAll("path");

        gsap.set(paths, {
            strokeDasharray: 200,
            strokeDashoffset: 200
        })

        tl.to(paths, {
            strokeDashoffset: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power2.out",
        }, "<")
        gsap.to(svgRef.current, {
            y: 15,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        })
    })

    return (
        <section id="OurValues" ref={containerRef} className="w-full h-screen">
            <div className="w-full h-screen flex flex-col justify-center items-center capitalize text-center">
                <div className="block">
                    <h1 ref={subTitleRef} className="md:text-xl lg:text-2xl mb-10">making social media social again</h1>
                    <h1 ref={titleRef} className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl">our values</h1>
                </div>
                <div className="mt-50">
                    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="118" height="88" fill="none" overflow="visible">
                        <g><g transform="translate(0 5)">
                            <path d="M 0 0 C 0 0 4 62 32 78" fill="transparent" stroke="#AAA" />
                            <path d="M 32 78 L 32 58.5" fill="transparent" stroke="#AAA" />
                            <path d="M 32 78 L 8.5 78" fill="transparent" stroke="#AAA" />
                        </g>
                            <g transform="translate(48.5 0)">
                                <path d="M 10.5 0 C 10.5 0 10.625 69.949 11.5 88" fill="transparent" stroke="#AAA" />
                                <path d="M 10.5 88 L 20 70" fill="transparent" stroke="#AAA" />
                                <path d="M 10.5 88 L 0 72" fill="transparent" stroke="#AAA" />
                            </g>
                            <g transform="translate(86 5)">
                                <path d="M 32 0 C 32 0 28 62 0 78" fill="transparent" stroke="#AAA" />
                                <path d="M 0 78 L 0 58.5" fill="transparent" stroke="#AAA" />
                                <path d="M 0 78 L 23.5 78" fill="transparent" stroke="#AAA" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}