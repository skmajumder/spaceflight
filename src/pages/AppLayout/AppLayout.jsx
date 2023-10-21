import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Checkbox from "../../components/Checkbox/Checkbox";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";

const AppLayout = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Checkbox>Show upcomming only</Checkbox>
          </div>
        </div>
      </div>
      <Filters />
      <Footer>Created by the brilliant minds behind SpaceX</Footer>
    </>
  );
};

export default AppLayout;
