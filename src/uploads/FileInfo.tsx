import React, { useEffect, useState } from 'react'
import './FileInfo.css'

interface FileInfoProps {
    file: File
    onDelete: (file: File) => void
}

const FileInfo: React.FC<FileInfoProps> = ({ file, onDelete }) => {
    const [imgData, setImgData] = useState<any>()
    useEffect(() => {
        const getImg = () => {
            let reader = new FileReader()
            reader.onload = (d) => {
                setImgData(d.target?.result)
            }
            reader.readAsDataURL(file)
        }
        getImg()
    }, [file])
    return (
        <>
            <div className="grid-container">
                <div className="grid-items">
                    <img className="img-info" src={imgData} width="200px" />
                </div>

                <div className="grid-items">
                    <p className="info">
                        <span style={{ fontWeight: "bold"}}>Filename:</span> {file.name}
                    </p>
                    <p className="info">
                        <span style={{ fontWeight: "bold"}}>FileType:</span> {file.type}
                    </p>
                    <p className="info">
                        <span style={{ fontWeight: "bold"}}>FileSize:</span> {file.size}
                    </p>
                    <button className="btn" onClick={() => onDelete(file)}>
                        delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default FileInfo
