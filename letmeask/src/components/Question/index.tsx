import { ReactNode } from 'react';
import cName from 'classnames';

import './question.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false
}: QuestionProps) {
  return (
    // em vez de usar esse if else ternario, podemos usar a classnames
    // Não entendi muito bem!! 
    <div className={cName(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered},
    )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  )
}