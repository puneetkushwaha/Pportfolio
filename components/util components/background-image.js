import React from 'react'

export default function BackgroundImage(props) {
    const bg_images = {
        "wall-1": "/images/wallpapers/wall-1.webp",
        "wall-2": "/images/wallpapers/wall-2.webp",
        "wall-3": "/images/wallpapers/wall-3.webp",
        "wall-4": "/images/wallpapers/wall-4.webp",
        "wall-5": "/images/wallpapers/wall-5.webp",
        "wall-6": "/images/wallpapers/wall-6.webp",
        "wall-7": "/images/wallpapers/wall-7.webp",
        "wall-8": "/images/wallpapers/wall-8.webp",
        "berserker": "/images/wallpapers/berserker-armor-dragon-slayer-moewalls-com.mp4",
        "cat-bee": "/images/wallpapers/cat-and-bee-moewalls-com.mp4",
        "dark-queen": "/images/wallpapers/dark-queen-knight-moewalls-com.mp4",
        "dodge": "/images/wallpapers/dodge-challenger-black-panther-moewalls-com.mp4",
        "guts": "/images/wallpapers/guts-crimson-fury-berserk-moewalls-com.mp4",
        "swordman": "/images/wallpapers/swordman-ink-washed-blade-moewalls-com.mp4",
        "spiderman": "/images/wallpapers/symbiote-spider-man-shattered-dimensions-moewalls-com.mp4",
        "yin-yang": "/images/wallpapers/yin-yang-swordsman-moewalls-com.mp4",
    };

    const isVideo = bg_images[props.img] && bg_images[props.img].endsWith(".mp4");

    if (isVideo) {
        return (
            <div className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
                <video key={bg_images[props.img]} autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={bg_images[props.img]} type="video/mp4" />
                </video>
            </div>
        )
    }

    return (
        <div style={{ backgroundImage: `url(${bg_images[props.img]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
        </div>
    )
}
