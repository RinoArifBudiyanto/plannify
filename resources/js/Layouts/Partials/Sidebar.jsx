import { Avatar, AvatarFallback } from '@/resources/js/components/ui/avatar';
import { Link } from '@inertiajs/react';
import { PiHouse, PiLockKeyOpen, PiPlus, PiSquaresFour, PiUser } from 'react-icons/pi';

export default function Sidebar() {
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
                        {/* menu */}
                        <li>
                            <Link
                                href="#"
                                className="group flex gap-3 gap-x-3 rounded-md p-3 font-semibold leading-relaxed tracking-tighter text-foreground hover:bg-red-400"
                            >
                                <PiHouse className="h-6 w-6 shrink-0 text-foreground" />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex gap-3 gap-x-3 rounded-md p-3 font-semibold leading-relaxed tracking-tighter text-foreground hover:bg-red-400"
                            >
                                <PiUser className="h-6 w-6 shrink-0 text-foreground" />
                                People
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex gap-3 gap-x-3 rounded-md p-3 font-semibold leading-relaxed tracking-tighter text-foreground hover:bg-red-400"
                            >
                                <PiSquaresFour className="h-6 w-6 shrink-0 text-foreground" />
                                My Tasks
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex gap-3 gap-x-3 rounded-md p-3 font-semibold leading-relaxed tracking-tighter text-foreground hover:bg-red-400"
                            >
                                <PiLockKeyOpen className="h-6 w-6 shrink-0 text-foreground" />
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* workspaces start */}
                <li>
                    <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold uppercase leading-relaxed text-foreground">
                            Workspaces
                        </div>
                        <Link>
                            <PiPlus className="h-4 w-4 text-foreground hover:text-red-400" />
                        </Link>
                    </div>
                    <ul role="list" className="-mx-2 mt-2 space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="group flex w-full gap-x-3 rounded-md p-3 font-semibold leading-relaxed text-foreground hover:bg-red-400"
                            >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-foreground bg-white text-foreground">
                                    B
                                </span>
                                <span className="truncate">Back End Developer</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex w-full gap-x-3 rounded-md p-3 font-semibold leading-relaxed text-foreground hover:bg-red-400"
                            >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-foreground bg-white text-foreground">
                                    F
                                </span>
                                <span className="truncate">Front End Developer</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Workspace end */}
                {/* profile start*/}
                <li className="-mx-6 mt-auto">
                    <Link
                        href=""
                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-relaxed text-foreground hover:bg-gray-200"
                    >
                        <Avatar>
                            <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <span>Rino Arif Budiyanto</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
