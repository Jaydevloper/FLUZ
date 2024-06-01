import { DownOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Space, Tooltip } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { roles } from "consts";
import useAccess from "hooks/useAccess";
import useGet from "hooks/useGet";
import useHooks from "hooks/useHooks";
import { MenuProps } from "rc-menu";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ContentHeader from "./components/Content";

const HeaderMenu = () => {
  const { get } = useHooks();
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useGet({
    url: "/users/info",
    name: "/user-info",
  });
  const isCustomer = useAccess(roles.customer);
  const items: MenuProps["items"] = [
    ...(isCustomer
      ? [
          {
            key: "2",
            label: <Link to="/jobs/list">Yaratilgan Ishlar ro'yxati</Link>,
          },
          {
            key: "3",
            label: <Link to="/jobs/create">Ish Joylash</Link>,
          },
        ]
      : [
          {
            key: "1",
            label: <Link to="/jobs/saved/1">Saqlangan Ishlar</Link>,
          },
        ]),
  ];

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
            {isCustomer ? (
              <Link
                className="text-white hover:text-[#108a00] text-base font-semibold ml-12"
                to={"/talents"}
              >
                Ta'lantlar
              </Link>
            ) : null}
            <Link
              className="text-white hover:text-[#108a00] text-base font-semibold ml-12"
              to={"/message"}
            >
              Chat
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Tooltip
              open={open}
              placement="bottom"
              color={"#fff"}
              title={
                <ContentHeader
                  data={get(data, "userInfo[0]", initialUserData)}
                  setOpen={setOpen}
                />
              }
              trigger={["click"]}
            >
              <Avatar
                className="bg-[#f56a00] cursor-pointer"
                onClick={() => setOpen(!open)}
                size="large"
                gap={1}
              >
                {get(data, "userInfo[0].name", "-")[0]?.toUpperCase()}
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
const initialUserData = {
  country: "",
  createdAt: "",
  createdBy: "",
  description: "",
  education: "",
  name: "",
  payment: 0,
  skills: [""],
  title: "",
  _id: "",
};

export default HeaderMenu;
