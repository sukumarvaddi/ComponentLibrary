import React from "react";
import styled from "styled-components";

import { COLORS, VARIANT } from "./constants";

const SIZES = {
  small: { width: 93, height: 35 },
  medium: { width: 117, height: 53 },
  large: { width: 152, height: 65 }
};

const Button = ({ variant, size, children }) => {
  const buttonSize = SIZES[size];

  switch (variant) {
    case VARIANT.GHOST:
      return <GhostButton size={buttonSize}>{children}</GhostButton>;
    case VARIANT.OUTLINE:
      return <OutLineButton size={buttonSize}>{children}</OutLineButton>;
    default:
      return <FillButton size={buttonSize}>{children} </FillButton>;
  }
};

const BaseButton = styled.button`
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 2px;
`;

const FillButton = styled(BaseButton)`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  width: ${(props) => props.size.width}px;
  height: ${(props) => props.size.height}px;
  &:hover {
    background: ${COLORS.primaryLightened};
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
  }
`;

const OutLineButton = styled(BaseButton)`
  background: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;
  width: ${(props) => props.size.width + "px"};
  height: ${(props) => props.size.height + "px"};
  &:hover {
    background: ${COLORS.offwhite};
  }
  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
  }
`;

const GhostButton = styled(BaseButton)`
  color: ${COLORS.gray};
  background: transparent;
  border: none;
  width: ${(props) => props.size.width + "px"};
  height: ${(props) => props.size.height + "px"};
  &:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.transparentGray15};
  }
  &:focus {
    background-color: inherit;
    border: 2px solid ${COLORS.transparentGray75};
  }
`;

export default Button;
