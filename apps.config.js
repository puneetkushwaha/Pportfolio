import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutPuneet } from './components/apps/puneet';
import { displayTerminalCalc } from './components/apps/calc';
import { displayJarvis } from './components/apps/jarvis';
import { displayCertificates } from './components/apps/certificates';
import { displayGallery } from './components/apps/gallery';


const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-puneet",
        title: "About Puneet",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutPuneet,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, // India Top 50 Playlist 😅
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
    {
        id: "github",
        title: "GitHub",
        icon: './themes/Yaru/apps/github.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://github.com/puneetkushwaha",
        screen: () => { },
    },
    {
        id: "linkedin",
        title: "LinkedIn",
        icon: '/images/logos/linkedin.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        isExternalApp: true,
        url: "https://www.linkedin.com/in/puneettkushwaha/"
    },

    {
        id: "column-break",
        title: "",
        icon: "",
        disabled: true,
        favourite: false,
        desktop_shortcut: true,
        screen: () => { },
    },
    {
        id: "certificates",
        title: "Certificates",
        icon: '/images/logos/certificate_3d.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayCertificates,
    },
    {
        id: "gallery",
        title: "Gallery",
        icon: '/images/logos/gallery_icon.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGallery,
    },
    {
        id: "resume",
        title: "Resume",
        icon: '/images/logos/resume.svg',
        disabled: false,
        favourite: true, // Added to sidebar (activities)
        desktop_shortcut: true,
        isExternalApp: true,
        url: "./files/Puneet-Kushwaha-Resume.pdf"
    },
    {
        id: "jarvis",
        title: "Jarvis AI",
        icon: '/images/logos/jarvis.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayJarvis,
    }
]

export default apps;