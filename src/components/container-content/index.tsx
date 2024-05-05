import { IContainerContent } from "./ContainerContent.type";

const ContainerContent = (props: IContainerContent) => {
  const { title = "", className = "", padding = "p-8", children } = props;
  return (
    <div
      className={
        className +
        " border-solid border-[1px] rounded-s-lg mt-12 " +
        `${padding}`
      }
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </div>
  );
};

export default ContainerContent;
