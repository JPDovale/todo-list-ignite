import styled from "styled-components";

export const TaskContainer = styled.section`
  .task {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;

    padding: 1rem;

    font-size: ${({ theme }) => theme.FontSize.md};

    background: ${({ theme }) => theme.Colors["gray-500"]};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.Colors["gray-400"]};
    color: ${({ theme }) => theme.Colors["gray-100"]};

    .check-box {
      position: relative;

      cursor: pointer;

      .check {
        width: 1.25rem;
        height: 1.25rem;

        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.Colors.blue};
        appearance: none;
        transition: all 500ms;
        cursor: pointer;

        &:hover {
          border: 2px solid ${({ theme }) => theme.Colors["blue-dark"]};
        }

        &:checked {
          border: 2px solid ${({ theme }) => theme.Colors["purple-dark"]};
          background: ${({ theme }) => theme.Colors["purple-dark"]};

          &:hover {
            border: 2px solid ${({ theme }) => theme.Colors["purple"]};
            background: ${({ theme }) => theme.Colors["purple"]};
          }
        }
      }

      .vector {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;

        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .task-content {
      width: 100%;
    }

    .delete-task {
      padding: 0.25rem;

      line-height: 0;

      border: none;
      outline: none;
      border-radius: 4px;
      color: ${({ theme }) => theme.Colors["gray-300"]};
      background: transparent;
      transition: all 500ms;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.Colors.danger};
        background: ${({ theme }) => theme.Colors["gray-400"]};
      }
    }
  }

  .complete {
    border: 1px solid ${({ theme }) => theme.Colors["gray-500"]};

    .task-content {
      width: 100%;
      text-decoration: line-through;
      color: ${({ theme }) => theme.Colors["gray-300"]};
    }
  }
`;
