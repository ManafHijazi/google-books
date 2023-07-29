/**
 * BookCardComponent Component
 *
 * This component displays a book card with its details, including an image, title,
 * authors, and description. It also provides a button to navigate to the book details page.
 */

import './BookCardComponent.scss';

import React, { FC } from 'react';
import { useNavigate } from 'react-router';

import { BookItem } from '../../../../services';

/**
 * Interface for props passed to the BookCardComponent.
 */
interface BookCardProps {
  book: BookItem;
}

/**
 * BookCardComponent Functional Component.
 * @param props - Props for the BookCardComponent.
 * @returns A functional component representing the BookCardComponent.
 */
const BookCardComponent: FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div data-testid="book-card" className="book-card">
      <div className="book-card-content">
        {/* Display book thumbnail or placeholder if not available */}
        {book.volumeInfo?.imageLinks?.thumbnail ? (
          <img
            width="400px"
            height="300px"
            className="book-thumbnail"
            alt={book.volumeInfo.title || 'No Title'}
            src={book.volumeInfo.imageLinks.thumbnail}
          />
        ) : (
          <div className="placeholder-thumbnail"></div>
        )}

        {/* Display book title */}
        <h2 data-testid="book-title" className="book-title">
          {book?.volumeInfo?.title || 'No Title'}
        </h2>

        {/* Display book authors or "Unknown" if not available */}
        <p className="book-authors">
          Authors: {book?.volumeInfo?.authors?.join(', ') || 'Unknown'}
        </p>

        {/* Display book description or "No description available." if not available */}
        <div className="book-description-container">
          <p className="book-description">
            {book?.volumeInfo?.description || 'No description available.'}
          </p>
        </div>
      </div>

      {/* Book details overlay */}
      <div className="book-overlay">
        {/* Button to navigate to the book details page */}
        <button
          className="book-details-button"
          onClick={() => navigate(`/bookdetails/${book.id}`)}
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default BookCardComponent;
