"use client";
import { Plus } from "@deemlol/next-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)
export default function FooterJSX() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const btnRef = useRef(null);
    useGSAP(() => {
        const footerTitle = gsap.utils.toArray(".FooterTitle");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                end: "+=500",
                toggleActions: "play none none none",
            }
        });

        const titleSplit = new SplitText(titleRef.current, {
            type: "words",
            mask: "words"
        })
        tl.from(titleSplit.words, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: { each: 0.04 },
            ease: "power3.out"
        })
        tl.to(titleRef.current, {
            rotate: 10,
            color: "#252525",
            filter: "blur(2px)",
            ease: "power1.out"
        })
        tl.from(btnRef.current, {
            scale: 0,
            opacity: 0,
            ease: "power2.out"
        }, "<20%");

        tl.from(footerTitle, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: { ease: 0.05 }
        }, "<90%")

    })
    return (
        <section ref={containerRef} className="heightFooterLandscape w-full h-[40vh] relative">
            <div className="w-full h-[30vh] flex justify-center items-center capitalize">
                <h1 ref={titleRef} className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl whitespace-nowrap textLandscape">passt. waiting you!</h1>
                <div ref={btnRef} className="rounded-xl p-0.5 bg-linear-to-r from-[#FF3600] to-[#34C404] absolute">
                <Link href="https://www.instagram.com">
                    <button className="bg-black text-white rounded-xl py-3 px-6 capitalize cursor-pointer flex items-center gap-2">
                        get early access now
                        <Plus size={24} color="#FFFFFF" />
                    </button>
                </Link>
                </div>
            </div>
            <div className="FooterTitle flex text-center w-full justify-between mt-10 px-2 whitespace-nowrap">
                <h1 className="whitespace-nowrap">© 2025 FlashCode . All Rights Reserved</h1>
                <h1>Privacy Policy</h1>
            </div>
        </section>
    );
}