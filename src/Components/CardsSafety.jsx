"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import starsEmoji from "@/image/starStruck.png";
import Image from "next/image";
import BMW from "@/image/bmw.jpg";
import pin from "@/image/pin.png";
import shield from "@/image/shield.png";
import pointing from "@/image/pointing.png";
import locked from "@/image/locked.png";
import manAccount from "@/image/ManAccount.jpg";
import symbolsOnMouth from "@/image/symbolsOnMouth.png";
import prohibited from "@/image/prohibited.png";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function HorizontalCards() {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);
    const horizontalTween = useRef(null);
    const cardSupport = useRef(null);
    const cardSupportTitle = useRef(null);
    const cardSupportP = useRef(null);
    const cardSupportInfo = useRef(null);
    const cardSupportEmoji = useRef(null);

    const cardPrivate = useRef(null);
    const cardPrivateTitle = useRef(null);
    const cardPrivateP = useRef(null);
    const PrivateMasg1 = useRef(null);
    const PrivateMasg2 = useRef(null);
    const PrivateMasg3 = useRef(null);

    const cardAnticipating = useRef(null);
    const cardAnticipatingTitle = useRef(null);
    const cardAnticipatingP = useRef(null);
    const shieldRef = useRef(null);
    const pointingRef = useRef(null);
    const lockedRef = useRef(null);

    const cardCommunity = useRef(null);
    const cardCommunityTitle = useRef(null);
    const cardCommunityP = useRef(null);

    const cardZero = useRef(null);
    const cardZeroTitle = useRef(null);
    const cardZeroP = useRef(null);
    const infoSafteyRef = useRef(null);
    const EmojiRef = useRef(null);
    const prohibitedRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current;

        const isMobile = window.innerWidth < 1000;

        if (isMobile) {
            cards.style.display = "flex";
            cards.style.overflowX = "auto";
            cards.style.scrollSnapType = "x mandatory";

            Array.from(cards.children).forEach((card) => {
                card.style.scrollSnapAlign = "start";
            });

            return; // Stop GSAP here
        }

        const totalWidth = cards.scrollWidth - window.innerWidth;

        horizontalTween.current = gsap.to(cards, {
            x: -totalWidth,
            ease: "none",
            force3D: true,
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        });

    });
    // =========== Ainmation cards ==============

    useGSAP(() => {
        const tlCardSupport = gsap.timeline({
            scrollTrigger: {
                trigger: cardsRef.current,
                start: "top center",
                toggleActions: "play none none none",
            }
        })
        const cardSupportTitleSplit = new SplitText(cardSupportTitle.current, {
            type: "words",
            mask: "words"
        })
        tlCardSupport.from(cardSupportTitleSplit.words, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,

        })
        const cardSupportPSpilt = new SplitText(cardSupportP.current, {
            type: "lines",
            mask: "lines"
        })
        tlCardSupport.from(cardSupportPSpilt.lines, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        }, "<=20%")
        tlCardSupport.from(cardSupportInfo.current, {
            opacity: 0,
            x: 50,
            duration: 0.3,
            ease: "power2.out"
        })
        tlCardSupport.from(cardSupportEmoji.current, {
            scale: 0,
            duration: 1,
            rotate: -360,
            ease: "power4.out"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardsRef.current,
                containerAnimation: horizontalTween.current,
                start: "left 40%",
                toggleActions: "play none none none",
                // markers: true
            }
        })
        const PrivateTitleSplit = new SplitText(cardPrivateTitle.current, {
            type: "words",
            mask: "words"
        })
        tl.from(PrivateTitleSplit.words, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        })
        const PrivatePSpilt = new SplitText(cardPrivateP.current, {
            type: "lines",
            mask: "lines"
        })
        tl.from(PrivatePSpilt.lines, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        }, "<=20%")
        gsap.set([PrivateMasg1.current, PrivateMasg2.current, PrivateMasg3.current], { opacity: 0 })
        tl.fromTo(PrivateMasg1.current, { opacity: 0, y: 50 }, {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            onComplete: () => {
                gsap.fromTo(PrivateMasg2.current, { opacity: 0, y: 50 }, {
                    y: 0,
                    opacity: 1,
                    ease: "power3.out",
                })
            },
        }, "<")
        tl.fromTo(PrivateMasg3.current, { opacity: 0, y: 50 }, {
            y: 0,
            opacity: 1,
            ease: "power3.out",
        })


        const cardAnticipatingTitleSplit = new SplitText(cardAnticipatingTitle.current, {
            type: "words",
            mask: "words"
        })
        const cardAnticipatingPSpilt = new SplitText(cardAnticipatingP.current, {
            type: "lines",
            mask: "lines"
        })
        tl.from(cardAnticipatingTitleSplit.words, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        }, "<")
        tl.from(cardAnticipatingPSpilt.lines, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        }, "<20%")
        tl.fromTo(shieldRef.current, { scale: 1, x: 0 }, {
            rotate: -360,
            scale: 2,
            x: 10,
            duration: 0.7,
            ease: "power2.out"
        }, "<")
        tl.fromTo(pointingRef.current, { x: 0 }, {
            x: -30,
            duration: 0.7,
            ease: "power2.out"
        }, "<")
        tl.fromTo(lockedRef.current, { scale: 1 }, {
            scale: 0.7,
            x: 20,
            duration: 0.7,
            ease: "power2.out"
        }, "<")


        const cardCommunityTitleSplit = new SplitText(cardCommunityTitle.current, {
            type: "words",
            mask: "words"
        })
        const cardCommunityPSpilt = new SplitText(cardCommunityP.current, {
            type: "lines",
            mask: "lines"
        })


        tl.from(cardCommunityTitleSplit.words, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        }, "<")
        tl.from(cardCommunityPSpilt.lines, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        }, "<20%")
        const chats = gsap.utils.toArray(".chats");
        tl.from(chats, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })


        const cardZeroTitleSplit = new SplitText(cardZeroTitle.current, {
            type: "words",
            mask: "words"
        })
        const cardZeroPSpilt = new SplitText(cardZeroP.current, {
            type: "lines",
            mask: "lines"
        })

        tl.from(cardZeroTitleSplit.words, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        }, "<")
        tl.from(cardZeroPSpilt.lines, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        }, "<20%")
        const infoSafteySplit = new SplitText(infoSafteyRef.current, {
            type: "words",
            mask: "words"
        })
        tl.from(infoSafteySplit.words, {
            y: 50,
            opacity: 0,
            ease: "power2.out",
            stagger: { each: 0.05 },
            duration: 0.7,
        })
        tl.from(EmojiRef.current, {
            y: -50,
            opacity: 0,
            ease: "power3.out",
            onComplete: () => {
                gsap.from(prohibitedRef.current, {
                    rotate: 720,
                    ease: "power1.inOut",
                    duration: 1
                })
            }
        })

    })

    return (
        <section
            ref={sectionRef}
            className="heightSafetyCardsLandscape w-full h-screen bg-white overflow-hidden"
        >
            <div
                ref={cardsRef}
                className="heightSafetyCardsLandscape inline-flex h-screen items-center gap-10 px-20"
            >
                <div ref={cardsRef} className="inline-flex h-screen items-center gap-10 px-20" >

                    <div ref={cardSupport} className="box w-[400px] h-[500px] bg-neutral-200 rounded-xl relative">
                        <div className="absolute top-10 w-full px-20">
                            <div ref={cardSupportEmoji} className="absolute top-20 w-[100px]">
                                <Image src={starsEmoji} alt="" />
                            </div>
                            <div className="ml-30 my-10 -rotate-8">
                                <h1 ref={cardSupportInfo} className="text-black bg-lime-400 text-xl py-3 px-7 rounded-2xl capitalize whitespace-nowrap">request<br />sent <span>👈</span></h1>
                            </div>
                        </div>
                        <div className="absolute bottom-10 px-10 text-black">
                            <h1 ref={cardSupportTitle} className="pb-5 text-2xl capitalize">support system</h1>
                            <p ref={cardSupportP} className="capitalize text-neutral-500">seamless support, right where you need it - no hassle, just help.</p>
                        </div>
                    </div>


                    <div ref={cardPrivate} className="box w-[400px] h-[500px] bg-neutral-200 rounded-xl relative">
                        <div className="my-10 mx-10 ">
                            <div ref={PrivateMasg1} className="w-full h-20 bg-white rounded-2xl" />
                            <div ref={PrivateMasg2} className="w-full h-20 bg-white rounded-2xl my-5 relative">
                                <div className="absolute ml-5 flex w-full h-full items-center capitalize">
                                    <Image src={pin} alt="pin" className="absolute w-10 left-60 -top-9" />
                                    <div className="w-18 h-12">
                                        <Image src={BMW} alt="BMW" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div className="text-base text-black">
                                        <h1 className="mx-6 py-1">you joined the instagram!</h1>
                                        <p className="text-xs mx-6 text-neutral-500">you can now check the address and chat with the squad Mates</p>
                                    </div>
                                </div>
                            </div>
                            <div ref={PrivateMasg3} className="w-full h-20 bg-white rounded-2xl" />
                        </div>
                        <div className="absolute bottom-10 px-10 text-black">
                            <h1 ref={cardPrivateTitle} className="pb-5 text-2xl capitalize">private squads</h1>
                            <p ref={cardPrivateP} className="capitalize text-neutral-500">your personal information is protected and private squads are invite only.</p>
                        </div>
                    </div>


                    <div ref={cardAnticipating} className="box w-[400px] h-[500px] bg-neutral-200 rounded-xl relative">
                        <div className="absolute px-10 py-10">
                            <div ref={shieldRef} className="px-5 py-5 rounded-full bg-white relative left-10 top-10 ">
                                <Image src={shield} alt="shield" className="w-10" />
                            </div>
                            <div ref={pointingRef} className="px-5 py-5 rounded-full bg-lime-400 relative left-50">
                                <Image src={pointing} alt="pointing" className="w-10" />
                            </div>
                            <div ref={lockedRef} className="px-5 py-5 rounded-full bg-black relative left-20">
                                <Image src={locked} alt="locked" className="w-10" />
                            </div>
                        </div>
                        <div className="absolute bottom-10 px-10 text-black">
                            <h1 ref={cardAnticipatingTitle} className="pb-5 text-2xl capitalize">anticipating harms</h1>
                            <p ref={cardAnticipatingP} className="capitalize text-neutral-500">our ai tools proactively identify misuse and ensure a safe environment for all.</p>
                        </div>
                    </div>


                    <div ref={cardCommunity} className="box w-[400px] h-[500px] bg-neutral-200 rounded-xl relative">
                        <div className="absolute px-10 py-25 w-full m-auto">
                            <div className="text-black">
                                <h1 className="chats ml-15 px-4 py-2 bg-white rounded-br-4xl rounded-tl-4xl rounded-tr-4xl shadow-2xl w-35">Hello, darling!</h1>
                                <div className="chats flex items-center gap-5">
                                    <div className="w-10 h-10 bg-lime-500 rounded-full" />
                                    <h1 className="my-2 w-50 px-4 py-2 bg-white rounded-br-4xl rounded-tr-4xl shadow-2xl">We are always ready to help you!❤️</h1>
                                </div>
                            </div>
                            <div className="chats mt-5 flex justify-end items-center text-black gap-5">
                                <h1 className="bg-white px-4 py-2 rounded-bl-4xl rounded-tl-4xl rounded-tr-4xl shadow-2xl">Thank you!</h1>
                                <div className="w-10 h-10">
                                    <Image src={manAccount} alt="man" className="w-full h-full object-cover rounded-full" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-10 px-10 text-black">
                            <h1 ref={cardCommunityTitle} className="pb-5 text-2xl capitalize">community guidelines</h1>
                            <p ref={cardCommunityP} className="capitalize text-neutral-500">we promote respect and positive behavior through clear community rules.</p>
                        </div>
                    </div>


                    <div ref={cardZero} className="box w-[400px] h-[500px] bg-neutral-200 rounded-xl relative">
                        <div className="absolute px-10 py-35">
                            <div className="w-full flex justify-center">
                                <div ref={EmojiRef} className="absolute top-0 bg-black py-5 px-10 rounded-xl">
                                    <Image ref={prohibitedRef} src={prohibited} alt="prohibited" className="absolute w-20 scale-130" />
                                    <Image src={symbolsOnMouth} alt="symbol OnMouth" className="w-20" />
                                </div>
                            </div>
                            <div ref={infoSafteyRef} className="flex justify-center w-full">
                                <h1 className="text-neutral-500 capitalize text-6xl text-center">Safety is our priority</h1>
                            </div>
                        </div>
                        <div className="absolute bottom-10 px-10 text-black">
                            <h1 ref={cardZeroTitle} className="pb-5 text-2xl capitalize">zero tolerance policy</h1>
                            <p ref={cardZeroP} className="capitalize text-neutral-500">we uphold a strict ban on harassment, hate speech, and abusive behavior.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
