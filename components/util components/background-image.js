import React from 'react'

export default function BackgroundImage(props) {
    const bg_images = {
        "wall-1": "/images/wallpapers/wall1.jpg",
        "wall-2": "/images/wallpapers/wall2.jpg",
    };

    const bg_image_path = bg_images[props.img] || bg_images["wall-1"];
    const isVideo = bg_image_path.endsWith(".mp4");

    if (isVideo) {
        return (
            <div className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
                <video key={bg_image_path} autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={bg_image_path} type="video/mp4" />
                </video>
            </div>
        )
    }

    return (
        <div style={{ backgroundImage: `url(${bg_image_path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
        </div>
    )
}
