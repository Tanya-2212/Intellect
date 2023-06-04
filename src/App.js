import './App.css';
import './css/custom.css'
import Widget1 from './components/Widget1';
import Widget2 from './components/Widget2';
import { Tabs } from 'antd';

function App() {
  const items = [
    {
      key: '1',
      label: `Widget 1`,
      children: <Widget1 />,
    },
    {
      key: '2',
      label: `Widget 2`,
      children: <Widget2 />,
    },
  ];
  return (
    <div className="Dashboard">
      <h1>React Widgets</h1>
      <Tabs
        defaultActiveKey="1"
        centered
        tabBarStyle={{ color: "#ffffff" }}
        items={items}
      />
    </div>
  )
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" Component={Dashboard} />
  //     </Routes>    
  //   </BrowserRouter>
  // );
}

export default App;
