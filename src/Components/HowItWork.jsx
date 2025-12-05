"use client";

import LayoutScrollSmoother from "@/app/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import phoneReels from "@/image/Reels.png";
import phoneDie from "@/image/Dierect.png";
import phoneprofile from "@/image/profile.png";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function HowItWorkJSX() {

    const containerRef = useRef(null);
    const titleEnjoyRef = useRef(null);
    const subtitleEnjoyRef = useRef(null);
    const phoneEnjoyRef = useRef(null);
    const titleMomentsRef = useRef(null);
    const subtitleMomentsRef = useRef(null);
    const phoneMomentsRef = useRef(null);
    const titleConneectRef = useRef(null);
    const subtitleConneectRef = useRef(null);
    const phoneConneectRef = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({
            isMobile: '(max-width : 768px)',
            isDesktop: '(min-width : 769px)'
        }, (context) => {
            const { isDesktop, isMobile } = context.conditions;
            if (isDesktop) {
                const titleEnjoySplit = new SplitText(titleEnjoyRef.current, {
                    type: "words",
                    mask: "words"
                })
                const subtitleEnjoySplit = new SplitText(subtitleEnjoyRef.current, {
                    type: "lines",
                    mask: "lines"
                })
                const tlEnjoy = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 5%",
                        end: "+=50%",
                        pin: true,
                        toggleActions: "play reverse play reverse",
                    }
                });
                tlEnjoy.from(titleEnjoySplit.words, {
                    y: 100,
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                    stagger: { each: 0.04 },

                });
                tlEnjoy.from(subtitleEnjoySplit.lines, {
                    y: 100,
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                    stagger: { each: 0.04 }
                }, "<30%");
                tlEnjoy.from(phoneEnjoyRef.current, {
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                }, "<")

                // ============================= Capture Moments ==================================

                const titleMomentsSplit = new SplitText(titleMomentsRef.current, {
                    type: "words",
                    mask: "words"
                })
                const subtitleMomentsSplit = new SplitText(subtitleMomentsRef.current, {
                    type: "lines",
                    mask: "lines"
                })
                const tlMoments = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "0.2% 5%",
                        end: "+=50%",
                        pin: true,
                        toggleActions: "play reverse play reverse",
                        // markers: true
                    }
                });

                tlMoments.from(titleMomentsSplit.words, {
                    y: 100,
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                    stagger: { each: 0.04 },

                });
                tlMoments.from(subtitleMomentsSplit.lines, {
                    y: 100,
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                    stagger: { each: 0.04 }
                }, "<30%");
                tlMoments.from(phoneMomentsRef.current, {
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                }, "<")

                // ============================= Conneect ==================================

                const titleConneectSplit = new SplitText(titleConneectRef.current, {
                    type: "words",
                    mask: "words"
                })
                const subtitleConneectSplit = new SplitText(subtitleConneectRef.current, {
                    type: "lines",
                    mask: "lines"
                })
                const tlConneect = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "0.5% 5%",
                        end: "+=50%",
                        pin: true,
                        toggleActions: "play reverse play reverse",
                        // markers: true
                    }
                });

                tlConneect.from(titleConneectSplit.words, {
                    y: 100,
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                    stagger: { each: 0.04 },

                });
                tlConneect.from(subtitleConneectSplit.lines, {
                    y: 100,
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                    stagger: { each: 0.04 }
                }, "<30%");
                tlConneect.from(phoneConneectRef.current, {
                    opacity: 0,
                    ease: "power3.out",
                    duration: 0.8,
                }, "<")
            } else if (isMobile) {
                const titleEnjoySplit = new SplitText(titleEnjoyRef.current, {
                    type: "words",
                    mask: "words"
                })
                const subtitleEnjoySplit = new SplitText(subtitleEnjoyRef.current, {
                    type: "lines",
                    mask: "lines"
                })
                const titleMomentsSplit = new SplitText(titleMomentsRef.current, {
                    type: "words",
                    mask: "words"
                })
                const subtitleMomentsSplit = new SplitText(subtitleMomentsRef.current, {
                    type: "lines",
                    mask: "lines"
                })
                const titleConneectSplit = new SplitText(titleConneectRef.current, {
                    type: "words",
                    mask: "words"
                })
                const subtitleConneectSplit = new SplitText(subtitleConneectRef.current, {
                    type: "lines",
                    mask: "lines"
                })
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        end: "+=50%",
                        toggleActions: "play none none none",
                    }
                })
                tl.from(titleEnjoySplit.words, {
                    y: 50,
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 0.8,
                    stagger: { each: 0.05 },
                    ease: "power2.out"
                })
                tl.from(subtitleEnjoySplit.lines, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: { each: 0.05 },
                    ease: "power2.out"
                }, "<20%")
                tl.from(titleMomentsSplit.words, {
                    y: 50,
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 0.8,
                    stagger: { each: 0.05 },
                    ease: "power2.out"
                }, "<")
                tl.from(subtitleMomentsSplit.lines, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: { each: 0.05 },
                    ease: "power2.out"
                }, "<20%")
                tl.from(titleConneectSplit.words, {
                    y: 50,
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 0.8,
                    stagger: { each: 0.05 },
                    ease: "power2.out"
                }, "<")
                tl.from(subtitleConneectSplit.lines, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: { each: 0.05 },
                    ease: "power2.out"
                })
            }
        })
    });
    return (
        <section id="HowItWork" ref={containerRef} className="heightHowItWorkLandscape w-full h-[150vh] ms:[150vh] md:[150vh] lg:h-screen">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 w-full h-screen justify-center items-center">
                <div className="absoluteIsDesktop flex w-[85%] justify-between items-center">
                    <div className="boxLeft m-auto sm:m-auto md:m-0 lg:m-0">
                        <div className="containerTitleRef text-center">
                            <h1 ref={titleEnjoyRef} className="pb-10 text-5xl sm:text-5xl md:text-6xl lg:text-7xl capitalize w-80">enjoy & explore</h1>
                            <p ref={subtitleEnjoyRef} className="w-80 capitalize m-auto text-xs sm:text-xs md:text-base lg:text-base">Make real connections <span className="text-neutral-400"> and enjoy spontaneous interactions,</span> both online and offline, <span className="text-neutral-400">where authentic experiences replace superficial scrolling.</span></p>
                        </div>
                    </div>
                    <div className="boxRight hiddenPhotos">
                        <div ref={phoneEnjoyRef} className="relative -top-30 w-100 h-120">
                            <Image src={phoneReels} alt="Reels" className="w-screen h-screen object-contain" />
                        </div>
                    </div>
                </div>
                <div className="absoluteIsDesktop flex w-[85%] justify-between items-center">
                    <div className="boxLeft m-auto sm:m-auto md:m-0 lg:m-0">
                        <div className="containerTitleRef text-center">
                            <h1 ref={titleMomentsRef} className="pb-10 text-5xl sm:text-5xl md:text-6xl lg:text-7xl capitalize w-80">capture moments</h1>
                            <p ref={subtitleMomentsRef} className="w-80 capitalize m-auto text-xs sm:text-xs md:text-base lg:text-base">capture your bast moments <span className="text-neutral-400">and share them with new friends</span> creating lasting memorise <span className="text-neutral-400">and building connections that truly matter.</span></p>
                        </div>
                    </div>
                    <div className="boxRight hiddenPhotos">
                        <div ref={phoneMomentsRef} className="relative -top-30 w-100 h-120">
                            <Image src={phoneprofile} alt="Reels" className="w-screen h-screen object-contain" />
                        </div>
                    </div>
                </div>
                <div className="absoluteIsDesktop flex w-[85%] justify-between items-center">
                    <div className="boxLeft m-auto sm:m-auto md:m-0 lg:m-0">
                        <div className="containerTitleRef text-center">
                            <h1 ref={titleConneectRef} className="pb-10 text-5xl sm:text-5xl md:text-6xl lg:text-7xl capitalize w-80">connect with people</h1>
                            <p ref={subtitleConneectRef} className="w-80 capitalize m-auto text-xs sm:text-xs md:text-base lg:text-base">Easily connect <span className="text-neutral-400">with people you meet to stay in touch</span> stregthen relationships. <span className="text-neutral-400">and continue sharing experience beyond the moment.</span></p>
                        </div>
                    </div>
                    <div className="boxRight hiddenPhotos">
                        <div ref={phoneConneectRef} className="relative -top-30 w-100 h-120">
                            <Image src={phoneDie} alt="Reels" className="w-screen h-screen object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}