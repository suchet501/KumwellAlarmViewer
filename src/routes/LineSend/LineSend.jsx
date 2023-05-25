import '../SensorSet.css'
import '../../assistant/css/bootstrap.min.css'
import Menubar from '../../components/Menubar';
function LineSend() {
    return (
        <>
            <Menubar title="การส่ง LINE" arrow="long-arrow-left">
            </Menubar>
            <div className="container-route">
                <div className="sensor-backgorund">
                    <p>ทดสอบการส่ง LINE</p>
                    <div className="sensor-item">
                       <div className='mt-3'>Token Line ID</div> 
                       <input type="text"/>
                       <div className='mt-3'>ข้อความ</div> 
                       <input type="text" />
                       <button className='btn-add mt-4 ' >SUBMIT</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LineSend;