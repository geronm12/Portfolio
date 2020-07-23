import React  from 'react';

export const useRedirection = (value) =>  {
    console.log(window.location.href);
    return window.location.href = value;
  
}
