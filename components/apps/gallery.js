import React, { useState } from 'react';
import { folders } from './puneet';

export function Gallery() {
    const [currentView, setCurrentView] = useState('folders'); // 'folders' or 'detail'
    const [activeFolderId, setActiveFolderId] = useState(null);
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);

    const activeFolder = activeFolderId ? folders[activeFolderId] : null;

    const openFolder = (id) => {
        setActiveFolderId(id);
        setCurrentView('detail');
    };

    const goBackToFolders = () => {
        setCurrentView('folders');
        setActiveFolderId(null);
    };

    const nextMedia = (e) => {
        e.stopPropagation();
        if (selectedMediaIndex !== null && activeFolder) {
            setSelectedMediaIndex((selectedMediaIndex + 1) % activeFolder.media.length);
        }
    };

    const prevMedia = (e) => {
        e.stopPropagation();
        if (selectedMediaIndex !== null && activeFolder) {
            setSelectedMediaIndex((selectedMediaIndex - 1 + activeFolder.media.length) % activeFolder.media.length);
        }
    };

    const renderFolderGrid = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
            {Object.keys(folders).map((id) => (
                <div
                    key={id}
                    onClick={() => openFolder(id)}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 bg-opacity-40 hover:border-ub-orange transition-all duration-500 shadow-2xl"
                >
                    <div className="h-64 overflow-hidden">
                        <img
                            src={folders[id].thumbnail}
                            alt={folders[id].title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 bg-ub-orange text-[10px] font-bold text-white rounded uppercase tracking-wider">
                                {folders[id].date}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-ub-orange transition-colors">
                            {folders[id].title}
                        </h3>
                        <p className="text-gray-300 text-sm line-clamp-1 italic">
                            {folders[id].issuer}
                        </p>
                    </div>
                    {/* Folder Icon Overlay */}
                    <div className="absolute top-4 right-4 p-3 bg-gray-800 bg-opacity-80 rounded-full border border-gray-700 group-hover:bg-ub-orange group-hover:border-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderFolderDetail = () => (
        <div className="p-4 animate-fadeIn">
            <button
                onClick={goBackToFolders}
                className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-bold">Back to Folders</span>
            </button>

            <div className="bg-gray-800 bg-opacity-40 rounded-2xl p-6 mb-8 border border-gray-700 shadow-xl backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white">{activeFolder.title}</h1>
                        <p className="text-ub-orange font-semibold italic">{activeFolder.issuer} ({activeFolder.date})</p>
                    </div>
                    <div className="flex -space-x-2">
                        {activeFolder.media.slice(0, 3).map((m, i) => (
                            <img key={i} src={m.url} className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover" alt="preview" />
                        ))}
                        {activeFolder.media.length > 3 && (
                            <div className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-[10px] text-white">
                                +{activeFolder.media.length - 3}
                            </div>
                        )}
                    </div>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-4xl italic">
                    {activeFolder.description}
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {activeFolder.media.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedMediaIndex(idx)}
                        className="aspect-square relative group cursor-pointer overflow-hidden rounded-xl border border-gray-700 hover:border-ub-orange transition-all duration-300 shadow-lg"
                    >
                        {item.type === "video" ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 z-10">
                                <div className="p-2 bg-ub-orange rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        ) : null}
                        <img
                            src={item.thumbnail || item.url}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-2">
                            <span className="text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="h-full w-full bg-ub-cool-grey overflow-y-auto relative custom-scrollbar">
            {/* Header */}
            <div className="flex items-center gap-4 p-6 bg-gray-900 bg-opacity-30 border-b border-gray-800 sticky top-0 z-20 backdrop-blur-md">
                <div className="p-2 bg-ub-orange rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Gallery</h1>
            </div>

            {currentView === 'folders' ? renderFolderGrid() : renderFolderDetail()}

            {/* Media Viewer Modal */}
            {selectedMediaIndex !== null && activeFolder && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-xl animate-fadeIn">
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">

                        {/* Control Bar */}
                        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-[110]">
                            <div className="text-white">
                                <h2 className="text-lg font-bold">{activeFolder.media[selectedMediaIndex].title}</h2>
                                <p className="text-xs text-gray-400">{selectedMediaIndex + 1} / {activeFolder.media.length}</p>
                            </div>
                            <button
                                onClick={() => setSelectedMediaIndex(null)}
                                className="p-3 bg-white/10 hover:bg-ub-orange transition-colors rounded-full text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevMedia}
                            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-ub-orange transition-all rounded-full text-white z-[110] backdrop-blur-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextMedia}
                            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-ub-orange transition-all rounded-full text-white z-[110] backdrop-blur-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Media Content */}
                        <div className="max-w-[85vw] max-h-[75vh] flex items-center justify-center animate-zoomIn">
                            {activeFolder.media[selectedMediaIndex].type === "video" ? (
                                <video
                                    key={activeFolder.media[selectedMediaIndex].url}
                                    src={activeFolder.media[selectedMediaIndex].url}
                                    controls
                                    autoPlay
                                    muted
                                    className="max-w-full max-h-full rounded-lg shadow-2xl border border-white/10"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img
                                    src={activeFolder.media[selectedMediaIndex].url}
                                    alt={activeFolder.media[selectedMediaIndex].title}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-12 text-center text-gray-500 text-xs italic pb-12">
                * Reliving the best moments from my journey in tech.
            </div>
        </div>
    );
}

export const displayGallery = () => {
    return <Gallery />;
}
