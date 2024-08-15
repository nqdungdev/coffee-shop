import React from "react";
import Collapse from "../common/Collapse";
import { UseFormRegister } from "react-hook-form";

type Props = {
  categories: any;
  register: UseFormRegister<any>;
};

const MenuBox = ({ categories, register }: Props) => {
  return (
    <Collapse title="Danh mục thực đơn">
      <ul className="overflow-y-auto flex gap-1 flex-col mb-1">
        {categories?.map(
          (el: any) =>
            el &&
            !el.parent_id && (
              <li className="w-full" key={el._id}>
                <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                  <input
                    type="checkbox"
                    value={el._id}
                    {...register("categories")}
                  />
                  {el.name_vie}
                </label>
                <ul className="pl-5">
                  {categories?.map(
                    (elChild: any) =>
                      elChild.parent_id &&
                      elChild.parent_id === el._id && (
                        <li key={elChild._id} className="w-full">
                          <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                            <input
                              type="checkbox"
                              value={elChild._id}
                              {...register("categories")}
                            />
                            {elChild.name_vie}
                          </label>
                        </li>
                      )
                  )}
                </ul>
              </li>
            )
        )}
      </ul>
    </Collapse>
  );
};

export default MenuBox;
