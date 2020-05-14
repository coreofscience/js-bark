import React, { useState, FC } from "react";

import "./Picture.css";

interface Props {
  urls: string[];
}

const Picture: FC<Props> = ({ urls }: Props) => {
  const [number, setNumber] = useState(0);
  const url = urls[number];
  return (
    <div className="Picture">
      <div
        className="Picture-image"
        title={url}
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
      <div className="Picture-controls">
        <button onClick={() => setNumber(number - 1)} disabled={number < 1}>
          prev
        </button>
        <button
          onClick={() => setNumber(number + 1)}
          disabled={number >= urls.length - 1}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Picture;
