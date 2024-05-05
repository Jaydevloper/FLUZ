import { Dispatch, SetStateAction } from "react";

export interface IPropsModal {
  open: {
    titleModal: boolean;
    skillModal: boolean;
    educationModal: boolean;
    profileModal: boolean;
  };
  setOpen: Dispatch<
    SetStateAction<{
      titleModal: boolean;
      skillModal: boolean;
      educationModal: boolean;
      profileModal: boolean;
    }>
  >;
}
