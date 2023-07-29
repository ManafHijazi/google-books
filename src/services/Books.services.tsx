import { HttpServices } from '../helpers';

/**
 * Interface representing a book item.
 */
export interface BookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    publishedDate: string;
    pageCount: number;
    categories: string[];
    averageRating: number;
  };
  previewLink: string;
  infoLink: string;
}

/**
 * Interface representing the response containing a list of books.
 */
export interface BooksResponse {
  items: BookItem[];
  totalItems: number;
}

/**
 * Interface representing search options to be used when querying for books.
 */
export interface SearchOptions {
  inauthor?: string;
  intitle?: string;
  inpublisher?: string;
  subject?: string;
  isbn?: string;
  lccn?: string;
  oclc?: string;
}

// Google Books API key and base URL
const API_KEY = 'AIzaSyBvo3QMM_NYTMNmpLOco4eDSH6DEzXpXNM';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

/**
 * Fetches a list of books based on the provided search parameters.
 * @param searchQuery - The main search query.
 * @param searchOptions - Additional search options to filter the results (default: empty object).
 * @param startIndex - The starting index of the results (default: 0).
 * @param maxResults - The maximum number of results to be returned (default: 10).
 * @returns A promise that resolves to a BooksResponse object containing the list of books and total item count.
 * @throws An error if fetching the data fails.
 */
export const GetListOfBooksService = async (
  searchQuery: string,
  searchOptions: SearchOptions = {},
  startIndex = 0,
  maxResults = 10,
): Promise<BooksResponse> => {
  try {
    const queryString = Object.entries(searchOptions)
      .filter(([, value]) => value !== '')
      .map(([key, value]) => `${key}:${value}`)
      .join('+');

    const url = `${BASE_URL}?q=${searchQuery}${
      queryString ? '+' + queryString : ''
    }&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`;

    const result = await HttpServices.get(url);

    const { data } = result;

    // Define the response structure and return the data
    return {
      items: data.items || [],
      totalItems: data.totalItems || 0,
    };
  } catch (error) {
    // Handle the error
    throw new Error('Failed to fetch books from the Google Books API');
  }
};

/**
 * Fetches details of a specific book based on its ID.
 * @param bookId - The unique ID of the book.
 * @returns A promise that resolves to a BookItem object containing the book details.
 * @throws An error if fetching the data fails.
 */
export const GetBookDetailsService = async (bookId: string): Promise<BookItem> => {
  try {
    const url = `${BASE_URL}/${bookId}`;

    const result = await HttpServices.get(url);

    const { data } = result;

    return data;
  } catch (error) {
    // Handle the error
    throw new Error('Failed to fetch book details from the Google Books API');
  }
};
