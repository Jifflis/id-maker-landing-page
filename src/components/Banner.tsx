"use client";

import React from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function Banner() {
    return (
        <section className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-700 flex flex-col md:flex-row items-center px-6 gap-6 pt-4">
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4 text-white">
                    Revolutionize the Way You Create ID Cards!
                </h1>
                <p className="mb-8 text-gray-200">
                    Say goodbye to boring designs and time-consuming processes!
                    Introducing the <strong>Ultimate ID Maker</strong> — fast, fun, and incredibly easy!
                </p>
                <a
                    href="https://play.google.com/store/apps/details?id=com.jeff.id.maker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4">
                    <Image
                        src="/google_play.png"
                        alt="Get it on Google Play"
                        width={135}
                        height={40}
                        className="hover:opacity-80 transition-opacity"
                    />
                </a>
            </div>

            <div className="md:w-1/2 relative w-full h-100 md:h-100 overflow-hidden">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    className="w-full h-full"
                >
                    <SwiperSlide>
                        <Image
                            src="/banner1.svg"
                            alt="Slide 1"
                            fill
                            style={{ objectFit: 'scale-down' }}
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/banner2.svg"
                            alt="Slide 2"
                            fill
                            style={{ objectFit: 'scale-down' }}
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/banner3.svg"
                            alt="Slide 3"
                            fill
                            style={{ objectFit: 'scale-down' }}
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/banner4.svg"
                            alt="Slide 4"
                            fill
                            style={{ objectFit: 'scale-down' }}
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/banner5.svg"
                            alt="Slide 5"
                            fill
                            style={{ objectFit: 'scale-down' }}
                            priority
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}