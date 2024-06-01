import { Avatar, Button, Input } from "antd";
import SendIcon from "assets/icons/SendIcon";
import ConfirmModal from "components/modal/confirim-modal";
import useGet from "hooks/useGet";
import useHooks from "hooks/useHooks";
import usePost from "hooks/usePost";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

interface IMessageProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Message = ({ open = false, setOpen }: IMessageProps) => {
  const { get, params } = useHooks();
  const [text, setText] = useState<string>("");
  const persistRoot = JSON.parse(localStorage.getItem("persist") as string);
  const { data, refetch } = useGet({
    url: `/messages/list/${get(params, "id", "")}`,
    name: "/message-list",
  });
  const { data: Data } = useGet({
    url: `/messages/list/${get(persistRoot, "id")}`,
    name: "/message-list-me",
  });
  const { mutate, isLoading } = usePost({
    onSuccess: () => {
      refetch();
      setText("");
    },
    onError: (err) =>
      toast.error(get(err, "response.data.message", "Xatolik yuz berdi")),
  });
  return (
    <div>
      <ConfirmModal
        open={open}
        onCancel={() => setOpen(false)}
        okButtonProps={{ className: "visually-hidden" }}
      >
        <section className="bg-[#f1f1f1] p-4 mt-6">
          <article className="h-[300px] overflow-y-auto">
            {get(Data, "data", [])?.map((el) => (
              <div key={get(el, "_id")} className="flex items-end gap-2">
                <Avatar className="bg-[#f56a00] mb-2" size="large" gap={1}>
                  {get(Data, "user[0].name", "-")[0]?.toUpperCase()}
                </Avatar>
                <div className="bg-white p-1 rounded-lg text-base">
                  {get(el, "text", "-")}
                </div>
              </div>
            ))}
            {get(data, "data", [])?.map((el) => (
              <div key={get(el, "_id")}>
                <div className="flex items-end gap-2 justify-end">
                  <Avatar className="bg-lime-500 mb-2" size="large" gap={1}>
                    {get(data, "user[0].name", "-")[0]?.toUpperCase()}
                  </Avatar>
                  <div className="bg-white p-1 rounded-lg text-base">
                    {get(el, "text", "-")}
                  </div>
                </div>
              </div>
            ))}
          </article>
          <div className="flex items-center gap-2">
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mt-8"
            />
            <Button
              onClick={() =>
                mutate({
                  url: `/messages/create/${get(params, "id", "")}`,
                  method: "post",
                  data: { text },
                })
              }
              loading={isLoading}
              className="mt-8 bg-inherit"
            >
              <SendIcon />
            </Button>
          </div>
        </section>
      </ConfirmModal>
    </div>
  );
};
export default Message;
