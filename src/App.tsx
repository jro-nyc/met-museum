import { useState } from 'react'
import './App.css'
import clsx from 'clsx';
import styles from './App.module.css';
//import useGetAllValidObjects from './hooks/useGetAllValidObjects'
import {SearchByTitle} from './components/SearchByTitle';
import {ValidResponse} from './components/ValidResponse';
import {PaginatedList} from './components/PaginatedList';
import {SearchByDepartment} from './components/SearchByDepartment';
import Modal from './components/Modal';

function App() {
  const [activeTab, setActiveTab] = useState<string>('tab1');
  const [showByTitle, setShowByTitle] = useState<boolean>(false);
  const [showById, setShowById] = useState<boolean>(false);
  const [titleModalOpen, setTitleModalOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle]= useState<string>('');
  const [idModalOpen, setIdModalOpen] = useState<boolean>(false);
  const [newId, setNewId]= useState<number>(0);
  const tabs = [
    { id: 'tab1', label: 'Show Paginated List', content: <PaginatedList /> },
    { id: 'tab2', label: 'Search By Title', content: <SearchByTitle  title={newTitle} clearByTitle={()=>setShowByTitle(false)}/> },
    { id: 'tab3', label: 'Search By Id', content: <ValidResponse id={newId} clearById={()=>setShowById(false)}/> },
    { id: 'tab4', label: 'Search By Department', content: <SearchByDepartment dept={newTitle} clearByDept={()=>setShowById(false)}/> },
  ];
  const handleTabClick = (tabId: string) => {
    if(tabId === "tab2") {
      setTitleModalOpen(true)
    } else if(tabId === "tab3") {
      setIdModalOpen(true)
    }
    else {
      setActiveTab(tabId);
    }
  };
    // const {data} = useGetAllValidObjects();
    // if(!data) return <div>.......Loading</div>
    // console.log(data);
    console.log(showByTitle, showById)

  return (
    <>
    <div className={styles.tabContainer}>
      {/* Tab Headers */}
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

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
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
    </>
  )
}

export default App
