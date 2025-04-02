import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [showIP, setShowIP] = useState(false);
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    // After 10 seconds, fetch IP info and show it
    const timer = setTimeout(async () => {
      const res = await fetch('/api/ip');
      const data = await res.json();
      setIpInfo(data);
      setShowIP(true);
    }, 10000); // Rickroll duration: 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <Head>
        <title>You've Been Rickrolled!</title>
      </Head>

      {!showIP ? (
        <>
          <h1>Enjoy this video!</h1>
          <video 
            autoPlay 
            controls 
            width="640" 
            height="360"
            style={{ margin: '20px auto', display: 'block' }}
          >
            <source src="/rickroll.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <>
          <h1>Gotcha! Here's your IP information:</h1>
          <pre style={{ 
            background: '#f0f0f0', 
            padding: '20px', 
            borderRadius: '5px',
            maxWidth: '600px',
            margin: '20px auto',
            textAlign: 'left'
          }}>
            {JSON.stringify(ipInfo, null, 2)}
          </pre>
        </>
      )}
    </div>
  );
              }
