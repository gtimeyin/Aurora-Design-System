import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../design-system/ThemeContext';
import { CaretUp, CaretDown, FunnelSimple, X } from '@phosphor-icons/react';
import { Checkbox } from './Checkbox';

export type SortDirection = {
  order: 'ascend' | 'descend' | undefined;
  columnKey: string;
};

export interface TableFilter {
  text: string;
  value: any;
}

export interface TableColumn<T = any> {
  key: string;
  title: React.ReactNode;
  dataIndex?: string;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  sorter?: (a: T, b: T) => number;
  filterable?: boolean;
  filters?: TableFilter[];
  onFilter?: (value: any, record: T) => boolean;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  bordered?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
  className?: string;
  onRowClick?: (record: T, index: number) => void;
  onChange?: (
    pagination: any, 
    filters: Record<string, any[]>, 
    sorter: SortDirection, 
    extra: { currentDataSource: T[] }
  ) => void;
  defaultSortKey?: string;
  defaultSortOrder?: 'ascend' | 'descend';
  hasMore?: boolean;
  onLoadMore?: () => void;
  loadingMore?: boolean;
  onFilter?: (filters: Record<string, any[]>) => void;
  selectable?: boolean;
  selectedRowKeys?: React.Key[];
  onSelectionChange?: (selectedKeys: React.Key[], selectedRows: T[]) => void;
  rowKey?: string | ((record: T) => React.Key);
}

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  loading = false,
  bordered = false,
  striped = false,
  hoverable = false,
  compact = false,
  className = '',
  onRowClick,
  onChange,
  defaultSortKey,
  defaultSortOrder = 'ascend',
  hasMore = false,
  onLoadMore,
  loadingMore = false,
  onFilter,
  selectable = false,
  selectedRowKeys = [],
  onSelectionChange,
  rowKey = 'id',
}: TableProps<T>) => {
  const { mode } = useTheme();
  const tableRef = useRef<HTMLDivElement>(null);
  const [sortState, setSortState] = React.useState<SortDirection>(() => ({
    columnKey: defaultSortKey || '',
    order: defaultSortKey ? defaultSortOrder : undefined,
  }));

  const observerTarget = useRef<HTMLTableCellElement>(null);

  // Filter states
  const [filterValues, setFilterValues] = useState<Record<string, any[]>>({});
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close filter dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setActiveFilter(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!hasMore || !onLoadMore || loadingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      {
        root: tableRef.current,
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, onLoadMore, loadingMore]);

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable) return;
    
    let newOrder: 'ascend' | 'descend' | undefined;
    
    if (sortState.columnKey === column.key) {
      if (sortState.order === 'ascend') {
        newOrder = 'descend';
      } else if (sortState.order === 'descend') {
        newOrder = undefined;
      } else {
        newOrder = 'ascend';
      }
    } else {
      newOrder = 'ascend';
    }
    
    const newSortState = { columnKey: column.key, order: newOrder };
    setSortState(newSortState);
    
    if (onChange) {
      onChange({}, {}, newSortState, { currentDataSource: sortData(data) });
    }
  };

  const sortData = (dataToSort: T[]): T[] => {
    if (!sortState.columnKey || !sortState.order) {
      return dataToSort;
    }
    
    const column = columns.find(col => col.key === sortState.columnKey);
    if (!column || !column.sortable) {
      return dataToSort;
    }
    
    return [...dataToSort].sort((a, b) => {
      const sortVal = column.sorter 
        ? column.sorter(a, b) 
        : compareValues(
            column.dataIndex ? a[column.dataIndex] : a, 
            column.dataIndex ? b[column.dataIndex] : b
          );
          
      return sortState.order === 'ascend' ? sortVal : -sortVal;
    });
  };

  const compareValues = (a: any, b: any): number => {
    if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b);
    }
    
    if (a === b) return 0;
    if (a === null || a === undefined) return -1;
    if (b === null || b === undefined) return 1;
    
    return a < b ? -1 : 1;
  };

  const handleFilter = (columnKey: string, value: any) => {
    console.log('handleFilter called:', columnKey, value);
    setFilterValues(prevFilters => {
      const currentFilters = prevFilters[columnKey] || [];
      let newFilters: any[];

      if (currentFilters.includes(value)) {
        newFilters = currentFilters.filter(v => v !== value);
      } else {
        newFilters = [...currentFilters, value];
      }

      const newFilterValues = {
        ...prevFilters,
        [columnKey]: newFilters,
      };

      if (newFilters.length === 0) {
        delete newFilterValues[columnKey];
      }

      console.log('New filter values:', newFilterValues);
      return newFilterValues;
    });
  };

  const clearFilter = (columnKey: string) => {
    console.log('clearFilter called:', columnKey);
    setFilterValues(prevFilters => {
      const newFilters = { ...prevFilters };
      delete newFilters[columnKey];
      return newFilters;
    });
  };

  const filterData = (dataToFilter: T[]): T[] => {
    if (Object.keys(filterValues).length === 0) {
      return dataToFilter;
    }

    return dataToFilter.filter(record => {
      return Object.entries(filterValues).every(([columnKey, values]) => {
        if (!values || values.length === 0) return true;

        const column = columns.find(col => col.key === columnKey);
        if (!column) return true;

        if (column.onFilter) {
          return values.some(value => column.onFilter!(value, record));
        }

        const cellValue = column.dataIndex ? record[column.dataIndex] : record;
        return values.includes(cellValue);
      });
    });
  };

  const renderFilterDropdown = (column: TableColumn<T>) => {
    if (!column.filterable || !column.filters) return null;

    const isActive = activeFilter === column.key;
    const currentFilters = filterValues[column.key] || [];

    const handleCheckboxChange = (value: any) => {
      console.log('Checkbox change:', value);
      handleFilter(column.key, value);
    };

    return (
      <div className="relative inline-block" ref={filterRef}>
        <button
          type="button"
          className={`filter-button ${currentFilters.length > 0 ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setActiveFilter(isActive ? null : column.key);
          }}
        >
          <FunnelSimple
            size={16}
            weight={currentFilters.length > 0 ? "fill" : "regular"}
          />
        </button>
        
        {isActive && (
          <div 
            className="filter-dropdown"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="filter-dropdown-header">
              <span className="filter-dropdown-title">Filter</span>
              {currentFilters.length > 0 && (
                <button
                  type="button"
                  className="filter-clear-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    clearFilter(column.key);
                  }}
                >
                  <X size={14} />
                  Clear
                </button>
              )}
            </div>
            <div className="filter-dropdown-content">
              {column.filters.map((filter, index) => (
                <div 
                  key={index} 
                  className="filter-option"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <Checkbox
                    size="sm"
                    checked={currentFilters.includes(filter.value)}
                    onChange={() => handleCheckboxChange(filter.value)}
                    label={filter.text}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Process data with both sorting and filtering
  const processedData = sortData(filterData(data));

  // Get row key helper function
  const getRowKey = (record: T): React.Key => {
    return typeof rowKey === 'function' ? rowKey(record) : record[rowKey];
  };

  // Handle row selection
  const handleRowSelection = (record: T) => {
    const key = getRowKey(record);
    const newSelectedKeys = selectedRowKeys.includes(key)
      ? selectedRowKeys.filter(k => k !== key)
      : [...selectedRowKeys, key];
    
    const selectedRows = data.filter(item => newSelectedKeys.includes(getRowKey(item)));
    onSelectionChange?.(newSelectedKeys, selectedRows);
  };

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    const newSelectedKeys = checked ? data.map(record => getRowKey(record)) : [];
    const selectedRows = checked ? [...data] : [];
    onSelectionChange?.(newSelectedKeys, selectedRows);
  };

  const isAllSelected = data.length > 0 && selectedRowKeys.length === data.length;
  const isIndeterminate = selectedRowKeys.length > 0 && selectedRowKeys.length < data.length;

  const tableClasses = [
    'table',
    bordered ? 'table-bordered' : '',
    striped ? 'table-striped' : '',
    hoverable ? 'table-hoverable' : '',
    compact ? 'table-compact' : '',
    loading ? 'table-loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="table-container">
      <table className={tableClasses}>
        <thead className="table-header">
          <tr>
            {selectable && (
              <th className="table-selection-cell">
                <Checkbox
                  checked={isAllSelected}
                  indeterminate={isIndeterminate}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
            )}
            {columns.map((column, index) => (
              <th 
                key={column.key || index}
                className={`table-header-cell ${column.align ? `text-${column.align}` : ''} ${column.sortable ? 'sortable' : ''}`}
                style={{ width: column.width }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="table-header-content">
                  <span>{column.title}</span>
                  <div className="table-header-actions">
                    {column.filterable && renderFilterDropdown(column)}
                    {column.sortable && (
                      <div 
                        className="sort-indicators"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSort(column);
                        }}
                      >
                        {sortState.columnKey === column.key ? (
                          sortState.order === 'ascend' ? (
                            <CaretUp size={14} weight="bold" className="sort-icon active" />
                          ) : sortState.order === 'descend' ? (
                            <CaretDown size={14} weight="bold" className="sort-icon active" />
                          ) : (
                            <div className="sort-icon-default">
                              <CaretUp size={12} className="sort-icon" />
                              <CaretDown size={12} className="sort-icon" />
                            </div>
                          )
                        ) : (
                          <div className="sort-icon-default">
                            <CaretUp size={12} className="sort-icon" />
                            <CaretDown size={12} className="sort-icon" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {processedData.length > 0 ? (
            processedData.map((record, rowIndex) => (
              <tr 
                key={getRowKey(record)}
                className={`table-row ${selectedRowKeys.includes(getRowKey(record)) ? 'selected' : ''}`}
                onClick={() => {
                  if (selectable) {
                    handleRowSelection(record);
                  }
                  onRowClick?.(record, rowIndex);
                }}
              >
                {selectable && (
                  <td 
                    className="table-selection-cell"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Checkbox
                      size="sm"
                      checked={selectedRowKeys.includes(getRowKey(record))}
                      onChange={() => handleRowSelection(record)}
                    />
                  </td>
                )}
                {columns.map((column, colIndex) => (
                  <td 
                    key={`${rowIndex}-${column.key || colIndex}`}
                    className={`table-cell ${column.align ? `text-${column.align}` : ''}`}
                  >
                    {column.render 
                      ? column.render(column.dataIndex ? record[column.dataIndex] : record, record, rowIndex)
                      : column.dataIndex 
                      ? record[column.dataIndex] 
                      : null}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={selectable ? columns.length + 1 : columns.length} className="table-empty">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {hasMore && (
        <div className="table-load-more">
          <button
            className="btn btn-white btn-sm"
            onClick={onLoadMore}
            disabled={loadingMore}
          >
            {loadingMore ? (
              <div className="flex items-center gap-2">
                <div className="table-loading-spinner-sm" />
                <span>Loading...</span>
              </div>
            ) : (
              'Load More'
            )}
          </button>
        </div>
      )}
      {loading && (
        <div className="table-loading-overlay">
          <div className="table-loading-spinner" />
        </div>
      )}
    </div>
  );
}; 