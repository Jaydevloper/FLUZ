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

export interface IData extends IPropsModal {
  data: {
    country: string;
    createdAt: string;
    createdBy: string;
    description: string;
    education: string;
    name: string;
    payment: number;
    skills: string[];
    title: string;
    _id: string;
  };
  refetch: () => void;
}
