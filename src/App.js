import AddCourse from './components/AddCourse';
import ApiTest from './components/ApiTest';
import CourseApi from './components/CourseApi';
import Lists from './components/Lists';
import ToDoApp from './components/ToDoApp';
import LeranGrid from './components/LeranGrid';
import News from './components/News';
import Header from './components/Header';
import { BrowserRouter,Route } from 'react-router-dom';
import TestForm from './components/TestForm';
import { Grid } from '@material-ui/core';

function App() {


  return (
    <div className="App">

  
     <BrowserRouter>
      <Header />

      <Route path="/" exact component={AddCourse}/>
      <Route path="/viewcourse" exact component={CourseApi}/>
      <Route path="/test" exact component={TestForm}/>

      </BrowserRouter> 

    </div>
  );
}

export default App;
