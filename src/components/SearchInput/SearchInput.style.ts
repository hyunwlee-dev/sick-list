import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  border: 2px solid #2a9df4;
  width: 32rem;
  height: 4rem;
  margin: 2rem 0;
  overflow: hidden;
  border-radius: 2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  text-indent: 2rem;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  top: 50%;
  right: 0.25rem;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2a9df4;
`;
export const SearchImage = styled.img``;
