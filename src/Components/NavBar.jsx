"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export default function NabBar() {
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    // ✅ دخول navbar من فوق
    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        });

        let lastScroll = 0;

        ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
                const current = self.scroll();

                if (current > lastScroll && current > 80) {
                    gsap.to(navRef.current, {
                        y: "-100%",
                        duration: 0.5,
                        ease: "power2.out",
                    });
                } else {
                    gsap.to(navRef.current, {
                        y: "0%",
                        duration: 0.5,
                        ease: "power2.out",
                    });
                }

                lastScroll = current;
            },
        });
    }, []);

    const toggleMenu = () => {
        if (!isOpen) {
            gsap.to(mobileMenuRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        }

        setIsOpen(!isOpen);
    };

    // ✅ Scroll & Close
    const handleScroll = (target) => {
        gsap.to(mobileMenuRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
        });

        setIsOpen(false);

        gsap.to(window, {
            scrollTo: target,
            duration: 1.5,
            ease: "power2.out",
        });
    };

    return (
        <>
            <div className="fixed top-5 flex justify-center w-full z-9999">
                <div
                    ref={navRef}
                    className="bg-neutral-800 px-12 py-4 rounded-4xl shadow-2xl hidden md:block"
                >
                    <nav className="capitalize gap-10 text-white hidden md:flex">
                        <a className="cursor-pointer select-none" onClick={() => handleScroll(0)}>
                            what we are
                        </a>
                        <a
                            className="cursor-pointer select-none"
                            onClick={() => handleScroll("#OurValues")}
                        >
                            our values
                        </a>
                        <a
                            className="cursor-pointer select-none"
                            onClick={() => handleScroll("#HowItWork")}
                        >
                            how it work
                        </a>
                        <a
                            className="cursor-pointer select-none"
                            onClick={() => handleScroll("#SafetyTrust")}
                        >
                            safety & trust
                        </a>
                    </nav>
                </div>
            </div>
            <div className="fixed top-5 flex justify-end px-10 w-full z-9999">
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white text-2xl bg-neutral-800 px-4 py-2 rounded-full "
                >
                    ☰
                </button>
            </div>
            <div className="fixed flex justify-end px-10 w-full z-9999">
                <div
                    ref={mobileMenuRef}
                    className="fixed top-20 bg-neutral-800 text-white p-6 rounded-2xl opacity-0 -translate-y-5 md:hidden z-9999"
                >
                    <nav className="flex flex-col gap-5">
                        <button className="capitalize" onClick={() => handleScroll(0)}>what we are</button>
                        <button className="capitalize" onClick={() => handleScroll("#OurValues")}>
                            our values
                        </button>
                        <button className="capitalize" onClick={() => handleScroll("#HowItWork")}>
                            how it work
                        </button>
                        <button className="capitalize" onClick={() => handleScroll("#SafetyTrust")}>
                            safety & trust
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
}
