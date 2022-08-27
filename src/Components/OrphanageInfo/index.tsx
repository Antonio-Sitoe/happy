import React from "react";
import styled from "styled-components";
import SimpleMaph from "../Maps/SimpleMaph";

export const OrphanageInfoStyle = styled.div`
  margin: 2rem 0;
  padding: 0 2rem;
  color: var(--TextColor);

  h2 {
    font-size: 2rem;
  }
  @media (max-width:30rem){
    h2 {
      font-size: 1.2rem;
    }
  }
`;

interface IOrphanage {
  title: string;
  description: string;
}

const OrphanageInfo = ({ title, description }: IOrphanage) => {
  return (
    <OrphanageInfoStyle>
      <h2>{title}</h2>
      <p>{description}</p>
      <SimpleMaph />
    </OrphanageInfoStyle>
  );
};

export default OrphanageInfo;
