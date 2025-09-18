import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  ClipboardList,
  FileText,
  User,
  LogOut,
  Bell,
  Menu
} from "lucide-react";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        // No user? Force redirect to login
        navigate("/login", { replace: true });
      }
    }, [navigate]);


    localStorage.removeItem(user);
    setUser(null);
    navigate("/userlogin");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-20"
          } bg-white shadow-md transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className={`${sidebarOpen ? "block" : "hidden"} font-bold text-lg`}>
            PathoLab
          </h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-4 text-gray-700">
          <a href="#" className="flex items-center gap-3 hover:text-blue-500">
            <Home size={20} /> {sidebarOpen && "Dashboard"}
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-500">
            <ClipboardList size={20} /> {sidebarOpen && "Book Test"}
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-500">
            <FileText size={20} /> {sidebarOpen && "Reports"}
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-500">
            <User size={20} /> {sidebarOpen && "Profile"}
          </a>
       <button 
  onClick={handleLogout} 
  className="flex items-center gap-3 hover:text-red-500"
>
  <LogOut size={20} /> {sidebarOpen && "Logout"}
</button>


        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <h2 className="text-xl font-semibold">
            {user.name ? `Welcome, ${user.name} 👋` : "Welcome,👋"}
          </h2>
          <div className="flex items-center gap-4">
            <Bell className="text-gray-600 cursor-pointer" />
            <img
              src="https://via.placeholder.com/40"
              alt="user"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Dashboard Content */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold">Total Bookings</h3>
            <p className="text-2xl font-semibold mt-2">24</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold">Pending Reports</h3>
            <p className="text-2xl font-semibold mt-2">6</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold">Completed Reports</h3>
            <p className="text-2xl font-semibold mt-2">18</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold">Upcoming Tests</h3>
            <p className="text-2xl font-semibold mt-2">3</p>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="p-6">
          <h3 className="text-lg font-bold mb-4">Recent Bookings</h3>
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3">Test Name</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">CBC (Complete Blood Count)</td>
                  <td className="p-3">15 Sept 2025</td>
                  <td className="p-3 text-green-600 font-semibold">Completed</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Lipid Profile</td>
                  <td className="p-3">17 Sept 2025</td>
                  <td className="p-3 text-yellow-600 font-semibold">Pending</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Thyroid Test</td>
                  <td className="p-3">20 Sept 2025</td>
                  <td className="p-3 text-blue-600 font-semibold">Upcoming</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
