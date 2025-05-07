import email_kerja from '../assets/cropped-kerjamail-logo.webp';
import { Outlet, Link } from 'react-router';

const DashboardLayout = () => {
    return(
        <>
            <div>
                <div className='max-w-[1280px] mx-auto'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-2 bg-[#0c2556] h-screen'>
                            <div className='flex justify-center'>
                            <img src={email_kerja} className='w-1/2 my-4'/>
                            </div>
                            <div>
                                <p className='text-white px-6 py-3 mx-2 text-sm'>Main Dashboard</p>
                            </div>
                            <ul className='text-white my-4'>
                                
                                <li className='px-6 py-3 hover:bg-blue-200 mx-2 rounded text-sm'><Link to="/">Dashboard</Link></li>
                                <li className='px-6 py-3 hover:bg-blue-200 mx-2 rounded text-sm'><Link to="/sub-account">Sub Account</Link></li>
                                <li className='px-6 py-3 hover:bg-blue-200 mx-2 rounded text-sm'><Link to="/broadcast">Broadcast</Link></li>
                                <li className='px-6 py-3 hover:bg-blue-200 mx-2 rounded text-sm'><Link to="/webmail">Webmail</Link></li>
                                <li className='px-6 py-3 hover:bg-blue-200 mx-2 rounded text-sm'><Link to="/mailbox-config">Mailbox Configuration</Link></li>
                            </ul>
                        </div>
                        <main className="col-span-10 bg-blue-200">
                            <div className='flex justify-between items-center px-4 py-2 border-b border-gray-200'>
                                <div>Dashboard</div>
                                <div className='flex justify-start gap-4'>
                                    <select>
                                        <option>
                                             Supportke.xyz
                                        </option>
                                    </select>
                                    <div>
                                        <div className='bg-[#0c2556] text-white rounded-full px-3 py-2'>PA</div>
                                    </div>
                                </div>
                            </div>
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout