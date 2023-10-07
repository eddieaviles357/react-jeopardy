import { getCategoryIds } from './api/api';
import Home from './components/home/Home';
import { useState } from 'react'
import JeopardyContext from './JeopardyContext'

function App() {
  const [categories, setCategories ] = useState([])

  return (
    <JeopardyContext.Provider value={{ categories, setCategories }}>
      <Home />
    </JeopardyContext.Provider>
  );
}

export default App;
