import './BooksDetails.scss';

import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { showError } from '../../helpers';
import { BookItem, GetBookDetailsService } from '../../services';

/**
 * Skeleton component to display a placeholder skeleton while book information is loading.
 */
const SkeletonBookInfo: FC = () => (
  // Skeleton HTML structure for book information
  <div className="book-info-skeleton">
    <div className="skeleton-thumbnail" />
    <div className="skeleton-info">
      <div className="skeleton-title" />
      <div className="skeleton-authors" />
    </div>
  </div>
);

/**
 * Component to display details of a book including title, authors, published date,
 * page count, categories, and average rating.
 */
const BooksDetailsPage: FC = () => {
  // Extract the bookId from the URL using useParams hook
  const { bookId } = useParams<{ bookId: string }>();

  // State to manage loading status of book details
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // State to store the response data from the backend API
  const [bookDetailsResponse, setBookDetailsResponse] = useState<BookItem>({
    id: '',
    volumeInfo: {
      title: '',
      authors: [],
      description: '',
      imageLinks: {
        thumbnail: '',
      },
      publishedDate: '',
      pageCount: 0,
      categories: [],
      averageRating: 0,
    },
    previewLink: '',
    infoLink: '',
  });

  // Function to fetch book details from the backend API
  const getBookDetailsService = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await GetBookDetailsService(bookId || '');

      if (response) {
        setBookDetailsResponse(response);
      } else {
        showError('Failed To Get Book Details!');
      }
    } catch (error) {
      showError('Error while fetching book details!');
    }

    setIsLoading(false);
  }, [bookId]);

  // Fetch book details on component mount
  useEffect(() => {
    getBookDetailsService();
  }, [getBookDetailsService]);

  // Function to convert HTML description to plain text
  const convertHtmlToPlainText = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    return doc.body.textContent || '';
  };

  return (
    <div className="book-details-wrapper">
      <div className="book-details-content">
        {isLoading ? (
          // Display skeleton while loading book details
          <SkeletonBookInfo />
        ) : (
          bookDetailsResponse && (
            // Display book details once loaded
            <div className="book-details">
              <div className="book-image-info-wrapper">
                {bookDetailsResponse.volumeInfo?.imageLinks?.thumbnail ? (
                  <img
                    src={bookDetailsResponse.volumeInfo.imageLinks.thumbnail}
                    alt={bookDetailsResponse.volumeInfo.title || 'No Title'}
                    className="book-thumbnail"
                  />
                ) : (
                  <div className="placeholder-thumbnail" />
                )}

                <div className="info-section">
                  <h2 className="book-title">
                    {bookDetailsResponse?.volumeInfo?.title || 'No Title'}
                  </h2>
                  <p className="book-authors">
                    <span>Authors:</span>
                    {bookDetailsResponse?.volumeInfo?.authors?.join(', ') || 'Unknown'}
                  </p>
                </div>
              </div>

              <div className="book-info">
                <div className="book-info-item">
                  <span className="book-info-item-label">Published Date:</span>
                  <span className="book-info-item-value">
                    {bookDetailsResponse?.volumeInfo?.publishedDate || '-'}
                  </span>
                </div>
                <div className="book-info-item">
                  <span className="book-info-item-label">Page Count:</span>
                  <span className="book-info-item-value">
                    {bookDetailsResponse?.volumeInfo?.pageCount || '-'}
                  </span>
                </div>
                <div className="book-info-item">
                  <span className="book-info-item-label">Categories:</span>
                  <span className="book-info-item-value">
                    {bookDetailsResponse?.volumeInfo?.categories?.join(', ') || '-'}
                  </span>
                </div>
                <div className="book-info-item">
                  <span className="book-info-item-label">Average Rating:</span>
                  <span className="book-info-item-value">
                    {bookDetailsResponse?.volumeInfo?.averageRating || '-'}
                  </span>
                </div>
              </div>
            </div>
          )
        )}
        <div className="book-description-container">
          {isLoading ? (
            // Display skeleton for book description while loading
            <>
              {[...Array(10)].map((_, index) => (
                <div key={index} className="skeleton-description" />
              ))}
            </>
          ) : (
            // Display book description once loaded
            <p className="book-description">
              {convertHtmlToPlainText(bookDetailsResponse?.volumeInfo?.description) ||
                'No description available.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;
