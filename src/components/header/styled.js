import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #161b22;
  display: flex-left;
  width: 100%;
  justify-content: space-between;
  padding: 16px 32px;
  align-items: center;
  font-size: 14px;
  color: rgba(255,255,255,0.7);

  
  svg {
    fill: #f0f6fc;
    margin-right: 16px;
    vertical-align: middle;
    overflow: visible;
  }

  input {
    align-items: center;
    background-color: #0d1117;
    border: 1px solid #30363d;
    vertical-align: middle;
    border-radius: 8px;
    width: 280px;
    max-height: 32px;
    padding: 8px;
    font-weight: 500;
    color: #f0f6fc;
    transition: width 0.4s;


    &:focus {
      width: 400px;
      transition: width 0.4s;
      border-color: #58a6ff;
    }

  }
`;
