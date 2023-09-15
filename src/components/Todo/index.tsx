import { useState } from "react";

interface ITodoProps {}
type TodoState = {
  order?: number;
  work?: string;
};
const Todo: React.FC<ITodoProps> = (): JSX.Element => {
  const [state, setState] = useState<TodoState[]>(() => []);
  const [form, setForm] = useState<TodoState>({});

  const handleClick = () => {
    setState([...state, form]);
    setForm({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <input
          name="work"
          type="text"
          onChange={handleChange}
          value={form.work || ""}
          placeholder="اسم کار"
        />
        <input
          name="order"
          type="text"
          onChange={handleChange}
          value={form.order || ""}
          placeholder="اولویت"
        />
        <button onClick={handleClick}>اضافه کردن</button>
      </div>
      <h3>کارهایی که باید انجام شوند</h3>
      <ul>
        {state?.map((item) => (
          <li key={item.work}>{item.work}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
