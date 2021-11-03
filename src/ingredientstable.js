import Table from 'rc-table';
import React from "react"
import styles from './instructionsmodal.module.css'



function IngredientsTable (props) {
const data = props.data;

const columns = [
    {
        title: 'Ingredient',
        dataIndex: 'ingredient',
        key: 'ingredient',
        width: '50%'
    },
    {
        title: 'Measure',
        dataIndex: 'measure',
        key: 'measure',
        width: '50%'
    },
];

return(
<Table columns={columns} data={data} className={styles.tableStyle}/>
);

}

export default IngredientsTable;
