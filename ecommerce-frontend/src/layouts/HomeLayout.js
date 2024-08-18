import logo from '../logo.svg';
import '../index.css';
import Navbar from '../Navbar';

import { Outlet } from 'react-router-dom';

export default function HomeLayout(props) {
    return (
        <div>
            <Navbar />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}
