import ScrollContext from '@/components/scrollContext';
import Navbar from '@/navbar/navbar';
import React, { useRef } from 'react';


type layoutProps = {
    children?: React.ReactNode;
    
};
const layout:React.FC<layoutProps> = ( {children} ) => {
    const refA = useRef<HTMLElement>(null);
    const refB = useRef<HTMLElement>(null);
    return (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    )
}
export default layout;