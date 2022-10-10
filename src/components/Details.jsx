import React, {useState} from 'react';

export default function Details({summary, children}) {
    const [open, setOpen] = useState(false)
    
    function handleClick(e) {
        //console.log(e.target.attributes.role.value)
        if (e.target.attributes?.role?.value.toString() === "openClose" ) {
            if (!open) {setOpen(true); return}
            setOpen(false)
        }
    }
    
    return (
        <div className={`flex justify-between bg-grey/20 w-full tracking-wide`} onClick={e => handleClick(e)}>
            <details className={`w-full z-10`}>
                <summary className={`select-none p-6 marker:content-[''] w-full cursor-pointer text-grey-light`} role='openClose'>
                    {summary}
                </summary>
                <div className={`px-6 pb-6`}>
                    {children}
                </div>
            </details>
            <div className={`text-4xl mt-2 mr-6 -ml-12 h-0 w-6 text-center z-0 bg-red-200`}>
                {open ? '-' : '+'}
            </div>
        </div>
    )
}