import React from 'react';

export const HeaderItem = ({title, Icon}) => {
  return (<div
      className='group flex items-center flex-col cursor-pointer w-12 sm:w-200 mx-[5px]'>
      <Icon className="h-5 w-5 text-white-100 group-hover:animate-bounce"/>
      <p
        className='tracking-widest opacity-0 group-hover:opacity-100 ease-in-out duration-200 hover:text-cyan-300'>{title}</p>
    </div>);
};
