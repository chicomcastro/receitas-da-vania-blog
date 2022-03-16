import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/Header.module.css";

const Header: FC = () => {
  return (
    <div className="row my-2 px-3 pt-3">
      <div
        className={
          "col-12 col-md-6 d-flex flex-column justify-content-center vertical-align-center " +
          styles.headerText
        }
      >
        <h1 className="d-inline">
          Dê uma pausa
          <Image
            className="mt-2"
            src="/assets/home-header-coffee.svg"
            height={76}
            width={76}
            alt=""
          />
        </h1>
        <p className="text-muted mt-2 lh-base">para ver algumas receitas deliciosas</p>
      </div>
      <div className="col-12 col-md-6">
        <div>
          <Image
            src="/assets/home-header.svg"
            height={700}
            width={700}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
