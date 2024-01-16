import AxiosInstance from "../configs/axiosInstance";
import React, { useState } from 'react';

export default function Home() {

    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={async () => {
            setCount(count + 1);
           console.log( AxiosInstance,'Authorization');
            await AxiosInstance.get('api/getBlogs/').catch(err => err);
        }}>
          Click me
        </button>
      </div>
    );
}