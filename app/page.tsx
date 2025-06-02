'use client';

import Image from "next/image";
import {useEffect, useRef} from "react";
import "./mockup.css";

export default function Home() {
    const mockupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const el = mockupRef.current;
            if (el) {
                el.classList.remove('bounce-in');
                void el.offsetWidth;
                el.classList.add('bounce-in');
            }
        }, 5000);

        const opacityDelay = setTimeout(() => {
            const el = mockupRef.current;
            if (el) {
                el.classList.add('loaded');
            }
        }, 500);

        const pcOpenDelay = setTimeout(() => {
            const el = mockupRef.current;
            if (el) {
                el.classList.add('opened');
            }
        }, 2000);

        return () => {
            clearInterval(interval);
            clearInterval(opacityDelay);
            clearInterval(pcOpenDelay);
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-black text-white">
            <div className="w-full max-w-screen-sm mb-8">
                <div
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-center bg-opacity-70 rounded-lg px-4 py-3">
                    Şimdi bilgisayarınızı açın,<br className="sm:hidden"/> <b>td4p.thy.com</b> adresine girin ve nelerle
                    karşılaşacağınızı görün!
                </div>
            </div>

            <div
                ref={mockupRef}
                className="mockup max-w-xs sm:max-w-lg md:max-w-2xl w-full mx-auto"
            >
                <div className="part top">
                    <Image src="/pc-top.svg" alt="PC Top" className="top" width={805} height={14} priority/>
                    <Image src="/pc-cover.svg" alt="PC Cover" className="cover" width={694} height={466} priority/>
                    <div
                        className="content w-full h-[190px] sm:h-[300px] md:h-[400px] bg-fuchsia-100 rounded-xl">
                        <div className="flex items-center justify-center text-center">
                            <div className="mt-[25%]">
                                <span
                                    className="lamp-flicker text-5xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-900 via-fuchsia-900 to-purple-700 text-transparent bg-clip-text tracking-widest drop-shadow-xl select-none w-full"
                                    style={{fontFamily: 'serif, ui-serif, Georgia'}}>?</span>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="part bottom">
                    <Image src="/pc-cover.svg" alt="PC Cover" className="cover" width={694} height={466}/>
                    <Image src="/pc-bottom.svg" alt="PC Bottom" className="bottom" width={805} height={21}/>
                </div>
            </div>
        </div>
    );
}
