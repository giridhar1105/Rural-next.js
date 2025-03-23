import { ReactNode } from 'react';

interface RewardsLayoutProps {
    children: ReactNode;
}

export default function RewardsLayout({ children }: RewardsLayoutProps) {
    return (
        <div className="rewards-layout">
            <div className="rewards-container">
                {children}
            </div>
        </div>
    );
}