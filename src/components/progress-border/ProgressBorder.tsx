import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {
  progress: number;
  position: "top" | "bottom";
  children?: any;
}

const Border = styled.div.attrs(
  (props: Props): Props => ({
    position: props.position || "bottom",
    progress: props.progress || 0,
  })
)`
  position: relative;
  display: inline-block;
  margin: 10px 10px;
  &::after {
    position: absolute;
    content: "";
    display: block;
    height: 5px;
    width: 100%;
    transition: transform 500ms linear;
    background: linear-gradient(to right, green 0%, teal 100%);
    transform-origin: 0%;
    transform: scaleX(${(props) => props.progress / 100});
    ${(props) =>
      props.position === "top" &&
      css`
        left: 0;
        top: -10px;
      `}
    ${(props) =>
      props.position === "bottom" &&
      css`
        left: 0;
        bottom: -10px;
      `};
  }
`;

const ProgressBorder: FC<Props> = ({ children, ...props }: Props) => (
  <Border {...props}>{children}</Border>
);

export default ProgressBorder;
