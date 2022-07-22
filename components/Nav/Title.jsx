import React from 'react';
import requests from "../../utils/requests";
import {useRouter} from "next/router";

export const Title = () => {
  const router = useRouter();
  return (
    <>
      {Object.entries(requests)
        .map(([key, {title, url}]) => (<
            h2 key={url}
               className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-cyan-300 active:text-red-500"
               onClick={() => router.push(`/?genre=${key}`)}>{title}
          </h2>
        ))}
    </>
  );
};

