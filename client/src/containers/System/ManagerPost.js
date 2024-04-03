import React from "react";

const ManagerPost = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                <h1 className="text-3x1 font-medium">Quản lý tin đăng</h1>
                <select className="outline-none border p-2 border-gray-200 rounded-md">
                    <option value=" ">Lọc theo trạng thái</option>
                </select>
            </div>
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="border p-2">Mã tin</th>
                        <th className="border p-2">Ảnh đại diện</th>
                        <th className="border p-2">Tiêu đề</th>
                        <th className="border p-2">Giá</th>
                        <th className="border p-2">Trạng thái</th>
                        <th className="border p-2">Xóa bài đăng</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
} 
export default ManagerPost