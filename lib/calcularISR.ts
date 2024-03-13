export function calcularISR(ingresoMensualBruto: number) {
  const ingresoAnualBruto = ingresoMensualBruto * 13; // Proyectando el ingreso anual con el decimotercer mes

  let impuestoAnual = 0;

  if (ingresoAnualBruto <= 11000) {
    // Condición 1: Hasta B/.11,000.00 el impuesto será 0%.
    impuestoAnual = 0;
  } else if (ingresoAnualBruto > 11000 && ingresoAnualBruto <= 50000) {
    // Condición 2: De más de B/.11,000.00 hasta B/.50,000.00, el impuesto será El 15% del excedente de B/11,000.00 hasta B/.50,000.00.
    const excedente = ingresoAnualBruto - 11000;
    impuestoAnual = excedente * 0.15; // 15% del excedente
  } else {
    // Condición 3: De más de B/.50,000.00, el impuesto será B/.5,850.00 por los primeros B/.50,000.00 y una tarifa del 25% sobre el excedente de B/.50,000.00.
    impuestoAnual = 5850; // Impuesto fijo por los primeros B/.50,000.00
    const excedente = ingresoAnualBruto - 50000;
    impuestoAnual += excedente * 0.25; // 25% sobre el excedente de B/.50,000.00
  }

  const impuestoMensual = impuestoAnual / 13;

  return {
    impuestoMensual,
    impuestoAnual,
  };
}

export function tipoDeISR(ingreso: number) {
  if (ingreso <= 11000) {
    return "0%";
  }
  if (ingreso > 11000 && ingreso <= 50000) {
    return "15%";
  }
  return "25%";
}
