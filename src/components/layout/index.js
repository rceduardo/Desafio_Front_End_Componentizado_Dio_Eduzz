import React from "react";
import Header from "../header";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      <S.WrapperChildrens>
        {children}
      </S.WrapperChildrens>
    </S.WrapperLayout>
  );
};

export default Layout;
