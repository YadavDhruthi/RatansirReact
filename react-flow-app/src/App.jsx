import AboutUs from "./AboutUs";
import Blog from "./Blog";
import BrightText from "./BrightText";
import Calculations from "./Calculations";
import ContactUs from "./contactUs";
import Count from "./Count";
import CourseGoal from "./CourseGoal";
import Five from "./Five";
import Fourth from "./Fourth";
import MovieCard from "./MovieCard";
import MovieGrid from "./MovieGrid";
import Second from "./Second";
import Third from "./Third";



function App()
{
  const movies=[
    {name:'Animal',director:'Sandeep vanga',year:2023},
    {name:'Arjun Reddy', director:'Sandeep vanga',year:2015},
    {name:'Bahubali-2',director:'Rajamouli',year:2019},
    {name:'Bahubali-1', director:'Rajamouli',year:2019},
  ];

  return(
    <>
    <h1>React app flow</h1>
    <AboutUs/>
    <ContactUs/>
    <Second/>
    <Count/>
    <Third/>
    <Fourth/>
    <Five/>
    <CourseGoal title="learn React" description="In depth"/>
    <CourseGoal title="About Ratan Sir" description="Ratan sir nice"/>

    <Blog title="Dhruu" body="Ruchi"/>
    <BrightText/>
    <BrightText color="red"/>
    <BrightText color="blue"/>

    <MovieGrid movies={movies}/>
    <Calculations/>
    </>
  )
}
export default App;


