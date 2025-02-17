import React from "react";

type Props = {
  todos: string[];
  onClickBack: (index: number) => void;
};

export const CompleteTodos: React.FC<Props> = ({ todos, onClickBack }) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
