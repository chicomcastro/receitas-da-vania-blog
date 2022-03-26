import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav
      className="navbar navbar-expand navbar-light justify-content-between flex-column flex-md-row"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: "#f69b98"
      }}
    >
      {/* Brand */}
      <div className="col mx-3 mt-1 mt-md-0">
        <Link href="/" passHref>
          <a className="navbar-brand" style={{fontWeight: "500"}}>Receitas da Vânia</a>
        </Link>
      </div>

      {/* Navigation */}
      <div className="col d-md-flex justify-content-end">
        <ul className="navbar-nav mb-lg-0 mt-1 mt-md-0 justify-content-between">
          <li className="nav-item mx-2">
            <Link href="/" passHref>
              <a className={"nav-link " + (pathname === "/" && "active")}>
                Início
              </a>
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link href="/posts" passHref>
              <a
                className={
                  "nav-link text-nowrap " + (pathname === "/posts" && "active")
                }
              >
                <span className="d-none d-md-flex">Todas as receitas</span>
                <span className="d-flex d-md-none">Receitas</span>
              </a>
            </Link>
          </li>
          {/* <li className="nav-item mx-2">
            <Link href="/about" passHref>
              <a
                className={
                  "nav-link text-nowrap " + (pathname === "/about" && "active")
                }
              >
                Quem sou eu
              </a>
            </Link>
          </li> */}
          <li className="nav-item mx-2 d-none d-md-flex">
            <Link href="https://www.youtube.com/channel/UCGr0EyuvQ5HHFy56oN1kc9A" passHref>
              <a className="nav-link" target="_blank">
                <AiFillYoutube />
              </a>
            </Link>
          </li>
          <li className="nav-item mx-2 d-none d-md-flex">
            <Link href="https://www.instagram.com/receitas.da.vania/" passHref>
              <a className="nav-link" target="_blank">
                <AiFillInstagram />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
