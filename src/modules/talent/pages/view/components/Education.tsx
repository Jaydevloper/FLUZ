import ContainerContent from "components/container-content";
import useHooks from "hooks/useHooks";
interface IData {
  data: {
    education: string;
  };
}
const Education = ({ data }: IData) => {
  const { get } = useHooks();
  return (
    <ContainerContent>
      <h2 className="text-xl font-bold flex items-center gap-3">Ta'lim </h2>
      <p className="text-base mt-2">{get(data, "education", "-")}</p>
    </ContainerContent>
  );
};

export default Education;
