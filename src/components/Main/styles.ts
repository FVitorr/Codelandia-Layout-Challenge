import styled from "styled-components";
import {Search} from "@styled-icons/bootstrap/Search"



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
  width:100%;
  max-width:1300px;
  height:32px;
  border-radius:8px;
  padding: 2px 0 2px 3rem;
  background: #202024;
  border: 2px #252529 solid;
`;

export const SearchIcon = styled(Search)`
  width:20px;
  position: absolute;
  top: 50%;
  left: 2%; /* Ajuste a posição horizontal do ícone conforme necessário */
  transform: translateY(-50%);
  color: #E07B67;
`;

export const InputArea = styled.div`
  position:relative;
  width:80%;
  max-width:1380px;
  display: flex;
  justify-content:center;
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

