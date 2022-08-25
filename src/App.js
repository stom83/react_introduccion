import './App.js';
import React from 'react';
import Card from './Card';
import { useEffect, useState } from 'react';
function App() {
  const [courses, updateCourses] = useState([]);
  const apiReact = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';
  function getUsersApi(){
    return new Promise ((resolve, reject) => {
      fetch(apiReact)
      .then(respuestaApi => respuestaApi.json())
      .then((datos) => {
        resolve(datos.communityCategories)
      })
      
    })
  };
  async function getCoursesApi(){
    const courses = await getUsersApi();
    console.log(courses);
    updateCourses(courses);
  }; 

  useEffect(() =>{
    console.log('accede a api');
    getCoursesApi(courses);
  },[]);

  return (
    <div className='App'>
      <header>
      {
        courses.map(courses =>{
          return <Card
          key= {courses.id}
          name = {courses.name}
          icon = {courses.icon}
          background = {courses.background}
          />
        })
      }
      </header>
    </div>
  );
}
export default App;




