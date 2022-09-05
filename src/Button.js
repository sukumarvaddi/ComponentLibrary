import React from "react";
import styled from "styled-components";

import { COLORS, VARIANT } from "./constants";

const SIZES = {
  small: { padding: "4px 12px" },
  medium: { padding: "12px 20px" },
  large: { padding: "16px 32px" }
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
   padding: ${(props) => props.size.padding};
`;

const FillButton = styled(BaseButton)`
  background: ${COLORS.primary};
  color: ${COLORS.white};
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
 
  &:hover {
    background: ${COLORS.offwhite};
  }
  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
  }
`;

const GhostButton = styled(BaseButton)`
  background: transparent;
  color: ${COLORS.gray};
  &:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.transparentGray15};
  }
  &:focus {
    outline: 2px solid ${COLORS.transparentGray75};
  }
`;

export default Button;
