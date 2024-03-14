"use client";

import { IngresoContext } from "@/context/IngresoContext";
import { calcularISR, tipoDeISR } from "@/lib/calcularISR";
import { useContext } from "react";

const ResultadoISR = () => {
  const { ingreso } = useContext(IngresoContext);
  return (
    <div>
      {ingreso !== 0 && (
        <div className="animate-fade-in">
          <div className="flex flex-row gap-2 items-center">
            <h1 className="font-bold text-2xl">Resumen</h1>
            <div
              className="tooltip tooltip-right"
              data-tip="Haz click sobre los números resaltados en negrita para conocer su formula. Esta calculadora solo tiene en cuenta el salario bruto mensual privado y no toma en cuenta otros ingresos o deducciones."
            >
              <button
                type="button"
                className="btn btn-sm btn-circle hover:animate-pop"
              >
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: wip */}
                <svg
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6.25002 7H7.00002H7.75C8.30229 7 8.75 7.44772 8.75 8V11.5V12.25H7.25V11.5V8.5H7.00002H6.25002V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p>
            Tu salario bruto mensual es de{" "}
            <span className="font-bold font-mono">${ingreso}</span>
            {calcularISR(ingreso).impuestoAnual > 0 ? (
              <span>
                , por lo que deberás pagar impuesto sobre la renta del{" "}
                <div
                  className="tooltip"
                  data-tip={`$${ingreso} × 13 = $${ingreso * 13} (↑ ${tipoDeISR(
                    ingreso * 13
                  )})`}
                >
                  <span className="font-bold">{tipoDeISR(ingreso * 13)}</span>
                </div>{" "}
                ya que tu salario anual es de{" "}
                <div className="tooltip" data-tip={`$${ingreso} × 13`}>
                  <span className="font-bold font-mono">${ingreso * 13}</span>
                </div>{" "}
                (
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
                <div
                  className="tooltip"
                  data-tip={`${calcularISR(ingreso).impuestoAnual.toFixed(
                    2
                  )} ÷ 13 = ${calcularISR(ingreso).impuestoMensual.toFixed(2)}`}
                >
                  <span className="font-bold font-mono">
                    ${calcularISR(ingreso).impuestoMensual.toFixed(2)}
                  </span>
                </div>{" "}
                al mes, llegando a la suma anual de{" "}
                <div
                  className="tooltip"
                  data-tip={`Excedente × ${tipoDeISR(ingreso * 13)}`}
                >
                  <span className="font-bold font-mono">
                    ${calcularISR(ingreso).impuestoAnual.toFixed(2)}
                  </span>
                </div>
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
        </div>
      )}
    </div>
  );
};

export default ResultadoISR;
