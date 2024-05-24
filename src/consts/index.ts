export type Troles = "customer" | "talent";

export interface IRoles {
  [key: string]: Troles;
}

export const roles: IRoles = {
  customer: "customer",
  talent: "talent",
};
