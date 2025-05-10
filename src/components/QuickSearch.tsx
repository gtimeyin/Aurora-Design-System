import React, { useState } from 'react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';

interface QuickSearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({ 
  onSearch, 
  placeholder = 'Search...' 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <form 
      className={`relative flex items-center transition-all duration-200 ${
        isFocused 
          ? 'w-64 md:w-72 lg:w-80' 
          : 'w-48 md:w-56 lg:w-64'
      }`}
      onSubmit={handleSearch}
    >
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlass 
            size={16} 
            className="text-text-tertiary"
          />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-1.5 pl-9 pr-8 border border-border-secondary focus:border-border-focus bg-background-tertiary rounded-lg text-sm text-text-primary focus:ring-1 focus:ring-border-focus outline-none transition-all"
          placeholder={placeholder}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X 
              size={14} 
              className="text-text-tertiary hover:text-text-primary transition-colors"
            />
          </button>
        )}
      </div>
    </form>
  );
}; 