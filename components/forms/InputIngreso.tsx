"use client";

import { IngresoContext } from "@/context/IngresoContext";
import { useContext, useState } from "react";

const InputIngreso = () => {
  const { setIngreso } = useContext(IngresoContext);
  const [input, setInput] = useState(0);
  const [error, setError] = useState({ error: false, message: "" });
  const salaryButtons = [1000, 12000, 33000];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ingreso = input;
    setIngreso(ingreso);
  };

  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    const elements = e.target as typeof e.target & {
      value: number;
    };
    const ingreso = elements.value;

    setError({ error: false, message: "" });

    if (ingreso < 0) {
      setError({
        error: true,
        message: "El salario no puede ser negativo.",
      });
      return setInput(0);
    }

    setInput(ingreso);
  };

  return (
    <form
      className="card border border-neutral border-dashed hover:border-double mt-5"
      onSubmit={handleSubmit}
    >
      {error.error && (
        <div className="toast toast-end">
          <div className="alert alert-error">
            <span>{error.message}</span>
          </div>
        </div>
      )}
      <div className="card-body">
        <h2 className="card-title">¿Cuál es tu salario bruto mensual?</h2>
        <label className="input input-bordered flex items-center gap-2 text-2xl font-mono">
          $
          <input
            type="number"
            name="ingreso"
            placeholder="Ingreso mensual bruto..."
            value={input}
            onChange={handleChange}
            className="grow"
          />
        </label>
        <div className="divider">
          {salaryButtons.map((price) => (
            <button
              key={price}
              type="button"
              className="btn btn-base-100 font-mono hover:animate-bounce hover:underline-offset-4 hover:underline"
              onClick={() => setInput(price)}
            >
              ${price}
            </button>
          ))}
        </div>
        <button className="btn btn-neutral hover:animate-tilt" type="submit">
          Calcular
        </button>
      </div>
    </form>
  );
};

export default InputIngreso;
