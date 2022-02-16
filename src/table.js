
import { Table, Button, Form, Row, Col, Input,Popconfirm,Modal } from 'antd';

import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import './table.css';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { addData, removeData, editData, filterData} from './action/action';
import { useSelector,useDispatch } from 'react-redux';
import axios from "axios";
const { Search } = Input;




const TableData = () => {
  // const [dataa, SetData] = useState([])
    const despatch= useDispatch();
    const [loading, setLoading] = useState(false);
    const [designation, setDesignation] = useState([
      {
        desgnId: "",
        desgnName: "",
        desgndescription: "",
      },
    ]);
    const[editing, SetEditing]=useState([])
 const [isModalVisible, setIsModalVisible] = useState(false);

    const [form] = Form.useForm();

    const handleOk = (e) => {
      setIsModalVisible(false);
      despatch(editData(editing))
      console.log('editing ', editing)
      // SetSaveData((pre)=>{
      //   return pre.map((savedata)=> {
      //     if(savedata.OrganizationCode=== editing.OrganizationCode){
      //       return editing;
           
      //     }else{
      //       return savedata
      //     }
          
      //   })
  
  
      // })

      
    };
    const handleChange = (pre, e) => {
      console.log({...pre, targete: e.target.value})
      // SetEditing({...pre, CINNumber:e.target.value}
      // )
    };
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    const onEditData=(record)=>{
      setIsModalVisible(true);
      SetEditing(record)
  
    }

    // useEffect(() => {
    //     const item = localStorage.getItem('dataa')
    //     const convItem = JSON.parse(item)
    //     if (convItem) {
    //         SetData(convItem);
    //     }

    // }, [])

    // useEffect(() => {

    //     const save = JSON.stringify(dataa)
    //     localStorage.setItem('dataa', save)

    // }, [dataa])

const myData=useSelector((state)=> state.Reducerdata)
console.log( 'mydata', myData)
useEffect(() => {
    setLoading(true);
    axios
      .get(
       "https://jsonplaceholder.typicode.com/posts"
       // "https://data.mongodb-api.com/app/data-bnpzf/endpoint/data/beta"
      )

      .then((response) => {
        console.log("response", response);

        const DesgnData = response.data.map((item, i) => ({
          key: i + 1,
          OrganizationCode: item.id,
          OrganizationName: item.title,
          CINNumber: item.body,
        //   OrganizationCode: item.expName,
        //   OrganizationName: item.expAmount,
        //   CINNumber: item.createdAt,

        }));
        setDesignation(DesgnData);
        console.log(designation)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
    //  const onFinish = (values) => {
    // //     console.log('Received values of form: ', values);
    //     const oneData = values;
    // //    // const allData = [oneData, ...dataa]
    // //     // SetData(allData)
    //    despatch(addData(oneData));
    //      form.resetFields();
    //  };
    const columns = [
      
        {
            title: 'Organization Code',
            width: 120,
            dataIndex: 'OrganizationCode',
            key: 'OrganizationCode',
            fixed: 'left',
            render: (OrganizationCode) => <a>{OrganizationCode}</a>
          },
          {
            title: 'Organization Name',
            width: 150,
            dataIndex: 'OrganizationName',
            key: 'OrganizationName',
            fixed: 'left',
          },
          {
            title: 'CIN Number',
            dataIndex: 'CINNumber',
            key: 'CINNumber',
            width: 150,
          },
          {
            title: 'GSTIN Number',
            dataIndex: 'GSTINNumber',
            key: 'GSTINNumber',
            width: 150,
          },
          {
            title: 'Domain Name',
            dataIndex: 'DomainName',
            key: 'DomainName',
            width: 150,
          },
          {
            title: 'Address Line 1',
            dataIndex: 'AddressLine1',
            key: 'AddressLine1',
            width: 150,
          },
          {
            title: 'Address Line 2',
            dataIndex: 'AddressLine2',
            key: 'AddressLine2',
            width: 150,
          },
          {
            title: 'Phone',
            dataIndex: 'Phone',
            key: 'Phone',
            width: 150,
          },
          {
            title: 'City',
            dataIndex: 'City',
            key: 'City',
            width: 150,
          },
          {
            title: 'State',
            dataIndex: 'State',
            key: 'State',
            width: 150,
          },
          {
            title: 'PIN Code',
            dataIndex: 'PINCode',
            key: 'PINCode',
            width: 150,
          },
          {
            title: 'Country',
            dataIndex: 'Country',
            key: 'Country',
            width: 150,
          },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 150,
            render: ( record) =>
            myData.length >= 1 ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => despatch(removeData(record.GSTINNumber))}>
                    
                      <Button>Delete</Button>
                      </Popconfirm>
                    
                    
                    ) : (null)
                   
                    
                   
                  
          }, 
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 150,
            render: ( record) =>
            myData.length >= 1 ? (
              <div>
                  <a type="primary" onClick={()=>{onEditData(record)}}>
              Edit
            </a>
            <Modal title="Edit Data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
            
            layout="vertical"
            name="advanced_search"
            className="ant-advanced-search-form"
            
            //onFinish={onFinish}
          
            
          >
            <Form.Item
            label='Organization Code'>
            <Input label='Organization Code' placeholder="Organization Code" type='number' value={editing?.OrganizationCode} disabled />
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
            <Input placeholder="Organization Name" value={editing?.OrganizationName} 
             onChange={(e)=>{SetEditing(pre=>{
              return{...pre, OrganizationName:e.target.value}              
           })}} 
            />
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
            <Input placeholder="CIN Number"  value={editing?.CINNumber}
            onChange={(e)=>{SetEditing(pre=>{
              return{...pre, CINNumber:e.target.value}
            })}}/>
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
            <Input placeholder="GSTIN Number"  value={editing?.GSTINNumber}
            onChange={(e)=>{SetEditing(pre=>{
              return{...pre, GSTINNumber:e.target.value}
            })}}/>
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
            <Input placeholder="Domain Name"  value={editing?.DomainName}
            onChange={(e)=>{SetEditing(pre=>{
              return{...pre, DomainName:e.target.value}
            })}}/>
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
            <Input placeholder="Address Line 1"  value={editing?.AddressLine1}
            onChange={(e)=>{SetEditing(pre=>{
              return{...pre, AddressLine1:e.target.value}
            })}}/>
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
            <Input placeholder="Address Line 2"  value={editing?.AddressLine2}
            onChange={(e)=>{SetEditing(pre=>{
              return{...pre, AddressLine2:e.target.value}
            })}}/>
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
            <Input placeholder="Phone"  value={editing?.Phone} 
            onChange={(e)=>{SetEditing(pre=>{
              return{...pre, Phone:e.target.value}
            })}}/>
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
              <Input placeholder="State"  value={editing?.State} 
            onChange={(e)=>{SetEditing(pre=>{
              return{...pre, State:e.target.value}
            })}}>
              
        </Input>
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
            <Input placeholder="PIN Code"  value={editing?.PINCode}
            onChange={(e)=>{SetEditing(pre=>{
              return{...pre, PINCode:e.target.value}
            })}}/>
            </Form.Item>
            <Form.Item 
            label='Organization Name'>
            <Input placeholder="Country"  value={editing?.Country} 
            onChange={(e)=>{SetEditing(pre=>{
              return{...pre, Country:e.target.value}
            })}}/>
            </Form.Item>
            </Form>
            </Modal>
                    </div>
                    
                    ) : null
                   
                    
                   
                  
          }, 
    ]

   
    return (
        <>
            <div id='tablee'>
            <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      //suffix={suffix}
      
      onSearch={(value) => despatch(filterData(value))}
      
    />
               



                <Table columns={columns} dataSource={myData} key={Math.random()}
                    title={() => 'Table Chart'}
                    scroll={{ x: 1500, y: 486 }}
                    sticky 
                    style={{ minHeight:475}}
                />
                
                 {/* <Table columns={columns} dataSource={designation} key={Math.random()}
                    title={() => 'Table Chart'}
                    scroll={{ x: 1500, y: 486 }}
                    sticky 
                    style={{ minHeight:475}}
                    
                /> */}
            </div>
        </>
    );
}



export default TableData