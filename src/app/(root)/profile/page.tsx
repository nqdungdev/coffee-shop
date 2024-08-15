import Button from "@/components/common/button/Button";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Hồ sơ người dùng",
};

const Profile = (props: Props) => {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");

  console.log(sessionToken);

  return (
    <main className="bg-transparent text-black">
      <div className="container">
        <div className="grid grid-cols-12 gap-2 p-5">
          <div className="col-span-3 bg-transparent">
            <div className="px-8 pb-4">
              <div className="py-5 border-b border-solid border-[#efefef] h-[100px] flex flex-col justify-center">
                <div className="flex gap-2 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 relative">
                    <Image
                      src="/uploads/source/logo/logo.png"
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="20vw"
                    />
                  </div>
                  <div>
                    <h1 className="text-black font-semibold">Nguyễn gì đó</h1>
                  </div>
                </div>
              </div>
              <nav className="py-5">
                <ul className="flex flex-col">
                  {[
                    { label: "Tài khoản của tôi", link: "#" },
                    { label: "Đơn mua", link: "#" },
                    { label: "Thông báo", link: "#" },
                  ].map(
                    (el, index) =>
                      el && (
                        <li key={index} className="py-3 group">
                          <Link
                            href={el.link}
                            className="group-hover:text-theme transition-all duration-300"
                          >
                            {el.label}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-span-9 bg-themeLight">
            <div className="px-8 pb-4">
              <div className="py-5 border-b border-solid border-[#efefef] h-[100px] flex flex-col justify-between">
                <h1 className="text-[#333] text-lg font-medium">
                  Hồ sơ của tôi
                </h1>
                <div className="text-[#555] text-sm">
                  Quản lý thông tin hồ sơ để bảo mật tài khoản
                </div>
              </div>
              <div className="pt-5 grid grid-cols-3 gap-2">
                <div className="col-span-2 pr-12">
                  <form>
                    <table className="w-[602px]">
                      <tbody>
                        <tr>
                          <td className="text-black min-w-[20%] overflow-hidden pb-7 text-right whitespace-nowrap">
                            <label>Tên đăng nhập</label>
                          </td>
                          <td className="pb-7 pl-5">
                            <div className="flex gap-2 items-center">
                              <div className="text-sm text-[#333]">ryl1096</div>
                              <button className="bg-none border-0 text-blue text-sm outline-none capitalize" />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-black min-w-[20%] overflow-hidden pb-7 text-right whitespace-nowrap">
                            <label>Tên</label>
                          </td>
                          <td className="pb-7 pl-5">
                            <input
                              type="text"
                              name="fullName"
                              id="fullName"
                              className="h-11 leading-10 mb-4 bg-white rounded-lg border border-solid border-[#d9d9d9] text-sm px-3 font-medium text-[#231f20] outline-none shadow-none"
                              placeholder="Điền họ tên của bạn."
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-black min-w-[20%] overflow-hidden pb-7 text-right whitespace-nowrap">
                            <label>Email</label>
                          </td>
                          <td className="pb-7 pl-5">
                            <div className="flex gap-2 items-center">
                              <div className="text-sm text-[#333]">
                                nq********@gmail.com
                              </div>
                              <button className="bg-none border-0 text-blue text-sm outline-none capitalize">
                                Thay đổi
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-black min-w-[20%] overflow-hidden pb-7 text-right whitespace-nowrap">
                            <label>Số điện thoại</label>
                          </td>
                          <td className="pb-7 pl-5">
                            <div className="flex gap-2 items-center">
                              <div className="text-sm text-[#333]">
                                *********25
                              </div>
                              <button className="bg-none border-0 text-blue text-sm outline-none capitalize">
                                Thay đổi
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-black min-w-[20%] overflow-hidden pb-7 text-right whitespace-nowrap">
                            <label>Giới tính</label>
                          </td>
                          <td className="pb-7 pl-5">
                            <div className="flex gap-5 items-center">
                              <div className="flex gap-2">
                                <input id="male" type="radio" name="gender" />
                                <label
                                  className="text-sm text-[#333]"
                                  htmlFor="male"
                                >
                                  Nam
                                </label>
                              </div>
                              <div className="flex gap-2">
                                <input id="female" type="radio" name="gender" />
                                <label
                                  className="text-sm text-[#333]"
                                  htmlFor="female"
                                >
                                  Nữ
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-black min-w-[20%] overflow-hidden pb-7 text-right whitespace-nowrap">
                            <label>Ngày sinh</label>
                          </td>
                          <td className="pb-7 pl-5">
                            <div className="flex gap-2 items-center">
                              <div className="text-sm text-[#333]">
                                **/09/19**
                              </div>
                              <button className="bg-none border-0 text-blue text-sm outline-none capitalize">
                                Thay đổi
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-black min-w-[20%] overflow-hidden pb-7 text-right whitespace-nowrap">
                            <label />
                          </td>
                          <td className="pb-7 pl-5">
                            <Button type="submit">Lưu</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <div className="border-l border-solid border-[#efefef] overflow-hidden">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-28 h-28 relative">
                      <Image
                        src="/uploads/source/logo/logo.png"
                        alt=""
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="20vw"
                      />
                    </div>
                    <input
                      className="hidden"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                    />
                    <Button className="">Chọn ảnh</Button>
                    <div>
                      <div className="text-[#999] text-sm">
                        Dụng lượng file tối đa 1 MB
                      </div>
                      <div className="text-[#999] text-sm">
                        Định dạng:.JPEG, .PNG
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
