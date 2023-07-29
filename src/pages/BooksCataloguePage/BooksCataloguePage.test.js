import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { mockData } from '../../__mocks__/mockData';
import { GetListOfBooksService } from '../../services';
import BooksCataloguePage from './BooksCataloguePage';

// Mock the API service
jest.mock('../../services', () => ({
  GetListOfBooksService: jest.fn(() => Promise.resolve(mockData)),
}));

describe('BooksCataloguePage Component', () => {
  it('displays loading skeletons while fetching data', () => {
    render(
      <BrowserRouter>
        <BooksCataloguePage />
      </BrowserRouter>,
    );
    const loadingSkeletons = screen.getAllByTestId('book-card-loading');
    expect(loadingSkeletons).toHaveLength(8);
  });

  it('renders book cards when data is fetched', async () => {
    render(
      <BrowserRouter>
        <BooksCataloguePage />
      </BrowserRouter>,
    );
    const bookCards = await screen.findAllByTestId('book-card');
    expect(bookCards).toHaveLength(mockData.items.length);
  });

  it('renders the correct book titles', async () => {
    render(
      <BrowserRouter>
        <BooksCataloguePage />
      </BrowserRouter>,
    );
    const bookTitles = await screen.findAllByTestId('book-title');
    const expectedTitles = mockData.items.map((book) => book.volumeInfo.title);
    bookTitles.forEach((titleElement, index) => {
      expect(titleElement.textContent).toBe(expectedTitles[index]);
    });
  });

  it('updates the filter and triggers API request when the filter is changed', async () => {
    render(
      <BrowserRouter>
        <BooksCataloguePage />
      </BrowserRouter>,
    );
    const filterInput = screen.getByTestId('search-input');
    fireEvent.change(filterInput, { target: { value: 'test' } });

    // Wait for the API request to complete
    await screen.findAllByTestId('book-card');

    // The API should have been called with the new filter value
    expect(GetListOfBooksService.mock.calls[1][0]).toBe('test');
  });

  it('updates pagination and triggers API request when "Next" button is clicked', async () => {
    render(
      <BrowserRouter>
        <BooksCataloguePage />
      </BrowserRouter>,
    );
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    // Wait for the API request to complete
    await screen.findAllByTestId('book-card');

    // The API should have been called with the updated start index for the next page
    expect(GetListOfBooksService.mock.calls[1][3]).toBe(8);
  });

  it('updates pagination and triggers API request when "Previous" button is clicked', async () => {
    render(
      <BrowserRouter>
        <BooksCataloguePage />
      </BrowserRouter>,
    );
    const previousButton = screen.getByText('Previous');
    fireEvent.click(previousButton);

    // Wait for the API request to complete
    await screen.findAllByTestId('book-card');

    // The API should have been called with the updated start index for the previous page
    expect(GetListOfBooksService.mock.calls[1][3]).toBe(8);
  });
});
