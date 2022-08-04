import React from 'react'

function NotFound() {
    return (
        <div>
            <span className="uppercase font-space-mono text-2xl font-semibold px-8 tracking-tighter">
                404 Not Found
            </span>
            <div className="max-w-7xl mx-auto md:flex font-space-mono mt-28 px-8 md:px-0">
                {/* for the image */}
                <img
                    className="md:w-1/2"
                    src="https://raw.githubusercontent.com/xlramdhon1/Ramdhon1---devchallenges.io/main/img/Scarecrow.png"
                    alt="Scarecrow"
                />
                {/* Content */}
                <div className="md:ml-20 md:w-1/2">
                    <h2 className="md:text-6xl text-5xl text-slate-800 font-semibold leading-[70px] md:leading-[90px]">
                        I have bad news for you
                    </h2>
                    <p className="w-80 my-10 text-slate-700">
                        The page you are looking for might be removed or is temporarily
                        unavailable
                    </p>
                    <button className="text-sm bg-slate-900 text-white p-3 mb-3">
                        Back to homepage
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NotFound