import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useLoading } from "@contexts/LoadingContext";
import LoadingScreen from "@components/LoadingScreen";

const DashboardLayout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const { isLoading } = useLoading();

	const toggleSidebar = () => setSidebarOpen((prev) => !prev);

	return (
		<div className="flex h-screen bg-gray-50">
			{/* Mobile sidebar backdrop */}
			{sidebarOpen && (
				<div
					className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
					onClick={() => setSidebarOpen(false)}
				></div>
			)}

			{/* Sidebar */}
			<Sidebar
				isOpen={sidebarOpen}
				closeSidebar={() => setSidebarOpen(false)}
			/>

			{/* Main content */}
			<div className="flex flex-col flex-1 overflow-hidden">
				<Topbar toggleSidebar={toggleSidebar} />

				<main className="flex-1 overflow-y-auto p-4 md:p-6">
					{isLoading && <LoadingScreen fullScreen />}
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
