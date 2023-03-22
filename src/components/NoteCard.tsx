import { type Note } from '@prisma/client';
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';

type NoteCardProps = {
  note: Note;
  onDelete: () => void;
}

const NoteCard = ({ note, onDelete }: NoteCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className='card mt-5 border border-gray-200 bg-base-100 shadow-xl'>
      <div className="card-body m-0 p-3">
        <div className={`collapse-arrow ${isExpanded ? 'collapse-open' : 'collapse'}`} onClick={() => setIsExpanded(!isExpanded)}>
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className='prose lg:prose-xl'>
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <button className="btn btn-xs btn-error px-5" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard