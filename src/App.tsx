import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import DashboardLayout from './layouts/dashboard-layout.tsx';
import Dashboard from './layouts/dashboard.tsx';
import SubAccount from './layouts/sub-account.tsx';
import Broadcast from './layouts/broadcast.tsx';
import Webmail from './layouts/webmail.tsx';
import MailboxConfiguration from './layouts/mailbox-configuration.tsx';
import DashboardOverview from './layouts/dashboard-overview.tsx';
import Info from './layouts/info.tsx';
import DomainSetup from './layouts/domain-setup.tsx';
import Aliases from './layouts/aliases.tsx';
import Help from './layouts/help.tsx';
import MailboxUsers from './layouts/mailbox-users.tsx';


function App() {
  return (
    <>
   <BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route element={<Dashboard />}>
        <Route index element={<DashboardOverview />} />
        <Route path="info" element={<Info />} />
        <Route path="domain-setup" element={<DomainSetup />} />
        <Route path="mailbox-users" element={<MailboxUsers />} />
        <Route path="aliases" element={<Aliases />} />
        <Route path="help" element={<Help />} />
      </Route>

      {/* Bagian lain di dashboard tapi bukan bagian layout Dashboard */}
      <Route path="sub-account" element={<SubAccount />} />
      <Route path="broadcast" element={<Broadcast />} />
      <Route path="webmail" element={<Webmail />} />
      <Route path="mailbox-config" element={<MailboxConfiguration />} />
    </Route>
  </Routes>
</BrowserRouter>  
    </>
  )
}

export default App
