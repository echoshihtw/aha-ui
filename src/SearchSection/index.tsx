import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { GET } from '../utils/request';
import ResultPage from './ResultPage';
import SearchPage from './SearchPage';
import { User } from './interfaces/user.interface';

const SearchSection = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [sliderValue, setSliderValue] = useState<number>(75.2);
  const [result, setResult] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const params = new URLSearchParams(document.location.search);
  const keywordFromUrl = params.get('keyword');
  const navigate = useNavigate();

  useEffect(() => {
    GET(
      `https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=${sliderValue}&keyword=${keyword}`,
    ).then((r) => {
      setResult(r.data);
      setIsLoading(false);
    });
  }, [keyword, sliderValue, setResult]);

  const handleEnterInput = useCallback(
    (e: ChangeEvent) => {
      setKeyword((e.target as HTMLInputElement).value);
    },
    [setKeyword],
  );

  const handleSearchClick = useCallback(() => {
    if (keyword === '') return;
    navigate(`?keyword=${keyword}`, { state: 'search' });
  }, [navigate, keyword]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter') {
        handleSearchClick();
      }
    },
    [handleSearchClick],
  );
  const searchMode = keywordFromUrl === null;
  return (
    <div className="w-full min-h-[calc(100vh-70px)] flex justify-between">
      {searchMode ? (
        <SearchPage
          keyword={keyword}
          onEnterInput={handleEnterInput}
          sliderValue={sliderValue}
          onSetSliderValue={setSliderValue}
          onKeyDown={handleKeyDown}
          onSearchButtonClick={handleSearchClick}
        />
      ) : (
        <ResultPage
          result={result}
          isLoading={isLoading}
          sliderValue={sliderValue}
        />
      )}
    </div>
  );
};

export default memo(SearchSection);
