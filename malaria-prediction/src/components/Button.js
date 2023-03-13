import React from "react";
import MuiLoadingButton from "@mui/lab/LoadingButton";
// import { twMerge } from "tailwind-merge";

const Button = (props) => {
  const {
    children,
    onMouseLeave,
    onMouseEnter,
    variant,
    disabled,
    onClick,
    rootClasses,
    textClasses,
    ...restProps
  } = props;

  const MUI_VARIANTS_COUNTERPARTS = {
    primary: "contained",
    secondary: "outlined",
    link: "text",
  };

  const PRIMARY_SECONDARY_CLASSES = {
    root: "font-700 text-16 rounded-32 p-16",
    // variant === BUTTON_VARIANTS.primary && "bg-primary",
    //   Boolean(rootClasses) && rootClasses
    // ),
  };

  //   const TEXT_CLASSES = {
  //     text: twMerge("font-700 text-16 p-0", Boolean(textClasses) && textClasses),
  //   };

  return (
    <MuiLoadingButton
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variant={MUI_VARIANTS_COUNTERPARTS[variant]}
      disabled={disabled}
      // disableRipple={variant === BUTTON_VARIANTS.link}
      onClick={onClick}
      // classes={variant === BUTTON_VARIANTS.link ? TEXT_CLASSES : PRIMARY_SECONDARY_CLASSES}
      style={{ textTransform: "None" }}
      {...restProps}
    >
      {children}
    </MuiLoadingButton>
  );
};

export default Button;
