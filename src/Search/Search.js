import React from "react";

export default function Search(props) {
  const { q, printType, filter } = props;

  return (
    <form onSubmit={(e) => props.search(e)}>
      <p>
        <input
          type='text'
          value={q}
          onChange={(e) => props.updateState("q", e.target.value)}
        />
      </p>
      <p>
        <label htmlFor='printType'>Type: </label>
        <select
          id='printType'
          value={printType}
          onChange={(e) => props.updateState("printType", e.target.value)}
        >
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>

        <label htmlFor='filter'> Filter: </label>
        <select
          id='filter'
          value={filter}
          onChange={(e) => props.updateState("filter", e.target.value)}
        >
          <option value=''>None</option>
          <option value='partial'>Partial</option>
          <option value='full'>Full</option>
          <option value='free-ebooks'>Free eBooks</option>
          <option value='paid-ebooks'>Paid eBooks</option>
        </select>
      </p>
      <input type='submit' />
    </form>
  );
}
