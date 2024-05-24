import React from 'react';
// import data from '../../data/Capabilities.json'; // Adjust the path as necessary


const data = [
    {
      "category": "Restaurant Operations",
      "img": "/assets/images/enviorments/full-1.jpg",
      "operations": [
        {
          "title": "Prep and maintenance operations",
          "details": "Cutting, mixing, cleaning, inventory"
        },
        {
          "title": "Employee Support",
          "details": "Reducing mundane tasks so that they do what they do best."
        }
      ]
    },
    {
      "category": "Elderly and Disabled Care",
      "img": "/assets/images/enviorments/2.jpg",
      "operations": [
        {
          "title": "Independence",
          "details": "Assistance with dressing, bathing, eating, and mobility."
        },
        {
          "title": "Caregiver Support",
          "details": "Reducing the physical and emotional burden on caregivers."
        }
      ]
    },
    {
      "category": "Healthcare Support",
      "img": "/assets/images/enviorments/77.webp",
      "operations": [
        {
          "title": "Hospital Efficiency",
          "details": "Transporting supplies and supporting patient care."
        },
        {
          "title": "Home Healthcare",
          "details": "Monitoring vital signs and administering medications."
        }
      ]
    },
    {
      "category": "Domestic Productivity",
      "img": "/assets/images/enviorments/88.jpg",
      "operations": [
        {
          "title": "Domestic Tasks",
          "details": "Handling chores like cleaning, cooking, and laundry."
        },
        {
          "title": "Workplace Assistance",
          "details": "Performing repetitive or strenuous tasks."
        }
      ]
    },
    {
      "category": "Enhanced Home Security",
      "img": "/assets/images/enviorments/1.jpg",
      "operations": [
        {
          "title": "Surveillance",
          "details": "Monitoring homes for security threats."
        },
        {
          "title": "Emergency Response",
          "details": "Assisting in evacuation procedures during emergencies."
        }
      ]
    }
  ]
    

const Categories = () => {
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

export default Categories;
