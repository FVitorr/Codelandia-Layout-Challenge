import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:30px;
  background: #17171A;
  min-height:200px;
`;

export const Input = styled.input`
  width:78%;
  height:32px;
  border-radius:8px;
  padding: 2px 0 2px 1rem;
  background: #202024;
  border: 2px #252529;
`;

export const Title = styled.h1`
  font-weight:500;
  font-family: "Space Grotesk";
  color:#FFFFFF;
  
  >span{
    color:#E07B67;
  }
`;

export const CardArea = styled.div`
  margin-top: 3rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:30px;
`;