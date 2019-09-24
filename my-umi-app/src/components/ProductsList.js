import {Button,Popconfirm,Table} from 'antd';
const ProductList = ({onDelete,products}) =>{
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title:'Actions',
            render: (text,record) =>{
                return (
                    <Popconfirm title='Delete?' onConfirm={() => onDelete}>
                        <Button>Delete</Button>
                    </Popconfirm>

                );
            }
        }
    ];
    return <Table dataSource={products} columns={columns}></Table>;
}//声明了组件的两个状态量，onDelete 和products

export default ProductList;