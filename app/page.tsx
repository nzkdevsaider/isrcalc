import ResultadoISR from "@/components/ResultadoISR";
import InputIngreso from "@/components/forms/InputIngreso";
import IngresoProvider from "@/context/IngresoContext";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-3 md:col-span-2 md:h-screen">
      <IngresoProvider>
        <InputIngreso />
        <ResultadoISR />
      </IngresoProvider>
    </div>
  );
}
