import { FC } from "react";
import Navbar from "./common/Navbar";
import SEO from './common/SEO';
import { ISEO } from "./common/seo.interface";

interface Props {
  seo?: ISEO
}

const Layout: FC<Props> = ({ children, seo }) => {
  return (
    <div className="container">
      <SEO {...seo} />
      <Navbar />
      <div className="d-none d-md-flex" style={{ marginBottom: 80 }} />
      <div className="d-flex d-md-none" style={{ marginBottom: 136 }} />
      {children}
      <div
        style={{
          fontSize: 12,
          display: "flex",
          justifyContent: "center",
          marginBottom: 8,
        }}
      >
        © 2022 Receitas da Vânia, todos os direitos reservados
      </div>
    </div>
  );
};

export default Layout;
