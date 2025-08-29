import React from "react";

const providers = [
    { name: "Christine Brooks", category: "Cleaning", date: "13 Aug 2025", status: "Pending" },
    { name: "Rosie Pearson", category: "Repairing", date: "13 Aug 2025", status: "Pending" },
    { name: "Darrell Caldwell", category: "Services", date: "13 Aug 2025", status: "Pending" },
    { name: "Gilbert Johnston", category: "Cleaning", date: "13 Aug 2025", status: "Pending" },
    { name: "Alan Cain", category: "Repairing", date: "13 Aug 2025", status: "Pending" },
    { name: "Alfred Murray", category: "Cleaning", date: "13 Aug 2025", status: "Pending" },
    { name: "Maggie Sullivan", category: "Repairing", date: "13 Aug 2025", status: "Pending" },
    { name: "Rosie Todd", category: "Cleaning", date: "13 Aug 2025", status: "Pending" },
    { name: "Rosie Todd", category: "Repairing", date: "13 Aug 2025", status: "Pending" },
];

const PendingProvidersTable = () => {
    return (
        <div style={{ padding: "20px", paddingLeft: "80px", paddingRight: "80px" }} className="p-6">
            <h2 className="text-lg font-semibold mb-4">Pending Providers Approval</h2>
            <div className="bg-white shadow-sm rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 font-medium text-gray-600">PROVIDER NAME</th>
                            <th className="px-6 py-3 font-medium text-gray-600">SERVICE CATEGORY</th>
                            <th className="px-6 py-3 font-medium text-gray-600">REQUEST DATE</th>
                            <th className="px-6 py-3 font-medium text-gray-600">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {providers.map((provider, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-6 py-3">{provider.name}</td>
                                <td className="px-6 py-3">{provider.category}</td>
                                <td className="px-6 py-3">{provider.date}</td>
                                <td className="px-6 py-3">
                                    <span className="px-3 py-1 text-red-600 bg-red-100 rounded-lg text-xs font-medium">
                                        {provider.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingProvidersTable;
