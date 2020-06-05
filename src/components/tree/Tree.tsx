import React, { FC } from "react";
import range from "lodash.range";
import "./Tree.css";

interface Info {
  title: string;
  description: string;
}

interface SectionInfo {
  root: Info;
  trunk: Info;
  leaf: Info;
}

const INFO: SectionInfo = {
  root: {
    title: "Root",
    description:
      "Here you should find seminal articles from the original articles of your topic of interest.",
  },
  trunk: {
    title: "Trunk",
    description:
      "Here you should find articles where your topic of interest got a structure, these should be the first authors to discover the applicability of your topic of interest",
  },
  leaf: {
    title: "Leaves",
    description:
      "Here you should find recent articles and reviews that should condense very well your topics.",
  },
};

interface Article {
  label: string;
  title?: string;
  authors: string[];
  year?: number;
}

type Props = {
  [k in keyof SectionInfo]: Article[];
};

const Tree: FC<Props> = (props) => {
  return (
    <div className="Tree">
      {(Object.keys(INFO) as Array<keyof SectionInfo>).map((section) => (
        <div className={`Tree-segment ${section}`}>
          <div className="Tree-segment-info">
            <div className="Info">
              <h3>{INFO[section]["title"]}</h3>
              <p>{INFO[section]["description"]}</p>
            </div>
          </div>
          <div className="Tree-segment-articles">
            {range(5).map((number: number) => (
              <div key={`${section}-${number}`} className="Article">
                <h3>Title {number + 1}</h3>
                <div className="Article-info">
                  <p>More info</p>
                  <a
                    href="https://dx.doi.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DDOIDOIDO/IOI
                  </a>
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
