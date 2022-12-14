import React, {useState} from "react";
import c from "./Paginator.module.css";
import cn from 'classnames'

type Props = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage: (page:number) => void,
    portionSize: number
}

const Paginator: React.FC<Props> = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages: Array<number> = []
    let [portionNumber, setPortionNumber] = useState(1)
    let portionCount = Math.ceil(pagesCount/ props.portionSize)
    let leftPortionPageNumber = (portionNumber-1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return(
            <div>
                {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button> }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(p => (<span key = {p} className={cn ({[c.selectedPage] : props.currentPage === p}, c.item)}
                                       onClick={() => (props.setCurrentPage(p))}>{p}</span>))}
                {portionNumber < portionCount && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button> }
            </div>
    )
}

export default Paginator