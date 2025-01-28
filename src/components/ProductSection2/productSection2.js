import styled from "styled-components";



export const Title2 = styled.div`
color:white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 100px;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  flex: 1;
  padding: 20px;
//   border: 1px solid #ddd;
  text-align: left;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ImageColumn = styled(Column)`
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #555;
`;