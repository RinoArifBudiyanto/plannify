import { Link } from '@inertiajs/react';
import { PiHouse, PiLockKeyOpen, PiPlus, PiSquaresFour, PiUser } from 'react-icons/pi';

export default function SidebarResponsive() {
    return (
        <div className="flex flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2 dark:bg-gray-900">
            <div className="flex h-16 shrink-0 items-center space-x-1.5">
                <Link href="/" className="-m-1.5 p-1.5 text-2xl font-black leading-relaxed tracking-tighter">
                    Plannffy <span className="text-red-500">.</span>
                </Link>
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {/* menu */}
                            <li>
                                <Link
                                    href="#"
                                    className="group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed text-foreground hover:bg-red-400"
                                >
                                    <PiHouse className="h-6 w-6 shrink-0 text-foreground" />
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            <li>
                                <Link
                                    href=""
                                    className="group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed text-foreground hover:bg-red-400"
                                >
                                    <PiUser className="h-6 w-6 shrink-0 text-foreground" />
                                    People
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            <li>
                                <Link
                                    href=""
                                    className="group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed text-foreground hover:bg-red-400"
                                >
                                    <PiSquaresFour className="h-6 w-6 shrink-0 text-foreground" />
                                    My Task
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            <li>
                                <Link
                                    href=""
                                    className="group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed text-foreground hover:bg-red-400"
                                >
                                    <PiLockKeyOpen className="h-6 w-6 shrink-0 text-foreground" />
                                    Log Out
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* workspace start */}
                    <li>
                        <div className="flex items-center justify-between">
                            <div className="text-xs font-semibold uppercase leading-relaxed text-foreground">
                                Workspace
                            </div>
                            <Link>
                                <PiPlus className="h-4 w-4 text-foreground hover:text-red-400" />
                            </Link>
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                            <li>
                                <Link
                                    href="#"
                                    className="group flex w-full gap-x-3 rounded-md p-3 text-sm font-semibold text-foreground hover:bg-red-400"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-foreground bg-white text-[0.625rem] font-medium text-foreground">
                                        B
                                    </span>
                                    <span className="truncate">Back End Developer</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* workspace end */}
                </ul>
            </nav>
        </div>
    );
}
