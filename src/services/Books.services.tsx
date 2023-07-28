import { HttpServices } from '../helpers';

export interface BookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export interface BooksResponse {
  items: BookItem[];
  totalItems: number;
}

interface SearchOptions {
  inauthor?: string;
  intitle?: string;
  inpublisher?: string;
  subject?: string;
  isbn?: string;
  lccn?: string;
  oclc?: string;
}

const API_KEY = 'AIzaSyBvo3QMM_NYTMNmpLOco4eDSH6DEzXpXNM';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const GetListOfBooksService = async (
  searchQuery: string,
  searchOptions: SearchOptions = {},
): Promise<BooksResponse> => {
  try {
    const queryString = Object.entries(searchOptions)
      .filter(([key, value]) => value !== '')
      .map(([key, value]) => `${key}:${value}`)
      .join('+');

    const url = `${BASE_URL}?q=${searchQuery}${
      queryString ? '+' + queryString : ''
    }&key=${API_KEY}`;

    const result = await HttpServices.get(url);

    const { data } = result;

    // Define the response structure and return the data
    return {
      items: data.items || [], // Handle the case when 'items' is undefined
      totalItems: data.totalItems || 0, // Handle the case when 'totalItems' is undefined
    };
  } catch (error) {
    // Handle the error
    throw new Error('Failed to fetch books from the Google Books API');
  }
};
