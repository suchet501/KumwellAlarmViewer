/*import "../SensorSet.css"
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
import { Link } from "react-router-dom";
function SensorSet() {

  return (
    <>
      <Menubar title="ตั้งค่า E Field Sensor" />
      <div className="container-route">
        <div className="sensor-backgorund">
          <p>ข้อมูลรายละเอียด E-Field Sensor</p>
          <Link to="/SensorSet/AddSensor" className="Link-Spect"><button className="btn-add">เพิ่ม E-Field Sensor ใหม่</button></Link>
          <div className="sensor-item padding">
            <div className="sensor-Head">
              <span>#</span>
              <span className="Warning-Point">Warning Point</span>
              <span className="E-Field-Name">E-Field Name </span>
              <span className="Latitude">พิกัด Latitude</span>
              <span className="Longitude">พิกัด Longitude</span>
              <span className="Sensor-edit">แก้ไข</span>
              <span className="Sensor-delete">ลบ</span>
            </div>
            <hr />
            <div>
              
                <label>1</label>
                <Link to="/SensorSet/EditSensor" className="Link-Spect1"><button className="buttonE">แก้ไข</button></Link>
                <Link to="/SensorSet/EditSensor" className="Link-Spect2"><button className="buttonD">ลบ</button></Link>
            </div>
            <div>
                <label>2</label>
                <Link to="/SensorSet/EditSensor" className="Link-Spect1"><button className="buttonE">แก้ไข</button></Link>
                <Link to="/SensorSet/EditSensor" className="Link-Spect2"><button className="buttonD">ลบ</button></Link>
            </div>
            <div>3</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SensorSet;*/

import "../Routers.css";
import Menubar from '../../components/Menubar';
import '../../assistant/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
function SoundSet() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [hideDirector, setHideDirector] = React.useState(false);
  const fetchData = () => {
    const url = `https://www.melivecode.com/api/attractions?search=island`;
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
      name: 'Warning Point',
      selector: row => row.name,
      sortable: true,
      width: '300px'
    },
    {
      name: 'E-Field Name',
      selector: row => row.coverimage,
      omit: hideDirector,
      width: '450px'
    },

    {
      name: 'พิกัด Latitude',
      selector: row => row.latitude,
      omit: hideDirector,
      width: '225px'
    },

    {
      name: 'พิกัด Longitude',
      selector: row => row.longitude,
      omit: hideDirector,
      width: '225px'
    },

    {
      name: 'แก้ไข',
      cell: () => <Link to="/SensorSet/EditSensor" ><button className="edit-btn">แก้ไข</button></Link>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '54px'
    },
    {
      name: 'ลบ',
      cell: () => <button className="delete-btn">ลบ</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
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
  } else if (!isLoaded) {
    return <div><Menubar title="ตั้งค่า E Field Sensor" />
      Loading...</div>;
  } else {
    return (
      <>
        <Menubar title="ข้อมูลรายละเอียด E-Field Sensor" />
        <div className="container-route">
          <div className="sound-backgorund">
            <p>ข้อมูลรายละเอียด E-Field Sensor</p>
            <Link to="/SensorSet/AddSensor" className="Link-Spect"><button className="btn-add">เพิ่ม E-Field Sensor ใหม่</button></Link>
            <div className="sound-item ">
              <div className="sound-Head">
                {/* <button className="btn-add" onClick={() => setHideDirector(!hideDirector)}>Hide Directory Column</button> */}
                {/* <input className ="Search"type="text" onChange={e => setFilterText(e.target.value)} placeholder="Search"/> */}
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
export default SoundSet;

