import { HeaderContainer } from "./style";

export function Header({ title }) {
  return (
    <HeaderContainer>
      <h3>PI 2024 - {title}</h3>
      <h6>Infecções Sexualmente Transmissíveis</h6>
    </HeaderContainer>
  );
}
