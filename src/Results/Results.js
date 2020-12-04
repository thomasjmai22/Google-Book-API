import React from "react";

export default function Results(props) {
  const { q, results } = props;

  return (
    <section className='results'>
      <h2>
        Results for the search {q} - {results.length}
      </h2>
      <ul>
        {results.map((book, i) => (
          <li key={i}>
            <a href={book.volumeInfo.infoLink} target='_blank'>
              {book.volumeInfo.title}
            </a>
          </li>
        ))}
      </ul>
      {/* <div>
        {props.volumeInfo.authors ? (
          <p className='author'>
            {" "}
            <span className='bold'>Author:</span> {props.volumeInfo.authors}
          </p>
        ) : (
          <p>no author</p>
        )}
        {props.saleInfo.listPrice ? (
          <p className='price'>
            {" "}
            <span className='bold'>Price: </span>$
            {props.saleInfo.listPrice.amount}
          </p>
        ) : (
          <p>Free</p>
        )}
        <div className='description'>
          {" "}
          Description: {props.volumeInfo.description}
        </div>
      </div> */}
    </section>
  );
}
