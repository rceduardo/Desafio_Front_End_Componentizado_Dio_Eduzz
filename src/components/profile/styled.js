import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: flex-start;
  margin-top: 16px;
  margin-left: 16px;
  `;

export const WrapperImage = styled.img`
  height: auto;
  border-radius: 50%;
  width: 260px;
  margin: 8px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    font-size: 26px;
    /* font-weight: bold; */
    margin-bottom: 8px;;
  }

   a {
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
    color: #8b949e;
    margin: 10px 0;
  }


`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  
  div {
    align-items: center;
    display: flex;
    margin: 0 1px;
    text-align: center;
  }
  
  span {
    font-size: 13px;
    margin-right: 3px;
    font-weight: 600;
  }

  svg {
    fill: #ffff;
    margin-right: 5px;
  }

  a {
    font-size: 14px;
    color: #8b949e;
  }

`;

export const WrapperUserGeneric = styled.div`
  font-size: 13px;
  display: flex-left;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  text-align: center;

  div {
    display: flex;
    margin: 10px 0;
  }

  a {
    font-weight: 600;
    font-style: normal;
    color: #8b949e;
    margin-bottom: 16px;
  }

  svg {
    fill: #ffff;
    margin-right: 5px;
  }

`;

