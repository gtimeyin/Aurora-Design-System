import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { X } from "@phosphor-icons/react";

export interface ComboTextBoxItem {
  id: string;
  label: string;
}

interface ComboTextBoxProps {
  items: ComboTextBoxItem[];
  selectedItems: ComboTextBoxItem[];
  onSelectionChange: (items: ComboTextBoxItem[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const ComboTextBox: React.FC<ComboTextBoxProps> = ({
  items,
  selectedItems,
  onSelectionChange,
  placeholder = "Search and select items...",
  className = "",
  disabled = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter items based on search query and exclude already selected items
  const filteredItems = items.filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedItems.some((selected) => selected.id === item.id),
  );

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredItems[highlightedIndex]) {
          handleItemSelect(filteredItems[highlightedIndex]);
        }
        break;
      case "Backspace":
        if (searchQuery === "" && selectedItems.length > 0) {
          handleRemoveItem(selectedItems[selectedItems.length - 1]);
        }
        break;
      case "Escape":
        setIsDropdownOpen(false);
        break;
    }
  };

  // Handle item selection
  const handleItemSelect = (item: ComboTextBoxItem) => {
    onSelectionChange([...selectedItems, item]);
    setSearchQuery("");
    setHighlightedIndex(-1);
    inputRef.current?.focus();
  };

  // Handle item removal
  const handleRemoveItem = (item: ComboTextBoxItem) => {
    onSelectionChange(selectedItems.filter((i) => i.id !== item.id));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`flex flex-wrap gap-2 p-2 min-h-[42px] bg-background-primary border border-border-primary rounded-radius-lg focus-within:border-border-focus ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {/* Selected Tags */}
        {selectedItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-1 px-2 py-1 bg-background-secondary rounded-radius-md text-text-primary text-sm"
          >
            <span>{item.label}</span>
            {!disabled && (
              <button
                onClick={() => handleRemoveItem(item)}
                className="text-text-tertiary hover:text-text-primary"
                type="button"
              >
                <X size={14} />
              </button>
            )}
          </div>
        ))}

        {/* Search Input */}
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsDropdownOpen(true);
            setHighlightedIndex(-1);
          }}
          onFocus={() => setIsDropdownOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={selectedItems.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-text-primary placeholder-text-tertiary"
          disabled={disabled}
        />
      </div>

      {/* Dropdown */}
      {isDropdownOpen && filteredItems.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-background-primary border border-border-primary rounded-radius-lg shadow-lg max-h-60 overflow-y-auto"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`px-3 py-2 cursor-pointer text-text-primary hover:bg-background-secondary ${
                index === highlightedIndex ? "bg-background-secondary" : ""
              }`}
              onClick={() => handleItemSelect(item)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
