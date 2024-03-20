import { Container , Input, InputArea, SearchIcon, Title, CardArea} from "./styles";
import Card from "../Card";



const Main = ()=>{
  return (<>
  <Container>
    <Title><span>Code</span>lândia</Title>
    <InputArea><Input placeholder="Pesquisa no blog"/><SearchIcon/></InputArea>
  </Container>
  <CardArea>
    <Card 
      data= "17 de ago, 2024" 
      title="O que é linguagem de programação ?"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
    
    <Card 
      data= "17 de ago, 2024" 
      title="O que é linguagem de programação ?"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>

    <Card 
      data= "17 de ago, 2024" 
      title="O que é linguagem de programação ?"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
  </CardArea>

  </>);
}

export default Main