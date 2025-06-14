import { useState } from 'react'
import './App.css'
import clsx from 'clsx';
import styles from './App.module.css';
//import useGetAllValidObjects from './hooks/useGetAllValidObjects'
import {SearchByTitle} from './components/SearchByTitle';
import {ValidResponse} from './components/ValidResponse';
import {PaginatedList} from './components/PaginatedList';

function App() {
  const [activeTab, setActiveTab] = useState('');
    const [showByTitle, setShowByTitle] = useState(false);
    const tabs = [
    { id: 'tab1', label: 'Show Pageinated List', content: <PaginatedList /> },
    { id: 'tab2', label: 'Search By Title', content: <SearchByTitle  title={'picasso'} clearByTitle={()=>setShowByTitle(false)}/> },
    { id: 'tab3', label: 'Valid Response', content: <ValidResponse id={33}/> },
  ];
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
    // const {data} = useGetAllValidObjects();
    // if(!data) return <div>.......Loading</div>
    // console.log(data);
    console.log(showByTitle)

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
    </>
  )
}

export default App
