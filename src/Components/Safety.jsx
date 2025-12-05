"use client";

import LayoutScrollSmoother from "@/app/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function SafetyJSX() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        const titleSplit = new SplitText(titleRef.current, {
            type: "words",
            mask: "words"
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "+=100%",
                toggleActions: "play none none none",
            }
        })
            .from(containerRef.current, {
                borderTopLeftRadius: 1500,
                borderTopRightRadius: 1500,
                opacity: 0,
                duration: 2,
                ease: "power4.out"
            })
        gsap.from(titleSplit.words, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: { each: 0.09 },
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 20%",
                end: "+=60%",
                onLeave: () => {
                    gsap.to(titleRef.current, { opacity: 0 })
                },
                onEnterBack: () => {
                    gsap.to(titleRef.current, { opacity: 1 })
                }
            }
        }, "<50%");
    });

    return (
        <section id="SafetyTrust" ref={containerRef} className="heightSafetyLandscape w-full h-screen bg-white">
            <div className="w-full h-screen flex justify-center items-center">
                <h1 ref={titleRef} className="capitalize text-6xl sm:text-6xl md:text-6xl lg:text-8xl text-center text-black">
                    your🛡️safety<br />is our priority
                </h1>
            </div>
        </section>
    )
}