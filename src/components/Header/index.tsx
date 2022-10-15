import { HeaderContainer } from "./style";

import logoSvg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} alt="Logo" />
    </HeaderContainer>
  );
}
