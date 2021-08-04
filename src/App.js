import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import statisticalData  from './json/statistical-data.json'
console.log(statisticalData);

function App() {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" stats={statisticalData} />
    </> 
  );
}

export default App;
