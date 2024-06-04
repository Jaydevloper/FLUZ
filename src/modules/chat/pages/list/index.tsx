import { Avatar, Button, Input } from "antd";
import SendIcon from "assets/icons/SendIcon";
import useGet from "hooks/useGet";
import useHooks from "hooks/useHooks";
import usePost from "hooks/usePost";
import { useState } from "react";
import List from "./components/List";
import { toast } from "react-toastify";

const Chat = () => {
  const { get, query } = useHooks();
  const [text, setText] = useState<string>("");
  const persistRoot = JSON.parse(localStorage.getItem("persist") as string);
  const { data, refetch } = useGet({
    url: `/messages/list/${get(query, "id", "")}`,
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
  console.log(Data);
  return (
    <div className="pt-28">
      <div className="flex  justify-between">
        <List data={get(Data, "user", [{ name: "", _id: "" }])} />
        <section className="bg-[#f1f1f1] p-4 mt-6 w-[711px]">
          <article className="h-[400px] overflow-y-auto">
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
              <div className="flex justify-end" key={get(el, "_id")}>
                <div className="flex items-end gap-2 justify-end">
                  <div className="bg-white p-1 rounded-lg text-base">
                    {get(el, "text", "-")}
                  </div>
                  <Avatar className="bg-lime-500 mb-2" size="large" gap={1}>
                    {get(data, "user[0].name", "-")[0]?.toUpperCase()}
                  </Avatar>
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
                  url: `/messages/create/${get(query, "id", "")}`,
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
      </div>
    </div>
  );
};

export default Chat;
