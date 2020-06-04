import React, { FC } from "react";
import range from "lodash.range";
import "./Tree.css";

const Tree: FC = () => {
  return (
    <div className="Tree">
      {["root", "trunk", "leave"].map((section) => (
        <div className={`Tree-segment ${section}`}>
          <div className="Tree-segment-info">
            <div className="Info">
              <h3>Info</h3>
              <p>Info body</p>
            </div>
          </div>
          <div className="Tree-segment-articles">
            {range(5).map((number: number) => (
              <div key={`${section}-${number}`} className="Article">
                <h3>Title {number + 1}</h3>
                <div className="Article-info">
                  <p>More info</p>
                  <a href="https://dx.doi.org/">DDOIDOIDO/IOI</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tree;
