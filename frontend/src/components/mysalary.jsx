import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MySalary = () => {
  const [salaries, setSalaries] = useState([]);
  const [del, setDel] = useState();

  const deliveryBoyId = localStorage.getItem("userId");
    const params = useParams();
    const id= params.id

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/getSalaryByBoyId", { id });
        if (response.data.success) {
          console.log(response.data)
          setSalaries(response.data.data);
        } else {
          setError("Failed to fetch salary data.");
        }
      } catch (err) {
        setError("An error occurred while fetching salary data.");
        console.error("Failed to load salary", err);
      } 
    };

    fetchSalaries();
  }, []);


  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif"
  };

  const thStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",

  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
  };

  const containerStyle = {
    padding: "30px",
    maxWidth: "800px",
    margin: "0auto",
  
  };

  const headingStyle = {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
    borderBottom: "2px solid #eee",
    paddingBottom: "10px"
  };
 


  console.log(salaries)

  let totalSalary = 0
  let totaldeliveries = 0
  
  {salaries.map(sal => {
    totalSalary = sal.salaryAmount+totalSalary
    totaldeliveries = sal.totalDeliveries+totaldeliveries
  })}
   
  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>My Salary History</h3>
       
  <h2>
    {/* {totalSalary} */}
    <div style={{
  backgroundColor: "#f0fdf4",           
  border: "1px solid #c6f6d5",          // Soft green border
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  width: "100%",
  maxWidth: "400px",
  fontFamily: "Arial, sans-serif"
}}>
  <h2 style={{
    margin: 0,
    color: "#2f855a",                  // Deep green text
    fontSize: "22px",
    fontWeight: "600"
  }}>
    Total Salary: ₹{totalSalary || 0}
  </h2>
</div></h2>
<div>

</div>
        <h3>
          {/* {totaldeliveries} */}
          <div style={{
  backgroundColor: "#f0fdf4",           
  border: "1px solid #c6f6d5",          // Soft green border
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  width: "100%",
  maxWidth: "400px",
  fontFamily: "Arial, sans-serif"
}}>
  <h2 style={{
    margin: 0,
    color: "#2f855a",                  // Deep green text
    fontSize: "22px",
    fontWeight: "600"
  }}>
    Total Deliveries: {totaldeliveries|| 0}
  </h2>
  </div></h3>
      
    </div>
  );
};

export default MySalary;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const MySalary = () => {
//   const [salaries, setSalaries] = useState([]);
//   const [error, setError] = useState("");

//   const params = useParams();
//   const id = params.id;

//   useEffect(() => {
//     const fetchSalaries = async () => {
//       try {
//         const response = await axios.post("http://localhost:5000/api/getSalaryByBoyId", { id });
//         if (response.data.success) {
//           setSalaries(response.data.data);
//         } else {
//           setError("Failed to fetch salary data.");
//         }
//       } catch (err) {
//         setError("An error occurred while fetching salary data.");
//         console.error("Failed to load salary", err);
//       }
//     };

//     fetchSalaries();
//   }, []);

//   // Calculate totals
//   const totalSalary = salaries.reduce((acc, curr) => acc + (curr.salaryAmount || 0), 0);
//   const totalDeliveries = salaries.reduce((acc, curr) => acc + (curr.sala || 0), 0);

//   // Styles
//   const containerStyle = {
//     padding: "30px",
//     maxWidth: "800px",
//     margin: "0 auto",
//     fontFamily: "Arial, sans-serif"
//   };

//   const headingCardStyle = {
//     backgroundColor: "#f5f5f5",
//     padding: "20px",
//     borderRadius: "10px",
//     marginBottom: "30px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     border: "1px solid #e0e0e0"
//   };

//   const headingStyle = {
//     fontSize: "26px",
//     fontWeight: "bold",
//     color: "#333",
//     margin: 0
//   };

//   const cardRowStyle = {
//     display: "flex",
//     gap: "20px",
//     flexWrap: "wrap",
//     marginBottom: "30px"
//   };

//   const cardStyle = {
//     flex: "1",
//     minWidth: "250px",
//     backgroundColor: "#f0fdf4",
//     border: "1px solid #c6f6d5",
//     borderRadius: "10px",
//     padding: "20px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//   };

//   const cardTitleStyle = {
//     margin: 0,
//     fontSize: "18px",
//     color: "#2f855a",
//     marginBottom: "8px"
//   };

//   const cardValueStyle = {
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#333"
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "collapse",
//     fontFamily: "Arial, sans-serif"
//   };

//   const thStyle = {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     padding: "10px",
//     border: "1px solid #ddd",
//     textAlign: "left"
//   };

//   const tdStyle = {
//     padding: "10px",
//     border: "1px solid #ddd",
//     textAlign: "left"
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Heading Card */}
//       <div style={headingCardStyle}>
//         <h3 style={headingStyle}>My Salary History</h3>
//       </div>

//       {/* Summary Cards */}
//       <div style={cardRowStyle}>
//         {/* Total Salary Card */}
//         <div style={cardStyle}>
//           <h4 style={cardTitleStyle}>Total Salary</h4>
//           <p style={cardValueStyle}>₹{totalSalary}</p>
//         </div>

//         {/* Total Deliveries Card */}
//         <div style={cardStyle}>
//           <h4 style={{ ...cardTitleStyle, color: "#1e88e5" }}>Total Deliveries</h4>
//           <p style={cardValueStyle}>{totalDeliveries}</p>
//         </div>
//       </div>

//       {/* Salary Table */}
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>Date</th>
//             <th style={thStyle}>Total Deliveries</th>
//             <th style={thStyle}>Salary Amount (₹)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {salaries.length > 0 ? (
//             salaries.map((salary, index) => (
//               <tr key={index}>
//                 <td style={tdStyle}>{new Date(salary.date).toLocaleDateString()}</td>
//                 <td style={tdStyle}>{salary.sala}</td>
//                 <td style={tdStyle}>₹{salary.salaryAmount}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td style={tdStyle} colSpan="3">No salary data available.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MySalary;





