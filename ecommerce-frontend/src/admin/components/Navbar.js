import { LogoutOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { AutoComplete, Avatar, Flex, Input, Space } from "antd";
import { Dropdown } from "antd";
import NavbarAPI from "../utility/NavbarAPI";
import { NavLink } from "react-router-dom";

const Title = (props) => (
    <Flex align="center" justify="space-between">
        {props.title}
        <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
            more
        </a>
    </Flex>
);
const renderItem = (title, count) => ({
    value: title,
    label: (
        <Flex align="center" justify="space-between">
            {title}
            <span>
                <UserOutlined /> {count}
            </span>
        </Flex>
    ),
});
const options = [
    {
        label: <Title title="Libraries" />,
        options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
        label: <Title title="Solutions" />,
        options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
        label: <Title title="Articles" />,
        options: [renderItem('AntDesign design language', 100000)],
    },
];

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'Logout',
        icon: <LogoutOutlined />
    },
];
export default function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <svg
                                className="hidden h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <NavLink to="/admin" className="text-2xl font-bold text-white ">{NavbarAPI.title}</NavLink>
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {
                                    NavbarAPI.menu.map((item) => (
                                        <NavLink
                                            to={item.href}
                                            className={({ isActive }) =>
                                                isActive ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                            }
                                        >
                                            {item.title}
                                        </NavLink>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div><AutoComplete
                        popupClassName="certain-category-search-dropdown"
                        popupMatchSelectWidth={500}
                        style={{
                            width: 250,
                        }}
                        options={options}
                        size="large"
                    >
                        <Input.Search size="large" placeholder="input here" />
                    </AutoComplete>

                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                />
                            </svg>
                        </button>

                        {/* Profile dropdown */}
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <Avatar menu={{
                                        items,
                                    }} className="cursor-pointer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                </Space>
                            </a>
                        </Dropdown>

                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                        href="#"
                        className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                        aria-current="page"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        Team
                    </a>
                    <a
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        Calendar
                    </a>
                </div>
            </div>
        </nav>


    )
}