import React, { useEffect, useRef } from 'react';
import { Datatable, initTE } from 'tw-elements';

// Initialize TE (Tailwind Elements) with Datatable
initTE({ Datatable });

const DataTable = ({ data }) => {
  const datatableRef = useRef(null);

  useEffect(() => {
    // Initialize Datatable with the data and the DOM element
    const instance = new Datatable(datatableRef.current, data);

    // Add an event listener for the search input
    const searchInput = document.getElementById('datatable-search-input');
    searchInput.addEventListener('input', (e) => {
      instance.search(e.target.value);
    });

    return () => {
      // Clean up event listener when the component unmounts
      searchInput.removeEventListener('input', (e) => {
        instance.search(e.target.value);
      });
    };
  }, []);

  return (
    <div>
      <div className="mb-3 mt-3">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            id="datatable-search-input"
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          {/* Search button */}
          <button
            className="relative z-[2] flex items-center rounded bg-black px-3 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out bg-blue-500 focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg ml-2"
            type="button"
            id="advanced-search-button"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Add New button */}
          <button
            className="relative z-[2] flex items-center rounded bg-black px-3 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out bg-blue-500 focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg ml-3 mr-1"
            type="button"
            id="add-new-button"
            onClick={() => {
              // Handle the click event to open the form in the future
              // You can implement the form display logic here
            }}
          >
            Add New
          </button>
        </div>
      </div>
      <div ref={datatableRef}></div>
    </div>
  );
};

export default DataTable;
