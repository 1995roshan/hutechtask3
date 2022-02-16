import { Table, Button, Form, Row, Col, Input,Popconfirm,Card,Select } from 'antd';
import { addData, removeData} from './action/action';
import { useSelector,useDispatch } from 'react-redux';

const { Option } = Select;

const Tab1=()=>{
    const despatch= useDispatch();
    const myData=useSelector((state)=> state.Reducerdata)



    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const oneData = values;
       // const allData = [oneData, ...dataa]
        // SetData(allData)
        despatch(addData(oneData));
        form.resetFields();
    };
    

    return (


        <Form
      form={form}
      layout="vertical"
      name="advanced_search"
      className="ant-advanced-search-form"
      
      onFinish={onFinish}
    
      
    >
      
      <Card title="Organization Details" bordered={false} >
      <Row gutter={24}>
      <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'OrganizationCode'}
            label={'Organization Code'} 
            rules={[
              {
                required: true,
                message: 'Input Organization Code!',
              },
            ]}
          >
            <Input placeholder="Organization Code" type='number'  />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'OrganizationName'}
            label={'Organization Name'} 
            rules={[
              {
                required: true,
                message: 'Input Organization Name!',
              },
            ]}
          >
            <Input placeholder="Organization Name" value={myData?.OrganizationName} 
             />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'CINNumber'}
            label={'CIN Number'} 
            rules={[
              {
                required: true,
                message: 'Input CIN Number!',
              },
            ]}
          >
            <Input placeholder="CIN Number" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'GSTINNumber'}
            label={'GSTIN Number'} 
            rules={[
              {

                required: true,
                message: 'Input GSTIN Number!',
              },
            ]}
          >
            <Input placeholder="GSTIN Number" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'DomainName'}
            label={'Domain Name'} 
            rules={[
              {
                required: true,
                message: 'Input Domain Name!',
              },
            ]}
          >
            <Input placeholder="Domain Name" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'AddressLine1'}
            label={'Address Line 1'} 
            rules={[
              {
                required: true,
                message: 'Input Address Line 1!',
              },
            ]}
          >
            <Input placeholder="Address Line 1" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'AddressLine2'}
            label={'Address Line 2'} 
            rules={[
              {
                required: true,
                message: 'Input Address Line 2!',
              },
            ]}
          >
            <Input placeholder="Address Line 2" />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'Phone'}
            label={'Phone'} 
            
            rules={[
              {
                
                required: true,
                message: 'Input Phone!',
              },
            
            ]}
          >
            <Input placeholder="Phone" type='number' length='10' inputmode="numeric"/>
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'City'}
            label={'City'} 
            rules={[
              {
                required: true,
                message: 'Input City!',
              },
            ]}
          >
            <Input placeholder="City"   />
          </Form.Item>
        </Col>
        <Col md={{span:8}} key={Math.random()}>
          <Form.Item
            name={'State'}
            label={'State'} 
            rules={[
              {
                required: true,
                message: 'Input State!',
              },
            ]}
          >
            <Select
    showSearch
    
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="Andhra Pradesh">Andhra Pradesh</Option>
    <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
    <Option value="Assam">Assam</Option>
    <Option value="Bihar">Bihar</Option>
    <Option value="Chhattisgarh">Chhattisgarh</Option>
    <Option value="Goa">Goa</Option>
  </Select>
          </Form.Item>
        </Col>
        <Col md={{span:4}} key={Math.random()}>
          <Form.Item
            name={'PINCode'}
            label={'PIN Code'} 
            rules={[
              {
                required: true,
                message: 'Input PIN Code!',
              },
            ]}
          >
            <Input placeholder="PIN Code" type='number' />
          </Form.Item>
        </Col>
        <Col  md={{span:4}} key={Math.random()}>
          <Form.Item
            name={'Country'}
            label={'Country'} 
            rules={[
              {
                required: true,
                message: 'Input Country!',
              },
            ]}
          >
            <Input placeholder="Country" />
          </Form.Item>
        </Col>
        </Row>
        <Row>
                        <Col span={11} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">
                                submit
                            </Button>


                        </Col>
                    </Row>
        </Card>

        </Form>
        

    )
}

export default Tab1