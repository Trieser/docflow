import React from "react";
import { useNavigate } from "react-router-dom";

// Data dokumen dengan ikon SVG, judul, dan deskripsi
const documentTypes = [
  {
    type: "Proposal",
    title: "Proposal",
    description: "Project or initiative proposals",
    icon: (
      <svg className="mx-auto mb-2 h-8 w-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M4 10h16" />
      </svg>
    ),
    bg: "bg-orange-50 border border-orange-200 hover:border-orange-400",
    text: "text-orange-600"
  },
  {
    type: "BRD",
    title: "BRD",
    description: "Business Requirements Document",
    icon: (
      <svg className="mx-auto mb-2 h-8 w-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    ),
    bg: "bg-blue-50 border border-blue-200 hover:border-blue-400",
    text: "text-blue-600"
  },
  {
    type: "UAT",
    title: "UAT",
    description: "User Acceptance Testing",
    icon: (
      <svg className="mx-auto mb-2 h-8 w-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    bg: "bg-green-50 border border-green-200 hover:border-green-400",
    text: "text-green-600"
  }
];

const Create = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSelect = (type) => {
    navigate("/documents/new", { state: { document_type: type } });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="rounded-xl bg-white p-8 w-full max-w-lg shadow-lg">
        <div className="mb-1 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Create New Document</div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
        </div>
        <div className="mb-6 text-gray-500 text-sm">
          Select a document category to get started
        </div>
        <div className="grid grid-cols-3 gap-4">
          {documentTypes.map((doc) => (
            <div
              key={doc.type}
              onClick={() => handleSelect(doc.type)}
              className={`cursor-pointer rounded-lg px-4 py-6 text-center shadow-sm transition border ${doc.bg} ${doc.text} hover:shadow-md`}
            >
              {doc.icon}
              <div className="font-semibold mb-1">{doc.title}</div>
              <div className="text-xs text-gray-500">{doc.description}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;