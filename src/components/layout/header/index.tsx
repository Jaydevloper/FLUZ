import { Avatar, Input, Layout, Menu, MenuProps } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const HeaderMenu = () => {
  return (
    <header>
      <Layout>
        <Header className="flex items-center justify-between fixed z-50 w-full">
          <div className="flex items-center">
            <h1 className="text-[#108a00] font-bold text-base mr-4 cursor-pointer">
              FREELANCEUZ
            </h1>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
              className={"flex-1 min-w-1"}
            />
          </div>
          <div className="flex items-center gap-4">
            <Input
              className="rounded-[8px] text-base px-[35px] py-[8px] w-[420px]"
              type="search"
              placeholder="input search"
            />
            <Avatar className="bg-[#f56a00]" size="large" gap={1}>
              U
            </Avatar>
          </div>
        </Header>
        <Content className="mt-[64px]">
          <Outlet />
        </Content>
      </Layout>
    </header>
  );
};

export default HeaderMenu;
