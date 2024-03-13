"use client";

import { IngresoContext } from "@/context/IngresoContext";
import { calcularISR, tipoDeISR } from "@/lib/calcularISR";
import { useContext } from "react";

const ResultadoISR = () => {
  const { ingreso } = useContext(IngresoContext);
  return (
    <div>
      {ingreso !== 0 && (
        <>
          <h1 className="font-bold text-2xl">Resumen</h1>
          <p>
            Tu salario bruto mensual es de{" "}
            <span className="font-bold font-mono">${ingreso}</span>
            {calcularISR(ingreso).impuestoAnual > 0 ? (
              <span>
                , por lo que deberás pagar impuesto sobre la renta del{" "}
                <span className="font-bold">{tipoDeISR(ingreso * 13)}</span> ya
                que tu salario anual es de{" "}
                <span className="font-bold font-mono">${ingreso * 13}</span> (
                <button
                  type="button"
                  className="btn btn-sm btn-ghost underline underline-offset-4"
                  onClick={() =>
                    (
                      document.getElementById("isrguide") as HTMLDialogElement
                    )?.showModal()
                  }
                >
                  para más información, haz click aquí
                </button>
                ). Pagarás un total de{" "}
                <span className="font-bold font-mono">
                  ${calcularISR(ingreso).impuestoMensual.toFixed(2)}
                </span>{" "}
                al mes, llegando a la suma anual de{" "}
                <span className="font-bold font-mono">
                  ${calcularISR(ingreso).impuestoAnual.toFixed(2)}
                </span>
                .
              </span>
            ) : (
              <span>
                . Afortunadamente, no tendrás que pagar ningún impuesto ya que
                tu salario anual no excede las condiciones establecidas por la
                ley.
              </span>
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>ISR por mes</th>
                  <th>ISR al año</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="font-mono">
                  <td>${calcularISR(ingreso).impuestoMensual.toFixed(2)}</td>
                  <td>${calcularISR(ingreso).impuestoAnual.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultadoISR;
