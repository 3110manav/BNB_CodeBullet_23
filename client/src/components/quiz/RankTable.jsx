import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import './rankTableStyles.css'
const RankTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Generate sample data
      const generatedData = [];
      for (let i = 0; i < 10; i++) {
        generatedData.push({
          id: i+1,
          avatar: faker.image.avatar(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
        });
      }
      console.log(generatedData)
      setData(generatedData);
    }, []);
  
  return (
    <div className="rank-table-container">
      <h2>Rank Table</h2>
      <table className="rank-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td><img src={row.avatar} alt="Avatar" className="avatar" /></td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RankTable
