import { Avatar, Button, Input } from "antd";
import SendIcon from "assets/icons/SendIcon";
import ConfirmModal from "components/modal/confirim-modal";
import { Dispatch, SetStateAction } from "react";

interface IMessageProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Message = ({ open = false, setOpen }: IMessageProps) => {
  return (
    <div>
      <ConfirmModal
        open={open}
        onCancel={() => setOpen(false)}
        okButtonProps={{ className: "visually-hidden" }}
      >
        <section className="bg-[#f1f1f1] p-4 mt-6">
          <article className="h-[300px] overflow-y-auto">
            {arr.map((el: number) => (
              <div key={el}>
                <div className="flex items-end gap-2">
                  <Avatar className="bg-[#f56a00] mb-2" size="large" gap={1}>
                    U
                  </Avatar>
                  <div className="bg-white p-1 rounded-lg text-base">
                    message?
                  </div>
                </div>
                <div className="flex items-end gap-2 justify-end">
                  <Avatar className="bg-lime-500 mb-2" size="large" gap={1}>
                    ME
                  </Avatar>
                  <div className="bg-white p-1 rounded-lg text-base">
                    My message?
                  </div>
                </div>
              </div>
            ))}
          </article>
          <div className="flex items-center gap-2">
            <Input className="mt-8" />
            <Button className="mt-8 bg-inherit">
              <SendIcon />
            </Button>
          </div>
        </section>
      </ConfirmModal>
    </div>
  );
};
export default Message;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
