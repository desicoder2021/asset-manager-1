import { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import HttpService from "../services/http-service";
import Assets from "./Assets";
import { Endpoints } from "../constants";
import Bycategory from "./Bycategory";

const Home = () => {
  const [assets, setAssets] = useState([]);
  const [categories, setCategories] = useState([]); // [1]
  const fetchAssets = async () => {
    try {
      const response = await HttpService.get(Endpoints.ASSETS);
      setAssets(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await HttpService.get(Endpoints.CATEGORIES);
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssets();
    fetchCategories(); // [2]
  }, []);
  return (
    <div className='card'>
      <TabView>
        <TabPanel header='Assets'>
          <Assets assets={assets} />
        </TabPanel>
        <TabPanel header='By Category'>
          <Bycategory assets={assets} categories={categories} /> {/* [3] */}
        </TabPanel>
        <TabPanel header='Header III'>
          <p className='m-0'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default Home;
