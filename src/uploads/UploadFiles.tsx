import React, { useCallback, useState } from 'react'
import { FileError, FileRejection, useDropzone } from 'react-dropzone'
import SingleFileUploadWithProgress from './SigleFileUploadWithProgress'

interface Props {}

interface UploadableFile {
    file: File
    errors: FileError[]
}

const UploadFiles: React.FC<Props> = ({}) => {
    const [files, setFiles] = useState<UploadableFile[]>([])
    const onDrop = useCallback(
        (accFiles: File[], rejFiles: FileRejection[]) => {
            const mappedAcc = accFiles.map((file) => ({ file, errors: [] }))
            setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles])
        },
        []
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    })

    return (
        <>
            <div style={{ border: '1px solid #d1d1d1' }} {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop your files here ... </p>
                ) : (
                    <p>
                        Drag 'n' drop some files here, or click to select files
                    </p>
                )}
            </div>
            {files.map((fileWrapper, idx) => (
                <SingleFileUploadWithProgress
                    key={idx}
                    file={fileWrapper.file}
                />
            ))}
        </>
    )
}

export default UploadFiles
