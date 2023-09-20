import UserHomePage from "../../components/userhome/userhome";
import TourPackages from "../../components/tour_packages/tour_packages";
import TrendingPackages from "../../components/trending_tours/trending_tours";


function Userdashboard() {
  return (
    <div className="App">
      <UserHomePage />
      <TourPackages />
      <TrendingPackages />
    </div>  
  );
}

export default Userdashboard;