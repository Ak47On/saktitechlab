import AdminSidebar from "@/components/admin/AdminSidebar";

import AdminTopbar from "@/components/admin/AdminTopbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">

        {/* TOPBAR */}
        <AdminTopbar />

        {/* PAGE */}
        {children}

      </main>

    </div>
  );
}