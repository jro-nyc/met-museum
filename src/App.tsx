import { useState } from 'react'
import './App.css'
import clsx from 'clsx';
import styles from './App.module.css';
//import useGetAllValidObjects from './hooks/useGetAllValidObjects'
import {SearchByTitle} from './components/SearchByTitle';
import {SearchById} from './components/SearchById';
import {PaginatedList} from './components/PaginatedList';
import {SearchByDepartment} from './components/SearchByDepartment';
import Modal from './components/Modal';
import { Grid, Box } from '@mui/material';

function App() {
  const [activeTab, setActiveTab] = useState<string>('tab1');
  const [titleModalOpen, setTitleModalOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle]= useState<string>('');
  const [idModalOpen, setIdModalOpen] = useState<boolean>(false);
  const [deptModalOpen, setDeptModalOpen] = useState<boolean>(false);
  const [newId, setNewId]= useState<number>(0);

  const tabs = [
    { id: 'tab1', label: 'Show Paginated List', content: <PaginatedList /> },
    { id: 'tab2', label: 'Search By Title', content: <SearchByTitle  title={newTitle}/> },
    { id: 'tab3', label: 'Search By Id', content: <SearchById id={newId} /> },
    { id: 'tab4', label: 'Search By Department', content: <SearchByDepartment department={newId} /> },
  ];
  const handleTabClick = (tabId: string) => {
    if(tabId === "tab2") {
      setTitleModalOpen(true)
    } else if(tabId === "tab3") {
      setIdModalOpen(true)
    }
    else if(tabId === "tab4") {
      setDeptModalOpen(true)
    }
    else {
      setActiveTab(tabId);
    }
  };
  //console.log(showByTitle, showById)

  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(styles.tab, { [styles.tabActive]: activeTab === tab.id })}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <Grid container sx={{ height: '100%' }}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </Grid>
      <Modal
        isOpen={titleModalOpen}
        onClose={()=>setTitleModalOpen(false)}
        onSubmit={(val)=>{if(typeof val === "string"){setNewTitle(val);setActiveTab('tab2')}}}
        type={"string"}
      />
      <Modal
        isOpen={idModalOpen}
        onClose={()=>setIdModalOpen(false)}
        onSubmit={(val)=>{if(typeof val === "number"){setNewId(val);setActiveTab('tab3')}}}
        type={"number"}
      />
      <Modal
        isOpen={deptModalOpen}
        onClose={()=>setDeptModalOpen(false)}
        onSubmit={(val)=>{if(typeof val === "number"){setNewId(val);setActiveTab('tab4')}}}
        type={"select"}
      />
    </Box>
  )
}

export default App
