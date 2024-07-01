import { useState } from 'react';
import './App.css';
import { Data } from './data';

function App() {
  const [search, setsearch] = useState('');

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center text-5xl my-10'>Contact Keeper</h1>
        <input
          onChange={(e) => { setsearch(e.target.value.toLowerCase()); }}
          className='block border p-3 text-sm focus:border-gray-300 rounded w-1/2 my-5'
          type='text'
          placeholder='Search'
        />

        <table className='w-1/2 text-left border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-2 border border-gray-300'>FirstName</th>
              <th className='p-2 border border-gray-300'>LastName</th>
              <th className='p-2 border border-gray-300'>Email</th>
              <th className='p-2 border border-gray-300'>Phone</th>
              <th className='p-2 border border-gray-300'>Gender</th>
            </tr>
          </thead>
          <tbody>
            {Data.filter((item) => item.first_name.toLowerCase().includes(search)).map((item) => (
              <tr key={item.id}>
                <td className='p-3 border border-gray-300'>{item.first_name}</td>
                <td className='p-3 border border-gray-300'>{item.last_name}</td>
                <td className='p-3 border border-gray-300'>{item.email}</td>
                <td className='p-3 border border-gray-300'>{item.phone}</td>
                <td className='p-3 border border-gray-300'>{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
