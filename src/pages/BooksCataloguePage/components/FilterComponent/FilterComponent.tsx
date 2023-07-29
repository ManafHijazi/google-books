/**
 * FilterComponent Component
 *
 * This component displays a search filter with various input fields
 * to refine the search options for the Books Catalogue.
 */

import './FilterComponent.scss';

import React, { FC } from 'react';

import { SearchOptions } from '../../../../services';

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
 * Interface for props passed to the FilterComponent.
 */
interface FilterComponentProps {
  localSearchValue: LocalSearchValue;
  setLocalSearchValue: React.Dispatch<React.SetStateAction<LocalSearchValue>>;
  setFilter: React.Dispatch<React.SetStateAction<{ searchQuery: string }>>;
  setSearchOptions: React.Dispatch<React.SetStateAction<SearchOptions>>;
}

/**
 * FilterComponent Functional Component.
 * @param props - Props for the FilterComponent.
 * @returns A functional component representing the FilterComponent.
 */
const FilterComponent: FC<FilterComponentProps> = ({
  setFilter,
  localSearchValue,
  setSearchOptions,
  setLocalSearchValue,
}) => {
  /**
   * Function to handle the search action.
   * It updates the filter and search options based on local search values.
   */
  const handleSearch = () => {
    setFilter((items) => ({
      ...items,
      searchQuery: localSearchValue.searchQuery,
    }));
    setSearchOptions((items) => ({
      ...items,
      inauthor: localSearchValue.inauthor,
      intitle: localSearchValue.intitle,
      inpublisher: localSearchValue.inpublisher,
      subject: localSearchValue.subject,
      isbn: localSearchValue.isbn,
      lccn: localSearchValue.lccn,
      oclc: localSearchValue.oclc,
    }));
  };

  /**
   * Function to handle the clear action.
   * It resets the filter, search options, and local search values to their initial state.
   */
  const handleClear = () => {
    setFilter({ searchQuery: 'test' });
    setSearchOptions({
      inauthor: '',
      intitle: '',
      inpublisher: '',
      subject: '',
      isbn: '',
      lccn: '',
      oclc: '',
    });
    setLocalSearchValue({
      searchQuery: '',
      inauthor: '',
      intitle: '',
      inpublisher: '',
      subject: '',
      isbn: '',
      lccn: '',
      oclc: '',
    });
  };

  return (
    <div className="search-container">
      {/* Input fields for search and filtering */}
      <input
        type="text"
        placeholder="Search"
        data-testid="search-input"
        value={localSearchValue.searchQuery || ''}
        onChange={(event) => {
          const { value } = event.target;
          setLocalSearchValue((items) => ({ ...items, searchQuery: value }));
        }}
      />
      <input
        type="text"
        placeholder="Author"
        value={localSearchValue.inauthor || ''}
        onChange={(event) => {
          const { value } = event.target;
          setLocalSearchValue((items) => ({ ...items, inauthor: value }));
        }}
      />
      <input
        type="text"
        placeholder="Title"
        value={localSearchValue.intitle || ''}
        onChange={(event) => {
          const { value } = event.target;
          setLocalSearchValue((items) => ({ ...items, intitle: value }));
        }}
      />
      <input
        type="text"
        placeholder="Publisher"
        value={localSearchValue.inpublisher || ''}
        onChange={(event) => {
          const { value } = event.target;
          setLocalSearchValue((items) => ({ ...items, inpublisher: value }));
        }}
      />
      <input
        type="text"
        placeholder="Subject"
        value={localSearchValue.subject || ''}
        onChange={(event) => {
          const { value } = event.target;
          setLocalSearchValue((items) => ({ ...items, subject: value }));
        }}
      />
      <input
        type="text"
        placeholder="isbn"
        value={localSearchValue.isbn || ''}
        onChange={(event) => {
          const { value } = event.target;
          setLocalSearchValue((items) => ({ ...items, isbn: value }));
        }}
      />
      <input
        type="text"
        placeholder="lccn"
        value={localSearchValue.lccn || ''}
        onChange={(event) => {
          const { value } = event.target;
          setLocalSearchValue((items) => ({ ...items, lccn: value }));
        }}
      />
      <input
        type="text"
        placeholder="oclc"
        value={localSearchValue.oclc || ''}
        onChange={(event) => {
          const { value } = event.target;
          setLocalSearchValue((items) => ({ ...items, oclc: value }));
        }}
      />

      {/* Buttons for search and clear actions */}
      <div className="search-btn">
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="clear-btn">
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default FilterComponent;
