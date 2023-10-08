import React from 'react'
import "./cloud.css";

export const Cloud = ({ title = "Example", content = "xaxaxa", classname, titleStyles }: { title?: string, content?: string, classname?: string, titleStyles?: string }) => {
    return (
        <div className={`center ${classname}`}>
            <div id="cloud">
                <div className={`z-20 w-[100%] absolute text-center text-black`}>
                    <h1 className={`mt-[-20px] mb-2 font-bold text-xl text-[#46a1de] ${titleStyles}`}>{title}</h1>
                    <p className='text-sm px-6'>{content}</p>
                </div>
            </div>
        </div>
    )
}
