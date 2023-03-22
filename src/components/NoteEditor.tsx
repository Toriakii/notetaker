import { useState } from "react";

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

type NoteEditorProps = {
  onSave: (note: { title: string; content: string; }) => void;
};

const NoteEditor = ({ onSave }: NoteEditorProps) => {
  const [title, setTitle] = useState<string>('');
  const [code, setCode] = useState<string>('');

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <input type="text" placeholder="Note title" className="input-primary input input-lg w-full font-bold" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
        </h2>
        <CodeMirror 
          value={code}
          onChange={(value) => setCode(value)}
          width="500px"
          height="30vh"
          minWidth="100%"
          minHeight="30vh"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          className="border border-gray-300"
        />
      </div>
      <div className="card-actions justify-end px-5 pb-3">
        <button 
          className="btn btn-primary" 
          onClick={() => {
            onSave({ title, content: code });
            setCode('');
            setTitle('');
          }}
          disabled={title.trim().length === 0 || code.trim().length === 0}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default NoteEditor