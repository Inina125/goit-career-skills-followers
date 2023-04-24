import styled from 'styled-components';

const AppCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  padding: 48px 0;
`;

const Button = styled.button`
  width: 300px;
  height: 36px;
  line-height: 33px;
  background: #3f51b5;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 50px;
  cursor: pointer;
  border-radius: 6px;
  border: none;
`;

export { AppCont, Cards, Button };
