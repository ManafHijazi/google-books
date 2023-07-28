import { HttpServices } from '../helpers';

export interface Book {
  id: string;
  title: string;
  authors: string[];
  description: string;
  imageLinks: {
    thumbnail: string;
  };
}

export const GetListOfBooksService = async () => {
  const result = await HttpServices.get('https://www.googleapis.com/books/v1/volumes');
  return result;
};
