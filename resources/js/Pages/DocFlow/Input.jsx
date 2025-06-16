import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarStatic from "@/Components/Navbar";

const formTitles = {
    Proposal: "Create Proposal Form",
    BRD: "Create BRD Form",
    UAT: "Create UAT Form",
};

const Input = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const documentType = location.state?.document_type;

    useEffect(() => {
        // Fetch user API
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    useEffect(() => {
        if (!documentType) {
            navigate("/documents");
        }
    }, [documentType, navigate]);

    return (
        <>
            <NavbarStatic />
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-orange-200 bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-full bg-orange-100 p-3">
                        <svg
                            className="h-8 w-8 text-base-orange"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <path d="M8 2v4M16 2v4M4 10h16" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="mb-1 text-2xl font-bold text-orange-700">
                            {formTitles[documentType] || "Create Document Form"}
                        </h2>
                        <div className="text-sm text-gray-500">
                            Lengkapi data berikut untuk membuat dokumen baru
                        </div>
                    </div>
                </div>
                <form>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            {/* Judul */}
                            <label className="mb-1 block text-sm font-semibold text-orange-600">
                                Judul
                            </label>
                            <input className="mb-4 w-full rounded-lg border border-orange-300 px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-orange-200" />
                            {/* Latar Belakang */}
                            <label className="mb-1 block text-sm font-semibold text-orange-600">
                                Latar Belakang
                            </label>
                            <textarea className="mb-4 min-h-[80px] w-full rounded-lg border border-orange-300 px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-orange-200" />
                            {/* Tujuan Pengembangan */}
                            <label className="mb-1 block text-sm font-semibold text-orange-600">
                                Tujuan Pengembangan
                            </label>
                            <textarea className="mb-4 min-h-[80px] w-full rounded-lg border border-orange-300 px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-orange-200" />
                        </div>
                        <div>
                            {/* Manfaat */}
                            <label className="mb-1 block text-sm font-semibold text-orange-600">
                                Manfaat Yang Diharapkan
                            </label>
                            <textarea className="mb-4 min-h-[80px] w-full rounded-lg border border-orange-300 px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-orange-200" />
                            {/* Rincian */}
                            <label className="mb-1 block text-sm font-semibold text-orange-600">
                                Rincian Pengembangan Yang dibutuhkan
                            </label>
                            <textarea className="mb-4 min-h-[80px] w-full rounded-lg border border-orange-300 px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-orange-200" />
                            {/* Strategi */}
                            <label className="mb-1 block text-sm font-semibold text-orange-600">
                                Strategi & Jadwal Kebutuhan Pengembangan System
                            </label>
                            <textarea className="mb-4 min-h-[80px] w-full rounded-lg border border-orange-300 px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-orange-200" />
                            {/* Approval */}
                            <label className="mb-1 block text-sm font-semibold text-orange-600">
                                Approval
                            </label>
                            <select className="mb-6 w-full rounded-lg border border-orange-300 px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-orange-200">
                                <option value="">Pilih Approval</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full rounded-xl bg-gradient-to-r from-orange-400 to-base-orange py-3 text-lg font-bold text-white shadow transition-all duration-200 hover:scale-105 hover:shadow-lg"
                    >
                        Create New {documentType || "Document"}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Input;
