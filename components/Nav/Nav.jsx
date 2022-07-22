import React from 'react';
import requests from "../../utils/requests";
import {useRouter} from "next/router";
import {Title} from "./Title";

export const Nav = () => {
  return (<nav className="relative">
    <div
      className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto scrollbar-hide">

      <Title/>

    </div>
    <div
      className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
  </nav>);
};

