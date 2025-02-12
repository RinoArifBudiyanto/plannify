import { cn } from '@/lib/utils';

export default function Header({ classname, title, subtitels }) {
    return (
        <div className={cn(classname, 'mb-8')}>
            <div className="lg:mx:auto mx-auto flex flex-col gap-x-8">
                <h3 className="text-2xl font-bold leading-relaxed tracking-tighter text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed tracking-tighter text-muted-foreground">{subtitels}</p>
            </div>
        </div>
    );
}
