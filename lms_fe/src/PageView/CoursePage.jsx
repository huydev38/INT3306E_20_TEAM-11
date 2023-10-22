import Header from "../Components/header";
import Footer from "../Components/footer";

import '../CSS/footer.css';
import Lecture from "../Components/Lecture";
function CoursePage() {
  return (
    <div className="App" style={{ paddingBottom: '10px' }}>
     <Header/>
       <Lecture/>
     <Footer/>
    </div>
  );
}

export default CoursePage;
