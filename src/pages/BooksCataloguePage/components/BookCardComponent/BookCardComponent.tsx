import { FC } from 'react';
import { useNavigate } from 'react-router';
import { BookItem } from '../../../../services';
import './BookCardComponent.scss';

interface BookCardProps {
  book: BookItem;
}

const BookCardComponent: FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div className='book-card'>
      <div className='book-card-content'>
        {book.volumeInfo?.imageLinks?.thumbnail ? (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title || 'No Title'}
            className='book-thumbnail'
          />
        ) : (
          <div className='placeholder-thumbnail'></div>
        )}
        <h2 className='book-title'>{book?.volumeInfo?.title || 'No Title'}</h2>
        <p className='book-authors'>
          Authors: {book?.volumeInfo?.authors?.join(', ') || 'Unknown'}
        </p>
        <div className='book-description-container'>
          <p className='book-description'>
            {book?.volumeInfo?.description || 'No description available.'}
          </p>
        </div>
      </div>

      <div className='book-overlay'>
        <button
          className='book-details-button'
          onClick={() => navigate(`/bookdetails?bookId=${book.id}`)}>
          Show Details
        </button>
      </div>
    </div>
  );
};

export default BookCardComponent;
