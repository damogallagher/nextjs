'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloundinaryResult {
    public_id: string
}
const UploadPage = () => {
    const [publicId, setPublicId] = useState('');
    return (
        <>
            {publicId && <CldImage src={publicId} alt="Image ALT" width={150} height={150} />}
            <div>
                <CldUploadWidget uploadPreset='sjgyolmb'
                    options={{
                        sources: ['local'],
                        maxFiles: 5,
                        multiple: false,
                        styles: {}
                    }}
                    onSuccess={(result, widget) => {
                        console.log(result);
                        if (result.event !== "success") return;
                        const info = result.info as CloundinaryResult
                        console.log("info", info);
                        setPublicId(info.public_id);
                    }}>
                    {({ open }) => <button className='btn btn-primary'
                        onClick={() => open()}>Upload</button>}
                </CldUploadWidget>
            </div>
        </>
    )
}

export default UploadPage
