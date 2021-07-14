import React from "react";
import {
  Card as MCard,
  CardContent,
  CardHeader,
  Divider,
} from "@material-ui/core";

export type CardProps = {
  header: string;
  content: string;
};

const defaultProps = {
  header: "card header",
  content: "card-content",
};

export const Card = (props: CardProps): JSX.Element => {
  return (
    <MCard>
      <CardHeader component="div" title={props.header}></CardHeader>
      <Divider orientation="horizontal" />
      <CardContent>{props.content}</CardContent>
    </MCard>
  );
};
Card.defaultProps = defaultProps;

export default Card;
