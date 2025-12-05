"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)
export default function InfoHomeJSX() {
    const containerRef = useRef(null);
    const firstTitleRef = useRef(null);
    const secondTitleRef = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({
            isMobile: '(max-width : 768px)',
            isDesktop: '(min-width : 769px)'
        }, (context) => {
            const { isMobile, isDesktop } = context.conditions;
            if (isMobile) {

                gsap.fromTo(containerRef.current, { scaleX: 0.5, transformOrigin: "center" }, {
                    scaleX: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        end: "+=500",
                        scrub: true,
                    }
                });


                const firstTitleSplit = new SplitText(firstTitleRef.current, {
                    type: "words lines",
                    mask: "words",
                    wordsClass: "word++"
                });

                gsap.from(firstTitleSplit.words, {
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    stagger: { each: 0.04 },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "40% center",
                        end: "+=20%",
                        toggleActions: "play none none none"
                    }
                })

                const secondTitleSplit = new SplitText(secondTitleRef.current, {
                    type: "words lines",
                    mask: "words",
                    wordsClass: "word++"
                })

                gsap.from(secondTitleSplit.words, {
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    stagger: { each: 0.04 },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "60% center",
                        end: "+=20%",
                    }
                })

            } else if (isDesktop) {


                gsap.fromTo(containerRef.current, { scaleX: 0.5, transformOrigin: "center" }, {
                    scaleX: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                        end: "+=500",
                        scrub: true,
                    }
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "40% center",
                        end: "+=600",
                        pin: true,
                    }
                })

                const firstTitleSplit = new SplitText(firstTitleRef.current, {
                    type: "words lines",
                    mask: "words",
                    wordsClass: "word++"
                });


                const titleHide = gsap.timeline({ paused: true })
                    .to(firstTitleRef.current, {
                        scale: 0,
                        duration: 0.8,
                        ease: "power4.out"
                    })
                gsap.set(firstTitleSplit.words, { opacity: 0 })
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "40% center",
                    end: "+=600",
                    // markers: true,
                    onEnter: () => {
                        gsap.fromTo(firstTitleSplit.words,
                            { y: 50, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 1,
                                stagger: { each: 0.05 },
                                ease: "power2.out"
                            }
                        );
                    },
                    onLeave: () => {
                        titleHide.play();
                    },
                    onEnterBack: () => {
                        titleHide.reverse();
                    }
                });


                // ====== 2 Title ======
                const secondTitleSplit = new SplitText(secondTitleRef.current, {
                    type: "words lines",
                    mask: "words",
                    wordsClass: "wordsecond++"
                })
                const title2Hide = gsap.timeline({ paused: true })
                    .to(secondTitleRef.current, {
                        scale: 0,
                        duration: 0.8,
                        ease: "power4.out"
                    })
                gsap.set(secondTitleSplit.words, { opacity: 0 })
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "45% center",
                    end: "+=600",
                    // markers: true,
                    onEnter: () => {
                        gsap.set(secondTitleSplit.words, { opacity: 0 });
                        gsap.fromTo(secondTitleSplit.words, { y: 50, opacity: 0 }, {
                            y: 0,
                            opacity: 1,
                            ease: "power2.out",
                            duration: 1,
                            stagger: { each: 0.05 }
                        }
                        );
                    },
                    onEnterBack: () => {
                        gsap.set(secondTitleSplit.words, { opacity: 0, y: 50 });
                        gsap.to(secondTitleSplit.words, {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: { each: 0.05 },
                            ease: "power2.out"
                        });
                    },
                    onLeave: () => {
                        gsap.to(secondTitleSplit.words, { opacity: 0, duration: 0.5 });
                    },
                    onLeaveBack: () => {
                        gsap.set(secondTitleSplit.words, { opacity: 0 });
                    }

                });



                // ====== Box Srcub =======

                const BoxBlur = gsap.utils.toArray(".box");
                tl.from(BoxBlur, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: { each: 0.04 },
                    ease: "power3.out"
                });


                gsap.fromTo(containerRef.current, { scaleX: 1, transformOrigin: "center" }, {
                    scaleX: 0.8,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "95% 40%",
                        end: "+=300",
                        scrub: true,
                    }
                });
            }
        })

    })

    return (
        <section ref={containerRef} className="heightInfoHomeLandscape w-full h-[150vh] mx-auto relative bg-white rounded-3xl overflow-hidden z-10">
            <div className="flex justify-center items-end w-full h-[75vh]">
                <h1 ref={firstTitleRef} className="absolute text-black text-3xl sm:text-3xl md:text-5xl lg:text-8xl text-center capitalize z-10">
                    login to discover<br />find groups nearby, export<br />activities, and make plans.
                </h1>
                <h1 ref={secondTitleRef} className="absolute bottom-60 text-black text-3xl sm:text-3xl md:text-5xl lg:text-8xl text-center capitalize z-10">
                    get out and live.<br />join the fun, meet people,<br />and make lasting memories.
                </h1>
            </div>
            <div className="box flex w-full justify-between items-end absolute bottom-30">
                <div className=" w-[500px] h-[500px] bg-[#34C404] -ml-20 rotate-15deg blur-3xl opacity-60" />
                <div className=" w-[500px] h-[500px] bg-[#FF3600] -mr-20 -rotate-15 blur-3xl opacity-60" />
            </div>
        </section>
    );
}
