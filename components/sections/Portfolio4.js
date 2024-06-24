import React from 'react';
// import data from '../../data/Capabilities.json'; // Adjust the path as necessary


const data = [
    {
      "category": "Restaurants",
      "img": "/assets/images/enviorments/robot-in-kitchen2.jpeg",
      "operations": [
        {
          "title": "Prep and maintenance operations",
          "details": "Automates food prep and maintenance operations like Cutting, mixing, cleaning and inventory management."
        },
        {
          "title": "Employee Support",
          "details": "Handles mundane tasks in your workplace so that your employees can do what they do best, cook great food and provide mazing customer service."
        }
      ]
    },
    {
      "category": "Retail Stores",
      "img": "/assets/images/enviorments/robot-in-retail.png",
      "operations": [
        {
          "title": "Free Up Your Staff for Customer Interaction",
          "details": "Our robots handle routine and repetitive tasks such as shelving, cleaning, and facing products. This allows your employees to focus on providing excellent customer service and engaging more meaningfully with shoppers."
        }
      ]
    },
    // {
    //   "category": "Healthcare Support",
    //   "img": "/assets/images/enviorments/77.webp",
    //   "operations": [
    //     {
    //       "title": "Hospital Efficiency",
    //       "details": "Transporting supplies and supporting patient care."
    //     },
    //     {
    //       "title": "Home Healthcare",
    //       "details": "Monitoring vital signs and administering medications."
    //     }
    //   ]
    // },
    // {
    //   "category": "Domestic Productivity",
    //   "img": "/assets/images/enviorments/88.jpg",
    //   "operations": [
    //     {
    //       "title": "Domestic Tasks",
    //       "details": "Handling chores like cleaning, cooking, and laundry."
    //     },
    //     {
    //       "title": "Workplace Assistance",
    //       "details": "Performing repetitive or strenuous tasks."
    //     }
    //   ]
    // },
    // {
    //   "category": "Enhanced Home Security",
    //   "img": "/assets/images/enviorments/1.jpg",
    //   "operations": [
    //     {
    //       "title": "Surveillance",
    //       "details": "Monitoring homes for security threats."
    //     },
    //     {
    //       "title": "Emergency Response",
    //       "details": "Assisting in evacuation procedures during emergencies."
    //     }
    //   ]
    // }
  ]
    

const Categories = () => {
  return (
    <div className="categories-container row">
      {data.map((item, index) => (
        <div
          key={index}
          className="category-section"
          style={{ backgroundImage: `url(${item.img})` }}
        >
      <div  className={`category-content ${index % 2 === 0 ? 'gradient-right' : 'gradient-left'}`}>
      <div className="category-text col-md-8">
            <h2 className="category-title">{item.category}</h2>
            <div className={`operations-list ${index % 2 === 0 ? '' : 'text-sm-start text-md-end'}`}>
              {item.operations.map((operation, opIndex) => (
                <div key={opIndex} className="operation-item">
                  <h3 className="operation-title">{operation.title}</h3>
                  <p className="operation-details">{operation.details}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
