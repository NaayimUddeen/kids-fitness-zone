import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivitiesChartContainer from './Components/ActivitiesContainer/ActivitiesChartContainer/ActivitiesChartContainer';

function App() {
  return (
    <div className="">
      <Header></Header>
      <ActivitiesChartContainer></ActivitiesChartContainer>
    </div>
  );
}

export default App;
