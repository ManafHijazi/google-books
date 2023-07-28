import './FilterComponent.scss';

import { FC } from 'react';

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

interface FilterComponentProps {
  localSearchValue: LocalSearchValue;
  setLocalSearchValue: React.Dispatch<React.SetStateAction<LocalSearchValue>>;
  filter: { searchQuery: string };
  setFilter: React.Dispatch<React.SetStateAction<{ searchQuery: string }>>;
  searchOptions: SearchOptions;
  setSearchOptions: React.Dispatch<React.SetStateAction<SearchOptions>>;
}

const FilterComponent: FC<FilterComponentProps> = ({
  localSearchValue,
  setLocalSearchValue,
  filter,
  setFilter,
  searchOptions,
  setSearchOptions,
}) => {
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
      <input
        type="text"
        placeholder="Search"
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
