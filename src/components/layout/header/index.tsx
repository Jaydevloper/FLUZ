import { DownOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Input, Layout, Space, Tooltip } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { MenuProps } from "rc-menu";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ContentHeader from "./components/Content";

const HeaderMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Layout>
        <Header className="flex items-center justify-between fixed z-50 w-full">
          <div className="flex items-center">
            <h1 className="text-[#108a00] font-bold text-base mr-4 cursor-pointer">
              <Link to="/"> FREELANCEUZ</Link>
            </h1>
            <Dropdown className="ml-12" trigger={["click"]} menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="text-white hover:text-[#108a00] text-base font-semibold">
                  Ish topish
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link
              className="text-white hover:text-[#108a00] text-base font-semibold ml-12"
              to={"/talents"}
            >
              Ta'lantlar
            </Link>
            <Link
              className="text-white hover:text-[#108a00] text-base font-semibold ml-12"
              to={"/payment/history/"}
            >
              To'lov Tarixi
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Input
              className="rounded-[8px] text-base px-[35px] py-[8px] w-[420px]"
              type="search"
              placeholder="input search"
            />
            <Tooltip
              open={open}
              placement="bottom"
              color={"#fff"}
              title={<ContentHeader setOpen={setOpen} />}
              trigger={["click"]}
            >
              <Avatar
                className="bg-[#f56a00] cursor-pointer"
                onClick={() => setOpen(!open)}
                size="large"
                gap={1}
              >
                U
              </Avatar>
            </Tooltip>
          </div>
        </Header>
        <Content className="mt-[64px] container">
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default HeaderMenu;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/jobs/saved/1">Saqlangan Ishlar</Link>,
  },
  {
    key: "2",
    label: <Link to="/jobs/my-jobs/1">Mening Ishlarim</Link>,
  },
  {
    key: "3",
    label: <Link to="/jobs/create">Ish Joylash</Link>,
  },
];
