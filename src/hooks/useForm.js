import React, {useState} from 'react';

export const useForm = (initialValues = {}) =>  {
    
   const [values, setValues] = useState(initialValues);


   const HandleFormChange = ({target}) => {
        setValues({...values, [target.name] : target.value});
        
   }

   return [values, HandleFormChange];

}
