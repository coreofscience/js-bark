```ts
import {useState, useEffect} from 'react'

const Demo = () => {
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((progress + 5) % 100);
    }, 500);
    return () => {
      window.clearInterval(interval);
    };
  }, [progress]);
  return <ProgressBar progress={progress} />;
};

<Demo />
```