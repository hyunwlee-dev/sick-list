import React from 'react';
import * as S from './SearchInput.style';

interface IProps {
  id: string;
  //TODO: how to apply searchDisease type?
  // searchDisease: (e: ChangeEvent<HTMLInputElement>) => void;
  searchDisease: any;
  searchValue: string;
  placeholder: string;
  focus: () => void;
  blur: () => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, IProps>(
  ({ id, searchDisease, searchValue, placeholder, focus, blur }, ref) => {
    return (
      <S.Section>
        <Search
          ref={ref}
          id={id}
          searchValue={searchValue}
          searchDisease={searchDisease}
          placeholder={placeholder}
          focus={focus}
          blur={blur}
        />
        <S.ImageWrapper>
          <S.SearchImage src="/search.svg" width={24} height={24} alt="search image" />
        </S.ImageWrapper>
      </S.Section>
    );
  },
);

const Search = React.forwardRef<HTMLInputElement, IProps>(
  ({ id, searchValue, searchDisease, placeholder, focus, blur }, ref) => {
    return (
      <S.SearchInput
        ref={ref}
        id={id}
        value={searchValue}
        onChange={searchDisease}
        placeholder={placeholder}
        onFocus={focus}
        onBlur={blur}
      />
    );
  },
);

SearchInput.displayName = 'SearchInput';
Search.displayName = 'Search';
