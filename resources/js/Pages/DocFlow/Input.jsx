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
  const documentType = location.state?.document_type;

  // Jika tidak ada tipe dokumen, redirect ke halaman utama dokumen
  useEffect(() => {
    if (!documentType) {
      navigate("/documents");
    }
  }, [documentType, navigate]);

  return (
    <>
      <NavbarStatic />
      <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-orange-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-100 rounded-full p-3">
            <svg
              className="w-8 h-8 text-base-orange"
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
            <h2 className="text-2xl font-bold text-orange-700 mb-1">
              {formTitles[documentType] || "Create Document Form"}
            </h2>
            <div className="text-sm text-gray-500">
              Lengkapi data berikut untuk membuat dokumen baru
            </div>
          </div>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {/* Judul */}
              <label className="block mb-1 text-sm font-semibold text-orange-600">
                Judul
              </label>
              <input className="w-full mb-4 border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 transition" />
              {/* Latar Belakang */}
              <label className="block mb-1 text-sm font-semibold text-orange-600">
                Latar Belakang
              </label>
              <textarea className="w-full mb-4 border border-orange-300 rounded-lg px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-orange-200 transition" />
              {/* Tujuan Pengembangan */}
              <label className="block mb-1 text-sm font-semibold text-orange-600">
                Tujuan Pengembangan
              </label>
              <textarea className="w-full mb-4 border border-orange-300 rounded-lg px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-orange-200 transition" />
            </div>
            <div>
              {/* Manfaat */}
              <label className="block mb-1 text-sm font-semibold text-orange-600">
                Manfaat Yang Diharapkan
              </label>
              <textarea className="w-full mb-4 border border-orange-300 rounded-lg px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-orange-200 transition" />
              {/* Rincian */}
              <label className="block mb-1 text-sm font-semibold text-orange-600">
                Rincian Pengembangan Yang dibutuhkan
              </label>
              <textarea className="w-full mb-4 border border-orange-300 rounded-lg px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-orange-200 transition" />
              {/* Strategi */}
              <label className="block mb-1 text-sm font-semibold text-orange-600">
                Strategi & Jadwal Kebutuhan Pengembangan System
              </label>
              <textarea className="w-full mb-4 border border-orange-300 rounded-lg px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-orange-200 transition" />
              {/* Approval */}
              <label className="block mb-1 text-sm font-semibold text-orange-600">
                Approval
              </label>
              <select className="w-full mb-6 border border-orange-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 transition">
                <option value="">Pilih Approval</option>
                {/* ...option approval... */}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-orange-400 to-base-orange text-white py-3 rounded-xl font-bold text-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            Create New {documentType || "Document"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Input;