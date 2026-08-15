import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  function producstOpen() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Pagina Home</h1>

      <nav>
        <a href="/products">Produtos</a>
        <a href="/products?category=tvs">Categoria</a>

        <button type="button" onClick={producstOpen}>
          Ver Produtos
        </button>
      </nav>
    </div>
  );
}
