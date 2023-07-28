import './BooksCatalogue.scss';

import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { showError } from '../../helpers';
import { BookItem, BooksResponse, GetListOfBooksService } from '../../services';
import BookCardComponent from './components/BookCardComponent/BookCardComponent';
import FilterComponent from './components/FilterComponent/FilterComponent';

interface LocalSearchValue {
  searchQuery: string;
  inauthor: string;
  intitle: string;
  inpublisher: string;
  subject: string;
  isbn: string;
  lccn: string;
  oclc: string;
}

interface SearchOptions {
  inauthor: string;
  intitle: string;
  inpublisher: string;
  subject: string;
  isbn: string;
  lccn: string;
  oclc: string;
}

const BooksCataloguePage: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [booksResponse, setBooksResponse] = useState<BooksResponse>({
    items: [],
    totalItems: 0,
  });
  const [localSearchValue, setLocalSearchValue] = useState<LocalSearchValue>({
    searchQuery: '',
    inauthor: '',
    intitle: '',
    inpublisher: '',
    subject: '',
    isbn: '',
    lccn: '',
    oclc: '',
  });
  const [filter, setFilter] = useState<{ searchQuery: string }>({
    searchQuery: 'test',
  });
  const [searchOptions, setSearchOptions] = useState<SearchOptions>({
    inauthor: '',
    intitle: '',
    inpublisher: '',
    subject: '',
    isbn: '',
    lccn: '',
    oclc: '',
  });

  const getListOfBooksService = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await GetListOfBooksService(filter.searchQuery, searchOptions);

      if (response && response.items) {
        setBooksResponse(response);
      } else {
        showError('Failed To Get Books Catalog!');
      }
    } catch (error) {
      showError('Error while fetching books catalog!');
    }

    setIsLoading(false);
  }, [filter, searchOptions]);

  useEffect(() => {
    getListOfBooksService();
  }, [getListOfBooksService]);

  return (
    <div className="books-catalog-container">
      <div className="filter-wrapper">
        <FilterComponent
          filter={filter}
          setFilter={setFilter}
          searchOptions={searchOptions}
          localSearchValue={localSearchValue}
          setSearchOptions={setSearchOptions}
          setLocalSearchValue={setLocalSearchValue}
        />
      </div>

      <div className="book-list-container">
        <div className="books-list">
          {isLoading
            ? [...Array(6)].map((_, index) => (
                <div key={index} className="book-card-loading" />
              ))
            : booksResponse.items.map((book: BookItem) => (
                <BookCardComponent key={book.id} book={book} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default BooksCataloguePage;
