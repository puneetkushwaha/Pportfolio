import React from 'react';
import $ from 'jquery';

export function Settings(props) {
    const wallpapers = {
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

    let changeBackgroundImage = (e) => {
        props.changeBackgroundImage($(e.target).data("path"));
    }

    return (
        <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey"}>
            <div className=" md:w-2/5 w-2/3 h-1/3 m-auto my-4 overflow-hidden relative">
                {wallpapers[props.currBgImgName] && wallpapers[props.currBgImgName].endsWith(".mp4") ? (
                    <video key={wallpapers[props.currBgImgName]} autoPlay muted loop playsInline className="w-full h-full object-cover">
                        <source src={wallpapers[props.currBgImgName]} type="video/mp4" />
                    </video>
                ) : (
                    <div className="w-full h-full" style={{ backgroundImage: `url(${wallpapers[props.currBgImgName] || wallpapers["wall-2"]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}></div>
                )}
            </div>
            <div className="flex flex-wrap justify-center items-center border-t border-gray-900">
                {
                    Object.keys(wallpapers).map((name, index) => {
                        const isVideo = wallpapers[name].endsWith(".mp4");
                        const currentPath = wallpapers[name];
                        return (
                            <div key={index} tabIndex="1" onFocus={changeBackgroundImage} data-path={name} className={((name === props.currBgImgName) ? " border-yellow-700 " : " border-transparent ") + " md:w-56 md:h-40 w-28 h-20 m-2 outline-none border-4 border-opacity-80 relative overflow-hidden"}>
                                {isVideo ? (
                                    <video key={currentPath} muted loop playsInline className="w-full h-full object-cover pointer-events-none">
                                        <source src={currentPath} type="video/mp4" />
                                    </video>
                                ) : (
                                    <div className="w-full h-full pointer-events-none" style={{ backgroundImage: `url(${currentPath})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}></div>
                                )}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Settings


export const displaySettings = (props) => {
    return <Settings currBgImgName={props?.currBgImgName} changeBackgroundImage={props?.changeBackgroundImage}> </Settings>;
}
