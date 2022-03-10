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
      <div style={{ marginBottom: 80 }} />
      {children}
    </div>
  );
};

export default Layout;
