import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px;
  background-color: ${shade(0.2, '#f9665f')};
`;
export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 50px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    color: var(--color-primary);
    font-weight: 300;
    font-size: 15px;
  }

  > strong {
    color: var(--color-primary);
  }
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 64px auto;
  display: flex;
`;
export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: red;
      margin: 0 8px;
    }
  }
`;
export const Calendar = styled.aside`
  width: 380px;
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: red;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: var(--text-primary);
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: var(--color-secondary);
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;

      svg {
        color: var(--color-secondary);
        margin-right: 8px;
      }
    }
  }
`;
