import React, { useState } from 'react';
import axios from 'axios';

const AppDump = () => {
  const [ data, setData ]= useState(null);
  // const onClick = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
  //     setData(response.data);
  //   });
  // }

  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fbdf37320f5b44169d051b411419cd4b',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div>
      <div>
        <button onClick = { onClick } >불러오기</button>
      </div>
      { data && <textarea rows = { 7 } value = { JSON.stringify(data, null, 2)} readOnly = { true } />}
    </div>
  )
}

export default AppDump;