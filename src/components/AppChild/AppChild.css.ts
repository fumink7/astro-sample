import { style } from "@vanilla-extract/css";

export const textStyle = style({
  color: "blue",
  fontSize: "20px",
  ":hover": {
    color: "red",
  },
});

export const textStyle2 = style({
  color: "blue",
  fontSize: "20px",
  padding: 20,
  ":hover": {
    color: "red",
  },
});
