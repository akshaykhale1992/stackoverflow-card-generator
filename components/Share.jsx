import { React, useState } from 'react'

const Share = (props) => {

    const [isShareMenu, setShareMenu] = useState(false);
    const onDownloadClick = () => {
        props.onDownloadPng();
        setShareMenu(false);
    }

    return (
        <div id="hide-in-card">
            <button className="hover:text-orange-600 duration-300 ease-in-out" onClick={() => setShareMenu(!isShareMenu)}>
                {(isShareMenu) ?
                    < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                }
            </button>
            {isShareMenu &&
                <div className="absolute shadow-lg px-4 py-2 w-36 bg-slate-50 flex flex-col text-xs left-55 text-center" >
                    <button className="flex flex-row" onClick={onDownloadClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-orange-600 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Save as PNG
                    </button>
                </div>
            }
        </div >
    )
}

export default Share
