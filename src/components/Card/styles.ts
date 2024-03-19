import styled from "styled-components";
import {Heart} from "@styled-icons/bootstrap/Heart"
import {HeartFill} from "@styled-icons/bootstrap/HeartFill"

export const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border:2px solid #252529;
  background-color:#17171A;
  height: 20%;
  width: 75%;
  border-radius:8px;
  padding: 2rem 2rem 2rem 2rem;
  gap:1rem;
  font-family: "Inter", sans-serif;
  color: white;

  &:hover {
    border-color: #E07B67; /* Cor da borda quando o mouse estiver sobre o componente */
    cursor: pointer;
  }

  >h2{
    font-size: 20px;
  }

  >p{
    font-size: 16px;
  }
`;

export const HeartIcon = styled(Heart)`
  color: #E07B67;
  transition: color 0.4s ease;
  width:25px;
`;

export const HeartFillIcon = styled(HeartFill)`
  width: 25px;
  transition: color 0.4s ease
`;

export const HeaderCard = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  color: #E07B67;
`;

