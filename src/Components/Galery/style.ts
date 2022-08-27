import styled  from "styled-components";

export const GStyle = styled.section``;
export const GaleryMultImages = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  .images {
    cursor: pointer;
    height: 94px;
    width: 5.875rem;
    border-radius: 1rem;
  }

  @media (max-width:30rem){
    padding: 0.5rem;
    gap: .5rem;
  }
`;

export const BannerImage = styled.section`
  .Banner {
    border-radius: 1.6rem 1.6rem 0 0;
  }
`;