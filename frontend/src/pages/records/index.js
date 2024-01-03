import React, { useState } from "react";
import Header from "../../components/Header";
import RightRecord from "../../components/RightRecord";
import LeftRecord from "../../components/LeftRecord";
import CategoryForm from "@/components/CategoryForm";

const Records = () => {
  const [openCategoryForm, setOpenCategoryForm] = useState(false);
  return (
    <div>
      <Header />
      <div className="flex bg-slate-200 gap-8 justify-center">
        <LeftRecord
          openCategoryForm={openCategoryForm}
          setOpenCategoryForm={setOpenCategoryForm}
        />
        <RightRecord />
        {openCategoryForm && (
          <CategoryForm
            openCategoryForm={openCategoryForm}
            setOpenCategoryForm={setOpenCategoryForm}
          />
        )}
      </div>
    </div>
  );
};

export default Records;
