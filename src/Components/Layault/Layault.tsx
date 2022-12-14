import Image from "next/image";
import React, { ReactNode } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { Content, Sidebar, Main, HeaderStyle } from "./style";
import styled from "styled-components";

interface ILayault {
  children: ReactNode;
  title: string;
}

const Layault = ({ children, title }: ILayault) => {
  return (
    <Main>
      <div />
      <Sidebar>
        <Image src="/LogoSecond.svg" alt="" height={56} width={48} />
        <Link href="/mapa">
          <a className="button">
            <AiOutlineArrowLeft />
          </a>
        </Link>
      </Sidebar>
      <div>
        <HeaderStyle>
          <Link href={"/mapa"}>
            <a>
              <AiOutlineArrowLeft />
              Voltar
            </a>
          </Link>
          <h3>{title}</h3>
        </HeaderStyle>
        <Content>{children}</Content>
      </div>
    </Main>
  );
};

export default Layault;
