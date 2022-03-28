import React, { useContext } from 'react'
import Card from './Card/index';
import './style.scss';
import {AppContext} from './../../ApiContext';

export default function Cards() {
    
const {data} = useContext(AppContext);

  return (
    <div id="cards"
    >
    {data && <>{data.map(item => <Card key={item.id} bg={item.image.url} name={item.name} />)}</>}
        
    </div>
  )
}
