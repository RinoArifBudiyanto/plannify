import { Head } from '@inertiajs/react';

export default function Guest({ children, title }) {
    return (
        <>
            <Head title={title} />
            {children}
        </>
    );
}
