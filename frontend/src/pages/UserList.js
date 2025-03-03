import React, { useState, useEffect } from 'react';
import { fetchUsers, createUser } from '../services/api';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    fetchUsers()
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData)
      .then(() => {
        loadUsers();
        setFormData({ name: '', email: '', role: '' });
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <div>
      <h2>사용자 목록</h2>

      <div style={{ marginBottom: '2rem' }}>
        <h3>새 사용자 추가</h3>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
          gap: '1rem'
        }}>
          <div>
            <label htmlFor="name">이름: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">이메일: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="role">역할: </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">역할 선택</option>
              <option value="TEACHER">교사</option>
              <option value="STUDENT">학생</option>
              <option value="ADMIN">관리자</option>
            </select>
          </div>

          <button type="submit" style={{
            padding: '0.5rem',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            사용자 추가
          </button>
        </form>
      </div>

      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>이름</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>이메일</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>역할</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.email}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  사용자가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;