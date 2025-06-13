// NavbarStatic.jsx
import React, { useState, useRef, useEffect } from 'react';
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom';
import logook from '@/assets/logook-white long.png';
import { Bell, BotMessageSquare, Boxes, BrainCog, FileSliders, Grip, LogOut, LucideGitBranch, ProjectorIcon, UserRound } from 'lucide-react';
import DefaultImage from '@/assets/default_image.jfif';

const dummyUser = {
    id: 1,
    name: 'John Doe',
    images: null,
    division_id: 3,
    department_id: 55153,
    roles: [
        { name: 'super' },
        { name: 'report_admin' },
        { name: 'meeting_admin' },
    ],
};

const dummyMessages = {
    unread_count: 3,
    unread_messages: [
        { sender: { name: 'Jane', images: null }, content: 'Hello!' },
        { sender: { name: 'Admin', images: null }, content: 'Check file please.' },
        { sender: { name: 'Bot', images: null }, content: 'Your meeting is ready.' },
    ],
};

const dummyClientApps = [
    { client_name: 'AppOne', client_url: 'https://appone.com', label: 'App One' },
    { client_name: 'AppTwo', client_url: 'https://apptwo.com', label: 'App Two' },
];

const NavbarStatic = () => {
    const menuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="bg-base-orange sticky z-40 top-0 shadow-lg">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex shrink-0 items-center w-[165px]">
                            <Link href="/">
                                <img src={logook} alt="ok" className="w-[122px]" />
                            </Link>
                        </div>
                        <div className="hidden space-x-3 sm:-my-px sm:ms-10 sm:flex">
                            <Link href="/" className="nav-link">Dashboard</Link>
                            <Link href="/okTalk" className="nav-link relative">
                                OK Talk <span className='notif-badge'>{dummyMessages.unread_count}</span>
                            </Link>
                            <Link href="/meeting-room" className="nav-link">Meeting Room</Link>
                            <Link href="/report-submissions" className="nav-link">OK Reminder</Link>
                            {dummyUser.division_id === 3 && (
                                <Link href="/okai" className="nav-link">OK AI</Link>
                            )}
                        </div>
                    </div>
                    <div className="hidden gap-3 relative sm:ms-6 sm:flex sm:items-center ">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 hover:bg-[#db6e56] rounded-full">
                            <Grip className="text-white" size={30} />
                        </button>
                        {menuOpen && <MenuModals clientApps={dummyClientApps} menuRef={menuRef} />}

                        <Dropdown className="w-fit">
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button className="notif-button">
                                        <Bell size={20} />
                                    </button>
                                    <span className='notif-badge-sm'>{dummyMessages.unread_count}</span>
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content contentClasses='h-72 overflow-y-scroll bg-white border-y border-gray-100'>
                                {dummyMessages.unread_messages.length ? dummyMessages.unread_messages.map((msg, key) => (
                                    <Dropdown.Link key={key} className="flex gap-3 py-2 px-4 hover:bg-gray-100" href="/okTalk">
                                        <img src={DefaultImage} alt={msg.sender.name} className="rounded-full h-7 w-7" />
                                        <div className="flex flex-col">
                                            <span className='text-sm font-semibold'>{msg.sender.name}</span>
                                            <span className="text-xs font-light">{msg.content}</span>
                                        </div>
                                    </Dropdown.Link>
                                )) : (<p className="text-center text-sm py-8">You Don't Have Any Notifications</p>)}
                            </Dropdown.Content>
                        </Dropdown>

                        <div className="text-white">|</div>

                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center gap-3 px-3 py-2 text-sm text-white hover:bg-[#db6e56] rounded-md">
                                    <img className="rounded-full h-8 w-8 border-2 border-white object-cover" src={DefaultImage} alt="User" />
                                    <span>{dummyUser.name}</span>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href="#"><UserRound className='mr-2 h-4 w-4' /> Profile</Dropdown.Link>
                                <Dropdown.Link href="#"><Boxes className='mr-2 h-4 w-4' /> DRM Approval</Dropdown.Link>
                                <Dropdown.Link href="#"><BrainCog className='mr-2 h-4 w-4' /> User Management</Dropdown.Link>
                                <Dropdown.Link href="#"><ProjectorIcon className='mr-2 h-4 w-4' /> Meeting Room Approval</Dropdown.Link>
                                <Dropdown.Link href="#"><LucideGitBranch className='mr-2 h-4 w-4' /> Branch Management</Dropdown.Link>
                                <Dropdown.Link href="#"><FileSliders className='mr-2 h-4 w-4' /> Reminder Management</Dropdown.Link>
                                <Dropdown.Link href="#"><BotMessageSquare className='mr-2 h-4 w-4' /> AI Content Management</Dropdown.Link>
                                <Dropdown.Link href="#"><LogOut className='mr-2 h-4 w-4' /> Log Out</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const MenuModals = ({ clientApps, menuRef }) => (
    <div ref={menuRef} className="menu-modals absolute top-14 right-[92%] z-[100] w-80 h-96 bg-white rounded-[50px] border border-1 border-base-orange shadow-lg overflow-y-auto p-4 animate-grow">
        <div className="grid grid-cols-3 gap-4">
            {clientApps.map((item, index) => (
                <a key={index} target="_blank" href={item.client_url} className="flex flex-col items-center text-center hover:bg-gray-100 p-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                        <img src={`/assets/${item.client_name.toLowerCase()}.svg`} alt={item.label} className="w-6 h-6" />
                    </div>
                    <span className="mt-2 text-sm text-gray-700">{item.client_name}</span>
                </a>
            ))}
        </div>
    </div>
);

export default NavbarStatic;
