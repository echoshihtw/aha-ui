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
import { User } from './interfaces/user';

const SearchSection = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [sliderValue, setSliderValue] = useState<number>(75.2);
  const [result, setResult] = useState<Array<User>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<null | string>(null);

  const params = new URLSearchParams(document.location.search);
  const keywordFromUrl = params.get('keyword');
  const navigate = useNavigate();

  const handleFetchData = useCallback((): void => {
    setIsLoading(true);
    setError(null);
    const pageSize: number = sliderValue === 75.2 ? 30 : sliderValue;
    GET(
      `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${keywordFromUrl}`,
    ).then((r): void => {
      setTimeout((): void => {
        setResult((prevState: User[]) => [...prevState, ...r.data]);
        if (r.data.length === 0) {
          setError("you've reached the end");
        }
        setIsLoading(false);
      }, 300);
    });
  }, [setResult, page, sliderValue, keywordFromUrl]);

  useEffect(() => {
    handleFetchData();
  }, [page, keywordFromUrl]);

  const handleEnterInput = useCallback(
    (e: ChangeEvent): void => {
      setKeyword((e.target as HTMLInputElement).value);
    },
    [setKeyword],
  );

  const handleSearchClick = useCallback((): void => {
    if (keyword === '') return;
    navigate(`?keyword=${keyword}`, { state: 'search' });
  }, [navigate, keyword]);

  const handleLoadNextPage = useCallback((): void => {
    setPage((prevPage: number) => prevPage + 1);
    const element: HTMLElement = document.getElementById('resultContainer')!;
    setTimeout((): void => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }, 500);
  }, [document, setPage]);

  const handleNextPage = useCallback((): void => {
    setPage((prevState: number) => prevState + 1);
  }, [setPage]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>): void => {
      if (e.key === 'Enter') {
        handleSearchClick();
      }
    },
    [handleSearchClick],
  );
  const searchMode: boolean = keywordFromUrl === null;

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
          onLoadNextPage={handleLoadNextPage}
          error={error}
          handleFetchData={handleNextPage}
        />
      )}
    </div>
  );
};

export default memo(SearchSection);
