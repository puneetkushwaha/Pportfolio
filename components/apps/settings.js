import React from 'react';
import $ from 'jquery';

export function Settings(props) {
    const wallpapers = {
        "swordman": "/images/wallpapers/swordman-ink-washed-blade-moewalls-com.mp4",
        "spiderman": "/images/wallpapers/symbiote-spider-man-shattered-dimensions-moewalls-com.mp4",
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
                    <div className="w-full h-full" style={{ backgroundImage: `url(${wallpapers[props.currBgImgName] || wallpapers["swordman"]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}></div>
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
