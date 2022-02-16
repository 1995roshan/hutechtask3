import { Tabs } from 'antd';
import Tab1 from './tab1';
import TableData from './table';
import './tab.css'





const AllTab=()=>{
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
      }
 
    function callback(key) {
        console.log(key);
      }

return (

    <div id='onboarding'>
<Tabs defaultActiveKey="1" onChange={callback} >
<TabPane tab="Organization Details" key="1" >
<Tab1 />
</TabPane>
<TabPane tab="View All Oraganization" key="3">
<TableData />
</TabPane>

</Tabs>
</div>

)

}
export default AllTab