import styled from 'styled-components';

const HomeInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  margin: 40px 0;
  padding: 20px 0;

  p {
    font-size: 18px;
  }

  @media screen and (max-width: 900px) {
    h2 {
      font-size: 22px;
      padding: 0 20px;
    }

    h4 {
      font-size: 16px;
      padding: 0 20px;
    }

    p {
      font-size: 14px;
      padding: 0 20px;
    }
  }
`;

export default HomeInfo;
