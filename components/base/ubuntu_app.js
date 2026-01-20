import React, { Component } from 'react'

export class UbuntuApp extends Component {

    openApp = () => {
        if (this.props.isExternalApp && this.props.url) {
            window.open(this.props.url, "_blank");
        } else {
            this.props.openApp(this.props.id);
        }
    }

    render() {
        return (
            <div
                className="p-1 m-px z-10 bg-white bg-opacity-0 hover:bg-opacity-10 focus:bg-ub-orange focus:bg-opacity-50 focus:border-yellow-700 focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-24 flex flex-col justify-center items-center text-center text-[11px] font-normal text-white relative transition-all duration-100 group"
                id={"app-" + this.props.id}
                onDoubleClick={this.openApp}
                tabIndex={0}
            >
                <div className="relative mb-1">
                    <img
                        width="48px"
                        height="48px"
                        className="w-12 h-12"
                        src={this.props.icon}
                        alt={"Ubuntu " + this.props.name}
                    />
                    {this.props.isExternalApp && (
                        <div className="absolute -bottom-0.5 -right-0.5">
                            <img
                                src="./themes/Yaru/status/external-link.svg"
                                alt="External Link"
                                className="w-3 h-3 filter invert opacity-80"
                            />
                        </div>
                    )}
                </div>
                <span className="px-1 py-0.5">
                    {this.props.name}
                </span>
            </div>
        )
    }
}

export default UbuntuApp
