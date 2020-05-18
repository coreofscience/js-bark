```ts
import {useState, useEffect} from 'react'

const Demo = () => {
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress(Math.floor(Date.now() / 80) % 100);
    }, 500);
    return () => {
      window.clearInterval(interval);
    };
  }, []);
  return <ProgressBar progress={progress} />;
};

<Demo />
```