import React  from 'react';

export const useRedirection = (value) =>  {
    
    console.log(value);

    return window.location.href = value;
  
}
