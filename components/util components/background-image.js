import React from 'react'

export default function BackgroundImage(props) {
    const bg_images = {
        "swordman": "/images/wallpapers/swordman-ink-washed-blade-moewalls-com.mp4",
        "spiderman": "/images/wallpapers/symbiote-spider-man-shattered-dimensions-moewalls-com.mp4",
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

    const bg_image_path = bg_images[props.img] || bg_images["swordman"];

    return (
        <div style={{ backgroundImage: `url(${bg_image_path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
        </div>
    )
}
