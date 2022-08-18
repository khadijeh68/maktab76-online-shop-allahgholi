// import { useState } from "react";
// import "../../index.css";

// const Pagination = () => {
//   const pageNumbers = [];
//   const totalProducts = 30;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(5);
  
//   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const getPage = (e) => {
//     const num = e.currentTarget.value;
//     console.log(num);
    
//   };
//   return (
//     <div>
//       <ul className="d-flex flex-row-reverse justify-content-center">
//         {pageNumbers.map((number) => (
//           <li key={number} className="li mx-3">
//             <a onClick={(e) => getPage(e)} className="text-decoration-none">
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;
