import React, { useState, useEffect } from 'react';
import useFetch from "./useFetch";

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
    const {data,loading,error} = useFetch('https://api.thedogapi.com/v1/breeds?limit=10')
  
  
    if(error){
      console.log(error)
   }
	
	return (
		<AppContext.Provider value={{ data }}>
			{props.children}
		</AppContext.Provider>
	);
}