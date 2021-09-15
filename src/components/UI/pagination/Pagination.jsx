import React from "react";
import { getPagesArray } from "../../../utils/pages";
import PagesButton from "../button/PagesButton/PagesButton";

const Pagination = ({totalPages, changePage}) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div style={{ textAlign: "center" }}>

      {pagesArray.map((p) => {
        return (
          <PagesButton onClick={() => changePage(p)} key={p}>
            {p}
          </PagesButton>
        );
      })}
    </div>
  );
};

export default Pagination;