import { styled } from 'styled-components';

export const Ul = styled.ul`
  background: white;
  width: 32rem;
  box-shadow: 3px 3px 3px 1px lightgrey;
  position: absolute;
  padding: 1rem 2rem;
  border-radius: 2rem;
`;

export const Li = styled.li`
  padding: 0.5rem 1rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background: #e2e2e2;
  }
`;

export const P = styled.p`
  color: #919191;
  margin: 1rem;
`;

export const ImageWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  background: #212121;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
