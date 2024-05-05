import { Button } from "antd";
import EditIcon from "assets/icons/EditIcon";
import AccountEditModal from "./AccountEditModal";
import { useState } from "react";

const Account = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border-solid border-[1px] rounded-s-lg mt-12 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <Button onClick={() => setOpen(true)}>
          <EditIcon />
        </Button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-1">Foydalanuvchi ID</h3>
        <p className="text-base">d32dasdfa</p>
        <h3 className="text-lg font-semibold mb-1 mt-2"> Nomi</h3>
        <p className="text-base">usernam</p>
        <h3 className="text-lg font-semibold mb-1 mt-2"> Pochtasi</h3>
        <p className="text-base">emai@gmai.com</p>
        <h3 className="text-lg font-semibold mb-1 mt-2"> Telefon Raqami</h3>
        <p className="text-base">+998 90 123 45 67</p>
      </div>
      <AccountEditModal open={open} setOpen={setOpen} />
    </div>
  );
};
export default Account;
