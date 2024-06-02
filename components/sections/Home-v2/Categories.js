import React from 'react';
// import data from '../../data/Capabilities.json'; // Adjust the path as necessary


const data = [
    {
      "category": "Kitchen Assistance",
      "img": "/assets/images/enviorments/full-1.jpg",
      "operations": [
        {
          "title": "Ingredient Preparation",
          "details": "Assisting with chopping, mixing, and other prep tasks to speed up kitchen operations."
        },
        {
          "title": "Cooking Support",
          "details": "Handling basic cooking tasks and maintaining optimal cooking conditions."
        },
        {
            "title": "Inventory Management",
            "details": " Monitoring stock levels and alerting staff when supplies are low."
          }
      ]
    },
    {
      "category": "Maintenance and Cleaning",
      "img": "/assets/images/enviorments/2.jpg",
      "operations": [
        {
          "title": "Floor Cleaning",
          "details": "Keeping floors clean and free of spills, ensuring a safe and hygienic dining environment."
        },
        {
          "title": "Dishwashing",
          "details": "Efficiently washing and sanitizing dishes, utensils, and kitchen equipment."
          
        },
        {
            "title": "Waste Management",
            "details": "Managing waste disposal and recycling to maintain a clean kitchen."
            
            
          }
      ]
    },
    {
      "category": "Food Service and Delivery",
      "img": "/assets/images/enviorments/77.webp",
      "operations": [
        {
          "title": "Order Pickup",
          "details": "Seamlessly picking up orders from the kitchen and delivering them to serving stations."
          
        }
      ]
    },
  
  ]
    

const Categories2 = () => {
  return (
    <div className="categories-container">
      {data.map((item, index) => (
        <div
          key={index}
          className="category-section"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="category-content">
            <h2 className="category-title">{item.category}</h2>
            <div className="operations-list">
              {item.operations.map((operation, opIndex) => (
                <div key={opIndex} className="operation-item">
                  <h3 className="operation-title">{operation.title}</h3>
                  <p className="operation-details">{operation.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories2;
