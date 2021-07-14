import React from "react";
import { Button as MButton } from "@material-ui/core";

export type ButtonProps = {
  color: "primary";
  variant: "contained";
  fullWidth: boolean;
  id: string;
  disabled?: boolean;
  buttonText: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "button";
};
const defaultProps = {
  color: "primary",
  variant: "contained",
  fullWidth: true,
  id: "btn",
  buttonText: "default",
  type: "button",
};

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <MButton
      variant={props.variant}
      color={props.color}
      fullWidth={props.fullWidth}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {props.buttonText}
    </MButton>
  );
};
Button.defaultProps = defaultProps;

export default Button;
