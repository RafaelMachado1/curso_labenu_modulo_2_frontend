import { TitleHeader, Foto, Nome } from "./styled";

export const Header = (props) => {
  const { name, foto } = props.login;
  return (
    <TitleHeader>
      <Foto src={foto} />
      <Nome> {name} </Nome>
      Insta4
    </TitleHeader>
  );
};