import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './FilterBar.css';
import { useState, useMemo, useEffect } from 'react';
import { User } from '@employee-statuses/shared';

const JsSearch: any = require('js-search');

const filterModes: (keyof User)[] = ['name', 'status', 'id'];
type FilterMode = (typeof filterModes)[number];

interface FilterBarProps {
  allUsers: User[];
  onFilterAction: (filteredUsers: User[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ allUsers, onFilterAction }) => {
  const [currentFilterMode, setFilterMode] = useState<FilterMode>(filterModes[0]);
  const [lastSearchTerm, setSearchTerm] = useState<string>('');

  const searchTools = useMemo(() => {
    return filterModes.reduce((acc, filterMode) => {
      const search = new JsSearch.Search('id');
      search.addIndex(filterMode);
      search.addDocuments(allUsers ?? []);
      acc[filterMode] = search;
      return acc;
    }, {} as Record<FilterMode, any>);
  }, [allUsers]);

  useEffect(()=> {
    onFilterSearch(lastSearchTerm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTools, currentFilterMode])

  function changeFilterMode(event: SelectChangeEvent){
    const filterMode = event.target.value as FilterMode;
    setFilterMode(filterMode);
  };

  function onFilterSearch(searchTerm: string){
    setSearchTerm(searchTerm);
    if (searchTerm.length === 0){
        onFilterAction(allUsers);
    } else {
        const searchResults = searchTools[currentFilterMode].search(searchTerm) || [];
        onFilterAction(searchResults as User[]);
    }
  };

  return (
      <Paper component="form" className="filter-bar">
        <SearchIcon className="search-icon" />
        <InputBase
          placeholder="Type to search"
          className="input-base"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onFilterSearch(event.target.value)}
        />
        <Divider className="divider" orientation="vertical" />
        <Select
          value={currentFilterMode}
          onChange={changeFilterMode}
          className="search-dropdown"
        >
          {filterModes.map((filter, index) => (
            <MenuItem key={`filter_${index}`} value={filter}>
              {`Filter by ${filter}`}
            </MenuItem>
          ))}
        </Select>
      </Paper>
  );
};

export default FilterBar;
