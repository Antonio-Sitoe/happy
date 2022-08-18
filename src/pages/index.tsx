import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const url = "https://dogsapi.origamid.dev/json/api/photo";

export interface RootObject {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
}
const Home: NextPage = () => {
  const { data, isError, isLoading } = useQuery<RootObject[]>(["photo"], () => {
    return fetch(url).then((r) => r.json());
  });

  if (isError) return <p>Erro</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div style={{ margin: "3rem 0" }}>
        <Link href="sobre">Sobre</Link>
      </div>
      {data?.map(({ id, title, src }) => {
        return (
          <div key={id}>
            <img src={src} width={200} height={200} alt="" />
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
