import React  from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import IngredientsTable from './ingredientstable';
import styles from './instructionsmodal.module.css'



const ModalTabs = (props) => (
  <Tabs>
    <TabList className={styles.tabStyle}>
      <Tab><button className={styles.tabTitle}>Instructions</button></Tab>
      <Tab><button className={styles.tabTitle}>Ingredients</button></Tab>
    </TabList>
    <TabPanel>
      {props.instructions}
    </TabPanel>
    <TabPanel>
    <IngredientsTable data={props.ingredients}/>
    </TabPanel>
  </Tabs>
);

export default ModalTabs