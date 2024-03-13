"use client";

import Image from "next/image";

const InfoISR = () => {
  return (
    <div className="card justify-center card-compact border border-neutral md:m-5 mt-2">
      <figure>
        <Image
          src="/il1.svg"
          alt="Shoes"
          width={200}
          height={200}
          className="rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Aprende a calcular tu ISR</h2>
        <p>
          ¿Quieres saber qué formula y condiciones se utilizan para llegar a
          este cálculo?
        </p>
        <div className="card-actions justify-end">
          <button
            type="button"
            className="btn"
            onClick={() =>
              (
                document.getElementById("isrguide") as HTMLDialogElement
              )?.showModal()
            }
          >
            Consultar la tabla
          </button>
          <dialog id="isrguide" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-xl">
                Cómo calcular el Impuesto sobre la Renta (y no morir en el
                intento)
              </h3>
              <p className="py-4">
                El impuesto sobre la renta es un gravamen fiscal que se aplica
                sobre los ingresos o rentas que obtienen las personas naturales
                (individuos) y las personas jurídicas (empresas o sociedades)
                durante un período determinado, generalmente un año.
              </p>
              <div className="flex flex-col gap-3">
                <p>
                  <span className="font-bold">1. Conoce tu ingreso anual</span>{" "}
                  El primer paso es conocer cuánto dinero ganaste en todo el
                  año. Si recibes un salario mensual, multiplica tu salario
                  mensual por 12 (o por 13 si recibes aguinaldo).
                </p>
                <p>
                  <span className="font-bold">
                    2. Cálcula tu ingreso gravable
                  </span>{" "}
                  Tu ingreso gravable es lo que quedó después de restar tus
                  deducciones de tu ingreso anual. Es la cantidad sobre la que
                  se calculará tu impuesto.
                </p>
                <div>
                  <span className="font-bold">
                    3. Aplica tasas de impuesto sobre la renta
                  </span>{" "}
                  <div className="flex flex-col gap-3">
                    <p>
                      - Si tu ingreso gravable es menor a cierta cantidad (por
                      ejemplo, $11,000), no pagas impuesto.
                    </p>
                    <p>
                      - Si tu ingreso gravable está entre cierta cantidad y otra
                      mayor (por ejemplo, entre $11,000 y $50,000), pagas un
                      porcentaje (como 15%) sobre el excedente de la cantidad
                      menor.
                    </p>
                    <p>
                      - Si tu ingreso gravable es mayor a cierta cantidad (por
                      ejemplo, $50,000), pagas un impuesto fijo por esa cantidad
                      (como $5,850), más un porcentaje (como 25%) sobre el
                      excedente.
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Si el ingreso gravable es</th>
                          <th>El impuesto será</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>Hasta B/.11,000.00 </td>
                          <td>0% (no se aplica ningún impuesto)</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <td>De más de B/.11,000.00 hasta B/.50, 000.00</td>
                          <td>
                            El 15% del excedente de B/11,000.00 hasta
                            B/.50,000.00
                          </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <td>De más de B/.50,000.00</td>
                          <td>
                            Pagarán B/.5,850.00 por los primeros B/.50,000.00 y
                            una tarifa del 25% sobre el excendente de
                            B/.50,000.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button type="submit">close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default InfoISR;
