import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useRef } from "react";

export default function App() {
  const quillRef = useRef<ReactQuill | null>(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleQuill = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={handleQuill}
      />
    </div>
  );
}
