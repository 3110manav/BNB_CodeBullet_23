import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import './rankTableStyles.css'
import { getAllQuizUsers } from '../../service/api';
const RankTable = ({ currentUser={} }) => {
  const [data, setData] = useState([]);

  useEffect(() => async () => {
    // Generate sample data
    const generatedData = [];
    const res = await getAllQuizUsers();
    let allUsers = res.data;
    /*
    for (let i = 0; i < 10; i++) {
      generatedData.push({
        
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
      });
    }
    */
    if (currentUser && Object.keys(currentUser).length > 0) {
      // currentUser["avatar"] = faker.image.avatar();
      allUsers.push(currentUser);
    }
    for (let i = 0; i < allUsers.length; i++) {
      allUsers[i]["avatar"] = faker.image.avatar();
      allUsers[i]["phone"] = faker.phone.number();
    }
    console.log(allUsers);
    setData(allUsers);
  }, [currentUser]);

  return (
    <div className="rank-table-container">
      <h2>Rank Table</h2>
      <table className="rank-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            data.sort((a, b) => {
              // First, sort based on rank
              if (a.score !== b.score) {
                return b.score - a.score;
              }
              // If ranks are equal, sort based on username
              return a.username.localeCompare(b.username);
            })
          .map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={row.avatar} alt="Avatar" className="avatar" /></td>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>{row.score}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default RankTable
