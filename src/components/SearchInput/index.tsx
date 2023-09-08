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
  //FIX: Don't use any type
  keyDownSearchInput: any;
}

export const SearchInput = React.forwardRef<HTMLInputElement, IProps>(
  ({ id, searchDisease, searchValue, placeholder, focus, blur, keyDownSearchInput }, ref) => {
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
          keyDownSearchInput={keyDownSearchInput}
        />
        <S.ImageWrapper>
          <S.SearchImage src="/search.svg" width={24} height={24} alt="search image" />
        </S.ImageWrapper>
      </S.Section>
    );
  },
);

const Search = React.forwardRef<HTMLInputElement, IProps>(
  ({ id, searchValue, searchDisease, placeholder, focus, blur, keyDownSearchInput }, ref) => {
    return (
      <S.SearchInput
        ref={ref}
        id={id}
        value={searchValue}
        onChange={searchDisease}
        placeholder={placeholder}
        onFocus={focus}
        onBlur={blur}
        onKeyDown={keyDownSearchInput}
      />
    );
  },
);

SearchInput.displayName = 'SearchInput';
Search.displayName = 'Search';
