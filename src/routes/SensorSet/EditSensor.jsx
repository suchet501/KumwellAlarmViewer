import '../SensorSet.css'
import '../../assistant/css/bootstrap.min.css'
import Menubar from '../../components/Menubar';
function AddSound() {
    return (
        <>
            <Menubar title="ตั้งค่า E-Field Sensor / แก้ไข E-Field Sensor " arrow="long-arrow-left">
            </Menubar>
            <div className="container-route">
                <div className="sensor-backgorund">
                    <p>แก้ไข E-Field Sensor</p>
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
export default AddSound;