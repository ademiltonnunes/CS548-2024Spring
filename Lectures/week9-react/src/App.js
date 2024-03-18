import './App.css';
import ClassFooter from './components/ClassFooter';
import ClassHeader from './components/ClassHeader';
import ClassSchedule from './components/ClassSchedule';


function App() {

  const isClassScheduled = true;
  const isSpringBreak = false;
  const isSummerBreak = true;
  return (
    <div className="App">
      Hello from Class App
      <ClassHeader 
        isClassScheduled = {isClassScheduled}
        isSpringBreak = {isSpringBreak}
        isSummerBreak = {isSummerBreak}
      />
      
      <ClassSchedule 
        isClassScheduled = {isClassScheduled}
        isSpringBreak = {isSpringBreak}
        isSummerBreak = {isSummerBreak}
      />
      <ClassFooter 
        isClassScheduled = {isClassScheduled}
        isSpringBreak = {isSpringBreak}
        isSummerBreak = {isSummerBreak}
      />
    </div>
  );
}

export default App;
