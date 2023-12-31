import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Checkbox from "../../components/Checkbox/Checkbox";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";
import SpaceflightList from "../../components/SpaceflightList/SpaceflightList";

const AppLayout = () => {
  return (
    <>
      <Breadcrumb />
      <section className="container d-none d-lg-block d-md-block">
        <div className="row">
          <div className="col-lg-12">
            <Checkbox alignClass="text-end">Show upcomming only</Checkbox>
          </div>
        </div>
      </section>
      <Filters />
      <SpaceflightList />
      <Pagination />
      <Footer>Created by the brilliant minds behind SpaceX</Footer>
    </>
  );
};

export default AppLayout;
