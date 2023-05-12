import "../Routers.css";
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
function DeviceStatus() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [hideDirector, setHideDirector] = React.useState(false);
    const fetchData = () => {
        const url = `https://www.melivecode.com/api/attractions`;
        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    const columns = [
        {
            name: '#',
            selector: row => row.id,
            sortable: true,
            width: '57px'

        },
        {
            name: 'ชื่ออุปกรณ์',
            selector: row => row.name,
            sortable: true,
            width: '250px'
        },
        {
            name: 'สถานที่',
            selector: row =>  row.name,
            sortable: true,
            width: '250px'
        },
        {
            name: 'โหมด',
            selector: row => 'Normal Mode',
        },
        {
            name: 'สถานะ',
            selector: row => <img src="/image/light.png" width="30px" height="25px"/>,
            sortable: true,
            width: '200px'
        },
        {
            name: 'ติดต่อล่าสุด',
            selector: row => '21/05/2021 15:05:42',
        },
        {
            name: 'การใช้งาน',
            selector: row => 'ใช้งานอยู่',

        },
    ];

    useEffect(() => {
        fetchData();
    }, [])

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = items.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );
    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    } /*else if (!isLoaded) {
        return <div><Menubar title="ตั้งค่าข้อมูลเสียงแจ้งเตือน" />
            Loading...</div>;
    }*/
     else {
        return (
            <>
                <Menubar title="สถานะอุปกรณ์" />
                <div className="container-route">
                    <div className="sound-backgorund">
                        <p>ข้อมูลรายละเอียดสถานะอุปกรณ์</p>
                        <div className="sound-item ">
                            <div className="sound-Head">
                                {/* <button className="btn-add" onClick={() => setHideDirector(!hideDirector)}>Hide Directory Column</button> */}
                                <input className="Search" type="text" onChange={e => setFilterText(e.target.value)} placeholder="Search" />
                                <DataTable
                                    className="dataTables_wrapper"
                                    columns={columns}
                                    data={filteredItems}
                                    theme="solarized"
                                    pagination
                                    dense
                                    fixedHeader
                                />
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default DeviceStatus;