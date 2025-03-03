import React, { useState, useEffect } from 'react';
import { fetchHello } from '../services/api';

function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHello()
      .then(response => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching hello message:', error);
        setMessage('서버 연결 오류');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>홈</h2>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <div>
          <p>백엔드 메시지: {message}</p>
          <p>특수학급 교육 애플리케이션에 오신 것을 환영합니다!</p>
        </div>
      )}
    </div>
  );
}

export default Home;