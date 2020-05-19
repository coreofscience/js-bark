The looks:

```js
import { useState, useEffect } from "react";

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
  return (
    <ProgressBorder progress={progress}>
      <p style={{ background: "lightcoral" }}>Here's how it would look</p>
    </ProgressBorder>
  );
};

<Demo />;
```

Here's how it looks like under a big thing.

```js
import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

const Thing = styled.div`
  display: block;
  width: 300px;
  height: 200px;
  background: linear-gradient(45deg, cyan 0%, blue 100%);
`;

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
  return (
    <Fragment>
      <ProgressBorder progress={progress}>
        <Thing />
      </ProgressBorder>
      <ProgressBorder progress={100}>
        <Thing />
      </ProgressBorder>
    </Fragment>
  );
};

<Demo />;
```

And in the top.

```js
import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

const Thing = styled.div`
  display: block;
  width: 300px;
  height: 200px;
  background: linear-gradient(45deg, cyan 0%, blue 100%);
`;

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
  return (
    <Fragment>
      <ProgressBorder position="top" progress={progress}>
        <Thing />
      </ProgressBorder>
      <ProgressBorder position="top" progress={100}>
        <Thing />
      </ProgressBorder>
    </Fragment>
  );
};

<Demo />;
```

The component adds some margin around so that we can fit the progress bar
comfortably.