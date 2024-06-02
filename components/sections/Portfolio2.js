// import data from "../../data/Capabilites.json";

// export default function Portfolio1() {
//   let isEven = true; // Variable to track even/odd iterations

//   return (
//     <>
//       <section className="portfolio">
//         <div className="shape" />
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="block-text center">
//                 <h6 className="sub-heading">
//                   <span>The capabilities</span>
//                 </h6>
//                 <h3 className="heading wow" data-splitting>
//                   Our Robot’s Capabilities
//                 </h3>
//               </div>
//             </div>

//             {data.map((category, index) => {
//               isEven = !isEven; // Toggle isEven for each iteration

//               return (
//                 <section key={index} className="about s3">
//                   <div className="shape" />
//                   <div className="container">
//                     <div className="row">
//                       <div className={`col-xl-6 col-md-12 ${isEven ? '' : 'order-md-2'} mb-4 pt-2`}>
//                         <div className="image-container">
//                           <img src={category.img} className="img-fluid" alt="" />
//                         </div>
//                       </div>
//                       <div className={`col-xl-6 col-md-12 ${isEven ? 'order-md-2' : ''} `}>
//                         <div className="block-text pd-0">
//                           <h4 className="heading wow" data-splitting>{category.category}</h4>
//                           {category.operations.map((operation, index) => (
//                             <div className="pb-4" key={index}>
//                               <h5 className="pb-2">{operation.title}</h5>
//                               <p>{operation.details}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// import data from "../../data/Capabilites.json";

import React from "react";
import data from "../../data/Capabilites.json";

export default function Portfolio1() {
  let isEven = true; // Variable to track even/odd iterations

  return (
    <>
      <section className="portfolio1">
        <div className="shape" />
        <div className="portfolio1-container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>The capabilities</span>
                </h6>
                <h3 className="portfolio1-heading" data-splitting>
                  Our Robot’s Capabilities
                </h3>
              </div>
            </div>

            {data.map((category, index) => {
              isEven = !isEven; // Toggle isEven for each iteration

              return (
                <section key={index} className="about s3">
                  <div className="shape" />
                  <div className="portfolio1-full-width-image-container">
                    <img src={category.img} className="portfolio1-full-width-image" alt="" />
                  </div>
                  <div className="portfolio1-container">
                    <div className="row">
                      <div className={`col-xl-6 col-md-12 ${isEven ? '' : 'order-md-2'} mb-4 pt-2`}>
                        <div className="block-text">
                          <h4 className="portfolio1-heading" data-splitting>{category.category}</h4>
                          {category.operations.map((operation, index) => (
                            <div className="pb-4" key={index}>
                              <h5 className="pb-2">{operation.title}</h5>
                              <p>{operation.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}


// 


// import data from "../../data/Capabilites.json";

// export default function Portfolio1() {
//   let isEven = true; // Variable to track even/odd iterations

//   return (
//     <>
//       <section className="portfolio banner">
//         <div className="shape" />
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="block-text center">
//                 <h6 className="sub-heading">
//                   <span>The capabilities</span>
//                 </h6>
//                 <h3 className="heading wow" data-splitting>
//                   Our Robot’s Capabilities
//                 </h3>
//               </div>
//             </div>

//             {data.map((category, index) => {
//               isEven = !isEven; // Toggle isEven for each iteration

//               return (
//                 <section
//                   key={index}
//                   className="about s3"
//                   style={{
//                     backgroundImage: `url(${category.img})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     borderTopLeftRadius: '20px', // Adjust as needed
//                     borderTopRightRadius: '20px', // Adjust as needed
//                     padding: '50px 0',
//                     position: 'relative',
//                     overflow: "visible",

//                   }}
//                 >
//                   <div className="shape" />
//                   <div className="container">
//                     <div className="row">
//                       <div className={`col-xl-6 col-md-12 ${isEven ? '' : 'order-md-2'} mb-4 pt-2`}>
//                         <div className="image-container">
//                           {/* Hide the image element itself */}
//                           <img src={category.img} className="img-fluid" alt="" style={{ display: 'none' }} />
//                         </div>
//                       </div>
//                       <div className={`col-xl-6 col-md-12 ${isEven ? 'order-md-2' : ''} `}>
//                         <div className="block-text pd-0">
//                           <h4 className="heading wow" data-splitting>{category.category}</h4>
//                           {category.operations.map((operation, index) => (
//                             <div className="pb-4" key={index}>
//                               <h5 className="pb-2">{operation.title}</h5>
//                               <p>{operation.details}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



