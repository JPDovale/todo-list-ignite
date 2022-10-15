import styled from "styled-components";

export const TodoContainer = styled.section`
  //display
  display: flex;
  flex-direction: column;

  //sizes
  width: 100%;
  max-width: 46rem;
  padding: 0 1.5rem;
  padding-bottom: 5rem;
  //font

  //view

  .add-task {
    display: flex;
    gap: 0.5rem;

    padding: 2px;
    width: 100%;
    margin-top: -1.6875rem;

    .title {
      width: 100%;

      font-size: ${({ theme }) => theme.FontSize.lg};

      background: ${({ theme }) => theme.Colors["gray-500"]};
      padding: 1rem;
      color: ${({ theme }) => theme.Colors["gray-300"]};
      outline: none;
      border: 1px solid ${({ theme }) => theme.Colors["gray-700"]};
      border-radius: 8px;

      &:focus {
        border: 1px solid ${({ theme }) => theme.Colors["purple-dark"]};
      }
    }

    .add-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-weight: bolder;

      padding: 1rem;
      outline: none;
      border: none;
      border-radius: 8px;
      color: ${({ theme }) => theme.Colors["gray-100"]};
      background: ${({ theme }) => theme.Colors["blue-dark"]};
      transition: all 500ms;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.Colors.blue};
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    margin-top: 4rem;

    .infos {
      display: flex;
      justify-content: space-between;

      .info {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-weight: bolder;
        font-size: ${({ theme }) => theme.FontSize.md};

        .existe-tasks {
          color: ${({ theme }) => theme.Colors["blue"]};
        }

        .completed-tasks {
          color: ${({ theme }) => theme.Colors.purple};
        }

        p {
          padding: 2px 8px;

          font-size: ${({ theme }) => theme.FontSize.sm};

          color: ${({ theme }) => theme.Colors["gray-200"]};
          background: ${({ theme }) => theme.Colors["gray-400"]};
          border-radius: 50%;
        }
      }
    }

    .list-tasks {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      padding: 4rem 1.5rem;

      border-top: 1px solid ${({ theme }) => theme.Colors["gray-400"]};
      border-radius: 8px;
      color: ${({ theme }) => theme.Colors["gray-300"]};

      .info {
        font-weight: bolder;
      }
    }
  }
`;
