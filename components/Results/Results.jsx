import React from 'react';
import FlipMove from "react-flip-move";
import {ResultItem} from "./ResultItem";

export const Results = ({results}) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results?.map((result) => (
        <ResultItem key={result.id} result={result}/>
      ))}
    </FlipMove>
  );
};

