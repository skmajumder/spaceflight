import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Checkbox from "../../components/Checkbox/Checkbox";
import Filters from "../../components/Filters/Filters";

const AppLayout = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container">
        <Checkbox>Show upcomming only</Checkbox>
      </div>
      <Filters />
    </>
  );
};

export default AppLayout;
