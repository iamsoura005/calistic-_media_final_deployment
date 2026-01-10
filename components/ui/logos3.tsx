"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
    id: string;
    description: string;
    image: string;
    className?: string;
    href: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    heading = "Collabed with",
    logos = [
        {
            id: "logo-1",
            description: "Avish fragnance",
            image: "/logos/Avish_frragnance.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/avishfragrance?igsh=MTFscTcwNGFyYndkaQ==",
        },
        {
            id: "logo-2",
            description: "Barikothi",
            image: "/logos/barikothi.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/barikothi?igsh=OTdqdHJxcW9pNmJv",
        },
        {
            id: "logo-3",
            description: "Bengal t20",
            image: "/logos/bengal_t20.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/bengalprot20league?igsh=YTJ2eTB2MTNwMTc5",
        },
        {
            id: "logo-4",
            description: "Caravan.art.fashion",
            image: "/logos/caravan.art.fashion.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/caravan.art.fashion?igsh=dnhtZ3BvNWh3Yjh3",
        },
        {
            id: "logo-5",
            description: "Drivers4me",
            image: "/logos/drivers4me.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/drivers4me?igsh=am42bXJyc3hxN3dn",
        },
        {
            id: "logo-6",
            description: "Happinest India",
            image: "/logos/happinest_india.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/happinest_india?igsh=ZWoyYWJlZDNxbmJz",
        },
        {
            id: "logo-7",
            description: "Joi Farm",
            image: "/logos/Joi_Farm.jpg",
            className: "h-16 w-auto object-contain",
            href: "https://www.instagram.com/joi__farm?igsh=MWc4ODZ3ZnY4OWRkcw==",
        },
        {
            id: "logo-8",
            description: "Royal Cruiser",
            image: "/logos/royal_cruise.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/theroyalcruiser?igsh=MWY3MGE5MGNzYXplcw==",
        },
        {
            id: "logo-9",
            description: "Rajbari bawali official",
            image: "/logos/therajbaribawaliofficial.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/therajbaribawaliofficial?igsh=a2t2bmNob2FyMWIw",
        },
        {
            id: "logo-10",
            description: "Times music bangla",
            image: "/logos/timesmusicbangla.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/timesmusicbangla?igsh=MWVscm05YWI5bnI0ZA==",
        },
        {
            id: "logo-11",
            description: "Wow momo",
            image: "/logos/wow_momo.jpg",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/wowmomos?igsh=cHVpcmtqeDltZWx3",
        },
        {
            id: "logo-12",
            description: "Swiggy",
            image: "/logos/swiggy.png",
            className: "h-20 w-auto object-contain",
            href: "https://www.instagram.com/reel/DPOB-_CD9Q-/?igsh=bzBmYzgyaDBpbTNt",
        },
    ],
}: Logos3Props) => {
    return (
        <section className="py-24 bg-[#030303] text-white">
            <div className="w-full h-px bg-linear-to-r from-transparent via-yellow-500/20 to-transparent" />
            <div className="container flex flex-col items-center text-center">
                <h1 className="my-8 text-2xl font-bold text-pretty lg:text-4xl text-white">
                    {heading}
                </h1>
            </div>
            <div className="pt-10 md:pt-16 lg:pt-20">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false })]}
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {logos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="flex basis-1/4 justify-center pl-2 sm:basis-1/5 md:basis-1/6 lg:basis-1/6 md:pl-4"
                                >
                                    <div className="mx-2 flex flex-col items-center gap-3 w-full">
                                        <a
                                            href={logo.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex shrink-0 items-center justify-center bg-white/5 p-4 rounded-lg w-full h-32 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] active:scale-95"
                                        >
                                            <img
                                                src={logo.image}
                                                alt={logo.description}
                                                className="h-full w-full object-contain"
                                            />
                                        </a>
                                        <span className="text-sm text-white/70 font-medium text-center">
                                            {logo.description}
                                        </span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            <div className="w-full h-px bg-linear-to-r from-transparent via-yellow-500/20 to-transparent mt-10 md:mt-20" />
        </section>
    );
};

export { Logos3 };
