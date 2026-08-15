import "./styles.css";

import { Outlet } from "react-router";

export function Layout() {
  return (
    <div>
      <header className="user">
        <p>Ola, Leandro</p>
      </header>

      <Outlet />

      <footer>
        <span>Todos os direitos reservados</span>
      </footer>
    </div>
  );
}
