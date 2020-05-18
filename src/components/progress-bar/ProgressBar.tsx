import React, { FC } from "react";
import styled, { css } from "styled-components";

const Metter = styled.div`
  height: 20px;
  position: relative;
  background: #555;
  border-radius: 0;
  padding: 5px;
  box-shadow: inset 0 -1px 1px #ffffff55;
`;

interface Props {
  progress: number;
}

const Bar = styled.span`
  display: block;
  height: 100%;
  width: 100%;
  background-color: lightcoral;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s linear;
  transform-origin: 0%;
  ${(props: Props) =>
    css`
      transform: scaleX(${props.progress / 100});
    `}
`;

const ProgressBar: FC<Props> = ({ progress }: Props) => {
  return (
    <Metter>
      <Bar progress={progress} />
    </Metter>
  );
};

ProgressBar.defaultProps = {
  progress: 0,
};

export default ProgressBar;
