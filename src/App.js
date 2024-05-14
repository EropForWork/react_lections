// import React from 'react';
// import './App.css';
// // import Slide from './components/slide/slide';


// function App() {
//   console.log(1);
//   return (
//     <div className="App">
//       {/* <SlideContextProvider> */}
//         {/* <Slide /> */}
//       {/* </SlideContextProvider> */}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import { SlideContextProvider } from './components/slideContext/slideContext';
import Slide from './components/slide/slide';
import NavBar from './components/navBar/navBar';
import LectionContainer from './components/lectionContainer/lectionContainer';



function App() {
  const [jsonData, setJsonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Состояние для отслеживания загрузки данных

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setJsonData(data);
        setIsLoading(false); // Помечаем, что загрузка завершена
      } catch (error) {
        setIsLoading(false); // Помечаем, что загрузка завершена
      }
    };

    // Загружаем данные только если они еще не загружены
    if (!jsonData && isLoading) {
      fetchData();
    }
  }, [jsonData, isLoading]); // Зависимости useEffect: jsonData и isLoading

  if (isLoading) {
    return <div>Loading...</div>; // Отобразить сообщение о загрузке
  }

  if (!jsonData) {
    return <div>Error: Failed to load data</div>; // Отобразить сообщение об ошибке загрузки данных
  }

  return (
    <div className="App">
      <SlideContextProvider jsonData={jsonData}>
        <LectionContainer>
          <NavBar />
          <Slide />
        </LectionContainer>
      </SlideContextProvider>
    </div>
  );
}

export default App;
