import { Button } from "antd";
import EditIcon from "assets/icons/EditIcon";
import AccountEditModal from "./AccountEditModal";
import { useState } from "react";
import useGet from "hooks/useGet";
import useHooks from "hooks/useHooks";

const Account = () => {
  const { get } = useHooks();
  const [open, setOpen] = useState<boolean>(false);
  const { data, refetch } = useGet({
    url: "/users/info",
    name: "/user-info-account",
  });
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
        <p className="text-base">{get(data, "users[0]._id", "-")}</p>
        <h3 className="text-lg font-semibold mb-1 mt-2"> Nomi</h3>
        <p className="text-base">{get(data, "users[0].name", "-")}</p>
        <h3 className="text-lg font-semibold mb-1 mt-2"> Pochtasi</h3>
        <p className="text-base">{get(data, "users[0].email", "-")}</p>
      </div>
      <AccountEditModal
        data={get(data, "users[0]", { _id: "" })}
        refetch={refetch}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};
export default Account;
