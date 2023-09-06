import React, { ReactNode } from 'react';
import Container from '../Container';
import * as S from './Layout.style';

interface IProps {
  children?: ReactNode;
}

export const BaseLayout = ({ children }: IProps) => {
  return (
    <>
      <S.Header>
        <Container>
          <img src="/logo.svg" width={'auto'} height={24} alt={'logo'} />
          <S.H1>한국임상정보</S.H1>
        </Container>
      </S.Header>
      <S.Main>
        <Container>{children}</Container>
      </S.Main>
    </>
  );
};
