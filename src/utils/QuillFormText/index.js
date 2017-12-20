import React from 'react';
import ReactQuill from 'react-quill';

const QuillFormText = ({ input }) => {
    let _quillModules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ]
    };

    return (
        <ReactQuill
            {...input}
            modules={_quillModules}
            onChange={(newValue, delta, source) => {
                if (source === 'user') {
                    input.onChange(newValue);
                }
            }}
            onBlur={(range, source, quill) => {
                input.onBlur(quill.getHTML());
            }}
        />
    );
};

export default QuillFormText;
