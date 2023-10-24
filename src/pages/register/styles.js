import styled from "styled-components";

export const Container = styled.main`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  margin-top: 20px;

  .text {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    margin: 26px 0 12px 0;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  max-width: 90%;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleRegister = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;

export const SubtitleRegister = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;

export const RegisteredText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #fff;
`;

export const LoginText = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #23dd7a;

  text-decoration: none;
`;
