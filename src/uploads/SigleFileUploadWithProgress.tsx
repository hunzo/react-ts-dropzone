import React, { useEffect, useState } from 'react'
import FileInfo from './FileInfo'
interface Props {
    file: File
}
const SingleFileUploadWithProgress: React.FC<Props> = ({ file}) => {
    const [fileData, setFileData] = useState<File[]>([])
    useEffect(() => {
        setFileData((fileData) => [...fileData, file])
    }, [file])

    const onDelete = (file: File) => {
        console.log(`remove file name: ${file.name}`)
        setFileData(fileData.filter(fw => fw !== file))
    }
    return (
        <>
            {fileData.map((file, idx) => <FileInfo file={file} key={idx} onDelete={onDelete}/> )}
        </>
    )
}
export default SingleFileUploadWithProgress
