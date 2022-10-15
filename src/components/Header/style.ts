import styled from "styled-components";

export const HeaderContainer = styled.section`
  //display
  display: flex;
  justify-content: center;

  //sizes
  width: 100%;
  padding: 4.5rem 0 5rem 0;

  //font

  //view
  background: ${({ theme }) => theme.Colors["gray-700"]};

  img {
    height: 3rem;
  }
`;
