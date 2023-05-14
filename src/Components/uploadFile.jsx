import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";

const UploadFile = ({
                        label,
                        onChange,
                    }) => {
    const [file, setFile] = useState();
    const [isDragging, setIsDragging] = useState(false);
    const fileInput = useRef();

    useEffect(() => {
        if (file) {
            onChange(file);
        }
    }, [file]);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type === "application/pdf" ||
                file.type === "image/jpeg" ||
                file.type === "image/png" ||
                file.type === "image/jpg" ||
                file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                setFile(file);
                onChange(file);
            } else {
                alert("Only PDF, JPG, PNG, JPEG, and DOCX files are allowed.");
            }
        }
    };

    return (
        <div>
            <label htmlFor="file">
                {label}
                <input
                    ref={fileInput}
                    type="file"
                    id="file"
                    accept="application/pdf,image/jpeg,image/png,image/jpg,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => setFile(e.target.files[0])}
                    draggable="true"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                />
            </label>
            {isDragging && <div>Dragging...</div>}
        </div>
    );
};

const StyledUploadFile = styled(UploadFile)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  cursor: pointer;
`;

export default StyledUploadFile;
