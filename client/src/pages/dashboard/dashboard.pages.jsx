import axios from "../../config/axios";
import React, { useState } from "react";
import "./dashboard.styles.css";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [unit, setUnit] = useState(null);
  const [data, setData] = useState({});
  const [tags, setTags] = useState([]);
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleUnit = (e) => {
    setUnit(e.target.value);
  };

  const getNutritions = async () => {
    try {
      const response = await axios.get(
        `/api/nutrition/${quantity}/${unit}/${search}`
      );
       console.log(response.data.healthLabels)
      setData(response.data);
      setTags(response.data.healthLabels);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="page-content">
        {/* nutrition action */}
        <div className="nutrition-action">
          <div className="get-nutrition" onClick={getNutritions}>
            <h1>Looking for healthy nutritional diet.</h1>
          </div>
          <div className="anayse-health">
            <h1>Take a health check up.</h1>
          </div>
        </div>
        {/* Search field */}
        <div className="search-bar">
          <input
            type="text"
            className="inp-search"
            onChange={handleSearch}
            value={search}
            placeholder="search diet"
          />
        </div>

        <div className="qty-section">
          <div className="quantity-sec">
            <h2>Unit</h2>
            <select name="" id="" onClick={handleUnit}>
              <option value="oz">Once</option>
              <option value="cup">Cup</option>
            </select>
          </div>
          <div className="unit-sec">
            <h2>Quantity</h2>
            <input
              type="number"
              onChange={handleQuantity}
              value={quantity}
              name=""
              id=""
            />
          </div>
        </div>

        
        { data.length === 0 ? (
          <p className="looking">Looking for something</p>
        ) : (
          <div>
            <div className="get-calories-section">
              <ul className="tags-section">
                {tags?.map((tag) => (
                  <li className="health-tag">{tag.replaceAll("_", " ")}</li>
                ))}
              </ul>
            </div>

            <div className="other-nutritents">
              <div className="nutrients-content">
                <div className="left-ntr">
                  <div className="ntr-item">
                    <h3>{data?.totalNutrientsKCal.FAT_KCAL.label}</h3>
                    <p>
                      {data?.totalNutrientsKCal.FAT_KCAL.quantity}
                      {data?.totalNutrientsKCal.FAT_KCAL.unit}
                    </p>
                  </div>

                  <div className="ntr-item">
                    <h3>{data?.totalNutrientsKCal.ENERC_KCAL.label}</h3>
                    <p>
                      {data?.totalNutrientsKCal.ENERC_KCAL.quantity}
                      {data?.totalNutrientsKCal.ENERC_KCAL.unit}
                    </p>
                  </div>
                </div>

                <div className="right-ntr">
                  <div className="ntr-item">
                    <h3>{data?.totalNutrientsKCal.CHOCDF_KCAL.label}</h3>
                    <p>
                      {data?.totalNutrientsKCal.CHOCDF_KCAL.quantity}
                      {data?.totalNutrientsKCal.CHOCDF_KCAL.unit}
                    </p>
                  </div>

                  <div className="ntr-item">
                    <h3>{data?.totalNutrientsKCal.PROCNT_KCAL.label}</h3>
                    <p>
                      {data?.totalNutrientsKCal.PROCNT_KCAL.quantity}
                      {data?.totalNutrientsKCal.PROCNT_KCAL.unit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div> 
    )
    </div>
  );
};

export default Dashboard;
