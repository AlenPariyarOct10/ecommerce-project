import logo from '../../logo.svg';
import '../../index.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
