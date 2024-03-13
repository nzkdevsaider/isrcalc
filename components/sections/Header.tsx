const Header = () => {
  return (
    <div className="navbar bg-neutral md:col-span-4 text-base-100">
      <div className="navbar-center">
        <button
          type="button"
          className="btn btn-ghost text-2xl font-mono hover:underline-offset-4 hover:underline"
        >
          isrCALC
        </button>
      </div>
      <div>
        <p>Calculadora de impuesto sobre la renta de Panamá</p>
      </div>
    </div>
  );
};

export default Header;
