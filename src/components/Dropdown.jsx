import React, { useState } from "react";
import { MoreHoriz, Cancel, SortDown, Filter } from "iconoir-react";
import { useSelector, useDispatch } from "react-redux";
import { sortChange } from "../reducers/sortReducer";
import { filterChange } from "../reducers/filterReducer";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [sort, filter] = useSelector((state) => [state.sort, state.filter]);
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => setShowDropdown(!showDropdown)}>
        <MoreHoriz width={30} height={30} />
      </button>
      {showDropdown && (
        <div className="absolute top-7 right-7 w-64 border-2 border-gray-100 bg-white rounded-md shadow-lg">
          <div className="flex justify-between items-center border-b-2 px-2 py-1">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Filtering and sorting
            </p>
            <button type="button" onClick={() => setShowDropdown(false)}>
              <Cancel width={30} height={30} />
            </button>
          </div>
          <button
            type="button"
            className={`flex items-center px-2 py-2 w-full hover:bg-gray-100 ${
              sort !== "TIME" ? "font-bold underline" : ""
            }`}
            onClick={() =>
              dispatch(sortChange(sort === "TIME" ? "ALPHABETICALLY" : "TIME"))
            }
          >
            <SortDown width={20} height={20} className="inline" />
            <p className="ml-2">Sort alphabetically</p>
          </button>
          <button
            type="button"
            className={`flex items-center px-2 py-2 w-full hover:bg-gray-100 ${
              filter !== "ALL" ? "font-bold underline" : ""
            }`}
            onClick={() =>
              dispatch(filterChange(filter === "ALL" ? "STARRED" : "ALL"))
            }
          >
            <Filter width={20} height={20} className="inline" />
            <p className="ml-2">Filter starred tasks</p>
          </button>
        </div>
      )}
    </>
  );
};

export default Dropdown;
