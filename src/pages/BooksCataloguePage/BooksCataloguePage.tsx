/**
 * BooksCataloguePage Component
 *
 * This component displays a catalog of books fetched from the Google Books API.
 * It includes a search filter to refine the search results and pagination buttons
 * to navigate through the list of books.
 */

import './BooksCatalogue.scss';

import { FC, useCallback, useEffect, useState } from 'react';

// Importing helper functions and services
import { showError } from '../../helpers';
import {
  BookItem,
  BooksResponse,
  GetListOfBooksService,
  SearchOptions,
} from '../../services';
// Importing the child component for book card display
import BookCardComponent from './components/BookCardComponent/BookCardComponent';
// Importing the child component for the search filter
import FilterComponent from './components/FilterComponent/FilterComponent';

/**
 * Interface for local search values used in the filter.
 */
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

/**
 * BooksCataloguePage Component.
 * @returns A functional component representing the BooksCataloguePage.
 */
const BooksCataloguePage: FC = () => {
  // State to manage loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // State to store the response from the API
  const [booksResponse, setBooksResponse] = useState<BooksResponse>({
    items: [],
    totalItems: 0,
  });
  // State to store local search values for filter
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
  // State to manage filter options for API request
  const [filter, setFilter] = useState<{ searchQuery: string }>({
    searchQuery: 'test',
  });
  // State to manage search options for API request
  const [searchOptions, setSearchOptions] = useState<SearchOptions>({
    inauthor: '',
    intitle: '',
    inpublisher: '',
    subject: '',
    isbn: '',
    lccn: '',
    oclc: '',
  });
  // State to manage the start index for pagination
  const [startIndex, setStartIndex] = useState<number>(0);
  // Constant to specify the maximum number of results per page
  const [maxResults] = useState<number>(8);

  /**
   * Function to fetch books data from the API based on current filter and pagination settings.
   */
  const getListOfBooksService = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await GetListOfBooksService(
        filter.searchQuery,
        searchOptions,
        startIndex,
        maxResults,
      );

      if (response && response.items) {
        setBooksResponse(response);
      } else {
        showError('Failed To Get Books Catalog!');
      }
    } catch (error) {
      showError('Error while fetching books catalog!');
    }

    setIsLoading(false);
  }, [filter, searchOptions, startIndex, maxResults]);

  // Trigger the API request on initial mount and whenever filter, search options, or pagination changes
  useEffect(() => {
    getListOfBooksService();
  }, [getListOfBooksService]);

  /**
   * Function to handle going to the previous page in pagination.
   */
  const handlePreviousPage = () => {
    if (startIndex >= 1) {
      setStartIndex((prevStartIndex) => prevStartIndex - maxResults);
    }
  };

  /**
   * Function to handle going to the next page in pagination.
   */
  const handleNextPage = () => {
    if (startIndex + maxResults < booksResponse.totalItems) {
      setStartIndex((prevStartIndex) => prevStartIndex + maxResults);
    }
  };

  return (
    <div className="books-catalog-container">
      {/* Filter component to set filter and search options */}
      <div className="filter-wrapper">
        <FilterComponent
          setFilter={setFilter}
          localSearchValue={localSearchValue}
          setSearchOptions={setSearchOptions}
          setLocalSearchValue={setLocalSearchValue}
        />
      </div>

      {/* Pagination section with Previous and Next buttons */}
      <div className="pagination-wrapper">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={startIndex === 0 || isLoading}
        >
          Previous
        </button>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={startIndex + maxResults >= booksResponse.totalItems || isLoading}
        >
          Next
        </button>
      </div>

      {/* Book list container */}
      <div className="book-list-container">
        <div className="books-list">
          {/* Display loading skeleton or book cards */}
          {isLoading
            ? [...Array(8)].map((_, index) => (
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
