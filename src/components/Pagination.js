import React from "react";
import "../styles/layout/_pagination.scss"

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination">
            <button className="pagination__button" onClick={onLeftClick}><div>◀️</div></button>
            <div>{page} de {totalPages}</div>
            <button className="pagination__button" onClick={onRightClick}><div>▶️</div></button>
        </div>
    )
}

export default Pagination;