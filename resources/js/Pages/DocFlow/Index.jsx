import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";

const DocFlowIndex = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetch("/api/documents")
            .then((res) => res.json())
            .then(setDocuments)
            .catch((err) => console.error("Error fetching documents:", err));
    }, []);

    const getTypeBadge = (type) => {
        switch (type) {
            case "Proposal":
                return "bg-orange-100 text-orange-600";
            case "BRD":
                return "bg-blue-100 text-blue-600";
            case "UAT":
                return "bg-green-100 text-green-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    const totalProposal = documents.filter(
        (doc) => doc.document_type === "Proposal"
    ).length;
    const totalBRD = documents.filter(
        (doc) => doc.document_type === "BRD"
    ).length;
    const totalUAT = documents.filter(
        (doc) => doc.document_type === "UAT"
    ).length;

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#f3f4f6] py-8">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-2xl bg-white p-8 shadow">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-base-orange">
                                Overview
                            </h2>
                            <button className="flex items-center gap-2 rounded bg-base-orange px-4 py-2 text-white transition hover:bg-[#c94e2e]">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 4v16m8-8H4" />
                                </svg>
                                New Document
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                            {/* Total Documents */}
                            <div className="flex flex-col items-center rounded-lg border bg-white p-4">
                                <svg
                                    className="mb-2 h-10 w-10 text-base-orange"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 12h6M9 16h6M5 8h14M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
                                </svg>
                                <div className="text-sm font-semibold text-base-orange">
                                    Total Documents
                                </div>
                                <div className="text-2xl font-bold text-base-orange">
                                    {documents.length}
                                </div>
                            </div>

                            {/* Proposal */}
                            <div className="flex flex-col items-center rounded-lg border bg-white p-4">
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                                    <span className="text-lg font-bold text-orange-600">
                                        P
                                    </span>
                                </div>
                                <div className="text-sm font-semibold text-orange-600">
                                    Total Proposal
                                </div>
                                <div className="text-2xl font-bold text-orange-600">
                                    {totalProposal}
                                </div>
                            </div>

                            {/* BRD */}
                            <div className="flex flex-col items-center rounded-lg border bg-white p-4">
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                    <span className="text-lg font-bold text-blue-600">
                                        B
                                    </span>
                                </div>
                                <div className="text-sm font-semibold text-blue-600">
                                    Total BRD
                                </div>
                                <div className="text-2xl font-bold text-blue-600">
                                    {totalBRD}
                                </div>
                            </div>

                            {/* UAT */}
                            <div className="flex flex-col items-center rounded-lg border bg-white p-4">
                                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                                    <span className="text-lg font-bold text-green-600">
                                        U
                                    </span>
                                </div>
                                <div className="text-sm font-semibold text-green-600">
                                    Total UAT
                                </div>
                                <div className="text-2xl font-bold text-green-600">
                                    {totalUAT}
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="mb-4 flex gap-2">
                            <button className="rounded bg-base-orange px-3 py-1 text-sm font-medium text-white">
                                My Documents
                            </button>
                            <button className="rounded bg-[#fde6e0] px-3 py-1 text-sm font-medium text-base-orange">
                                Pending Approvals
                            </button>
                        </div>

                        {/* Search */}
                        <div className="mb-6 flex items-center">
                            <div className="relative w-full max-w-xs">
                                <span className="absolute left-3 top-2.5 text-gray-400">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="11" cy="11" r="8" />
                                        <line
                                            x1="21"
                                            y1="21"
                                            x2="16.65"
                                            y2="16.65"
                                        />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full rounded bg-gray-100 py-2 pl-10 pr-4 outline-none"
                                />
                            </div>
                        </div>

                        {/* Document List */}
                        <div className="flex flex-col gap-4">
                            {documents.map((doc) => (
                                <div
                                    key={doc.id}
                                    className="flex items-center justify-between rounded-lg border bg-white p-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <svg
                                            className="h-7 w-7 text-base-orange"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M9 12h6M9 16h6M5 8h14M5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
                                        </svg>
                                        <div>
                                            <div className="text-sm font-semibold">
                                                {doc.title}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Approver:{" "}
                                                {doc.approval_user?.name ||
                                                    "Unknown"}
                                            </div>
                                            <div className="mt-1">
                                                <span
                                                    className={`rounded px-2 py-0.5 text-xs font-semibold ${getTypeBadge(
                                                        doc.document_type
                                                    )}`}
                                                >
                                                    {doc.document_type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
                                            Draft
                                        </span>
                                        <a
                                            href={doc.docx_url}
                                            className="rounded border px-4 py-1 text-sm transition hover:bg-gray-100"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DocFlowIndex;
