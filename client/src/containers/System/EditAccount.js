import React from "react";
import { InputReadOnly, InputFormV2 } from "../../components";

const EditAccount = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl w-full text-start font-medium py-4 border-b border-gary-200">
                Chỉnh sửa thông tin cá nhân
            </h1>
            <div className="w-3/5 py-6 flex flex-col gap-4">
                <InputReadOnly label="Mã thành viên" />
                <InputReadOnly label="Số điện thoại" />
                <InputFormV2 label="Tên hiển thị" />
                <InputFormV2 label="Email" />
                <InputFormV2 label="Zalo" />
                <InputFormV2 label="Facebook" />
            </div>
        </div>
    )
}

export default EditAccount