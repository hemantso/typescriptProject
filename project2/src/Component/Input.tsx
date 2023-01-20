import React from 'react';

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({ todo, setTodo, handleAdd}) => {
  return (
    <form onSubmit={handleAdd} className="input">
      <input type="input" placeholder="Enter a task" value={todo}
      onChange={(e) => setTodo(e.target.value)}
      className="input__box" />
      
      <button
      className="input__submit">Go</button>
    </form>
  )
}

export default Input