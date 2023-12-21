import React, {useState, useEffect} from "react";
import Table from './Table';

const Pagination = ({data}) => {
    const [selectedCount, setSelectedCount] = useState(15);
    const [selectedPage, setSelectedPage] = useState(1);
    const [btns, setBtns] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    useEffect(()=>{
        const noOfBtns = Math.ceil(data.length / selectedCount);
        const btns = [];
        for(let i=1; i<=noOfBtns; i++){
            btns.push(i);
        };
        setBtns([...btns]);
    },[selectedCount]);

    const handleSelectedCount = (e) => {
        setSelectedCount(Number(e.target.value));
        setSelectedPage(1);
    };

    useEffect(()=> {
        if(selectedPage === 1){
            const copyData = [...data];
            const filterData = copyData.splice(0, selectedCount);
            setDisplayData([...filterData]);
        }else{
            const previousPage = selectedPage - 1;
            const start = previousPage * selectedCount;
            const end = start + selectedCount;
            const copyData = [...data];
            const filterData = copyData.slice(start, end);
            setDisplayData([...filterData]);
        }

    },[selectedPage, selectedCount]);


    return (<div className="pagination-div">
    <div className="select-div">
        <select onChange={handleSelectedCount}>
          <option value="5" selected={selectedCount === 5}>5</option>
          <option value="10" selected={selectedCount === 10}>10</option>
          <option value="15" selected={selectedCount === 15}>15</option>
        </select>

        <div className="btns-div">
         {btns.map((btn, index)=>{
            return <button key={index} onClick={()=>setSelectedPage(btn)}>{btn}</button>
         })}
        </div>
    </div>
    <Table data={displayData}/>
    </div>);
}

export default Pagination;
