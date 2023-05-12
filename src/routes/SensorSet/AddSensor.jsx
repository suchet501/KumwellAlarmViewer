import '../SensorSet.css'
import '../../assistant/css/bootstrap.min.css'
import Menubar from '../../components/Menubar';
function AddSensor() {
    return (
        <>
            <Menubar title="ตั้งค่า E-Field Sensor / เพิ่ม E-Field Sensor ใหม่" arrow="long-arrow-left">
            </Menubar>
            <div className="container-route">
                <div className="sensor-backgorund">
                    <p>เพิ่ม E-Field Sensor ใหม่</p>
                    <div className="sensor-item">
                       <div>Warning Point ID</div>  
                       <input type="text" />
                       <div className='mt-3'>E-File Name</div> 
                       <input type="text" />
                       <div className='mt-3'>ตำแหน่งพิกัด Latitude (ทศนิยม 4 ตำแหน่ง)</div> 
                       <input type="text" />
                       <div className='mt-3'>ตำแหน่งพิกัด Longitude (ทศนิยม 4 ตำแหน่ง)</div> 
                       <input type="text" />
                       <button className='btn-add mt-4 ' >SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddSensor;
