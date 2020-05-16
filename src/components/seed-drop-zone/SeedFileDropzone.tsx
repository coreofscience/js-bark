import React, { useState } from "react";
import { DropzoneRootProps, useDropzone } from "react-dropzone";
import "./SeedFileDropzone.css";

const SeedFileDropzone = () => {
  const getColor = (props: DropzoneRootProps) => {
    if (props.isDragAccept) {
      return "#00e676";
    }
    if (props.isDragReject) {
      return "#ff1744";
    }
    if (props.isDragActive) {
      return "#2196f3";
    }
    return "#eeeeee";
  };

  const [files, setFiles] = useState<File[]>([]);
  const acceptFiles = (acceptedFiles: File[]) =>
    setFiles([...files, ...acceptedFiles]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "image/*", onDrop: acceptFiles });

  return (
    <div className="container">
      <div
        {...getRootProps({
          style: {
            borderColor: getColor({ isDragActive, isDragAccept, isDragReject }),
          },
          className: "container-inner",
        })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <ul>
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeedFileDropzone;
