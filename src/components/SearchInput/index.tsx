import React from 'react';
import * as S from './SearchInput.style';

interface IProps {
  id: string;
  //TODO: how to apply searchDisease type?
  // searchDisease: (e: ChangeEvent<HTMLInputElement>) => void;
  searchDisease: any;
  searchValue: string;
  placeholder: string;
}

export const SearchInput = ({ id, searchValue, searchDisease, placeholder }: IProps) => {
  return (
    <S.Section>
      <S.SearchInput
        id={id}
        value={searchValue}
        onChange={searchDisease}
        placeholder={placeholder}
      />
      <S.ImageWrapper>
        <S.SearchImage src="/search.svg" width={24} height={24} alt="search image" />
      </S.ImageWrapper>
    </S.Section>
  );
};
