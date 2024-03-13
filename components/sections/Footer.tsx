import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-center md:col-span-4 font-mono mb-3">
      Hecho con <span className="mx-1 animate-pulsing">❤️</span> por{" "}
      <Link href="http://saider.dev/">
        <span className="font-bold mx-2 hover:underline hover:underline-offset-4">
          Sebastián Morales
        </span>
      </Link>
    </footer>
  );
};

export default Footer;
