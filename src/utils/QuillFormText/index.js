import React from 'react';
import ReactQuill from 'react-quill';

const QuillFormText = ({input, ...custom}) => {
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

    console.log(input.value);

    return (
        <div>
            <ReactQuill theme='snow'
                        {...input}>
                <div key="editor"
                     ref="editor"
                     className="quill-contents border_solid_top"
                     dangerouslySetInnerHTML={{__html: input.value}} />
            </ReactQuill>
        </div>

    )
};

export default QuillFormText;
