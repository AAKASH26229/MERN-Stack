// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';

// function App() {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   const fetchMenuItems = async () => {
//     try {
    
//       const response = await axios.get('http://localhost:5000/api/menu');
//       setMenuItems(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.log('Error fetching menu items:', error);
//     }
//   };

//   const savePrice = async (id, price) => {
//     try {

//       await axios.put(`http://localhost:5000/api/menu/${id}`, { price });
//       console.log('Price updated successfully');
//     } catch (error) {
//       console.log('Error updating price:', error);
//     }
//   };

//   const columns = React.useMemo(
//     () => [
//       { Header: 'Name', accessor: 'name' },
//       { Header: 'Image', accessor: 'image' },
//       { Header: 'Category', accessor: 'category' },
//       { Header: 'Label', accessor: 'label' },
//       { Header: 'Price', accessor: 'price', Cell: EditableCell },
//       { Header: 'Description', accessor: 'description' },
//     ],
//     []
//   );

//   const data = React.useMemo(() => menuItems, [menuItems]);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data });

//   function EditableCell(cellProps) {
//     const { value: initialValue, row: { original } } = cellProps;
//     const [value, setValue] = useState(initialValue);

//     const onChange = (e) => {
//       setValue(e.target.value);
//     };

//     const onBlur = () => {
//       if (initialValue !== value) {
//         savePrice(original.id, value);
//       }
//     };

//     return <input value={value} onChange={onChange} onBlur={onBlur} />;
//   }

//   return (
//     <div>
//       <h1 style={{textAlign:'center'}}>Restaurant Menu</h1>
//       <table {...getTableProps()} style={{ borderCollapse: 'collapse' , textAlign:'center', marginLeft:'auto', marginRight:'auto'}}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   style={{
//                     padding: '8px',
//                     border: '1px solid black',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   {column.render('Header')}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td
//                       {...cell.getCellProps()}
//                       style={{
//                         padding: '8px',
//                         border: '1px solid black',
//                       }}
//                     >
//                       {cell.render('Cell')}
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//           <div style={{alignItems:'center', justifyContent:'center', display:'flex', marginTop:'50px'}}>
//         <button  type='submit' style={{background:'black', color:'white', width:'50px' }}>Save</button>

//           </div>

//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useTable } from 'react-table';


// function Record({object}){
//     return  (
//         <tr>
//             <td>{object.name}</td>
//             <td><img style={{width:90 , height:90 }} src={object.image} /></td>
//             <td>{object.label}</td>
//             <td>{object.category}</td>
//             <td>{object.description}</td>
//             <td>{object.price}</td>
//         </tr>
//       )  }


// function App() {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   const fetchMenuItems = async () => {
//     try {
    
//       const response = await axios.get('http://localhost:5000/api/menu');
//       setMenuItems(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.log('Error fetching menu items:', error);
//     }
//   };

//   const savePrice = async (id, price) => {
//     try {

//       await axios.put(`http://localhost:5000/api/menu/${id}`, { price });
//       console.log('Price updated successfully');
//     } catch (error) {
//       console.log('Error updating price:', error);
//     }
//   };

//   const columns = React.useMemo(
//     () => [
//       { Header: 'Name', accessor: 'name' },
//       { Header: 'Image', accessor: 'image' },
//       { Header: 'Category', accessor: 'category' },
//       { Header: 'Label', accessor: 'label' },
//       { Header: 'Price', accessor: 'price', Cell: EditableCell },
//       { Header: 'Description', accessor: 'description' },
//     ],
//     []
//   );

//   const data = React.useMemo(() => menuItems, [menuItems]);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data });

//   function EditableCell(cellProps) {
//     const { value: initialValue, row: { original } } = cellProps;
//     const [value, setValue] = useState(initialValue);

//     const onChange = (e) => {
//       setValue(e.target.value);
//     };

//     const onBlur = () => {
//       if (initialValue !== value) {
//         savePrice(original.id, value);
//       }
//     };

//     return <input value={value} onChange={onChange} onBlur={onBlur} />;
//   }

//   return (
//     <div>
//       <h1 style={{textAlign:'center'}}>Restaurant Menu</h1>
//       <table {...getTableProps()} style={{ borderCollapse: 'collapse' , textAlign:'center', marginLeft:'auto', marginRight:'auto'}}>
//         <thead>
//             <tr>
//                   <th>Name</th>
//                   <th>Image</th>
//                   <th>Label</th>
//                   <th>Cagtegory</th>
//                   <th>Description</th>
//                   <th>Price</th>
//             </tr>
          
//         </thead>
//         <tbody {...getTableBodyProps()}>
            
//         {menuItems.map(function(object, i){
//             return <Record object={object}/>;
//          })}
//         </tbody>
//       </table>
//           <div style={{alignItems:'center', justifyContent:'center', display:'flex', marginTop:'50px'}}>
//         <button  type='submit' style={{background:'black', color:'white', width:'50px' }}>Save</button>

//           </div>

//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

function Record({object}){
    return (
        <tr>
            <td>{object.name}</td>
            <td><img style={{width:90 , height:90 }} src={object.image} /></td>
            <td>{object.label}</td>
            <td>{object.category}</td>
            <td>{object.description}</td>
            <td>{object.price}</td>
        </tr>
    )
}

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
    
      const response = await axios.get('http://localhost:5000/api/menu');
      setMenuItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.log('Error fetching menu items:', error);
    }
  };

  const savePrice = async (id, price) => {
    try {

      await axios.put(`http://localhost:5000/api/menu/${id}`, { price });
      console.log('Price updated successfully');
    } catch (error) {
      console.log('Error updating price:', error);
    }
  };

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Image', accessor: 'image' },
      { Header: 'Category', accessor: 'category' },
      { Header: 'Label', accessor: 'label' },
      { Header: 'Price', accessor: 'price', Cell: EditableCell },
      { Header: 'Description', accessor: 'description' },
    ],
    []
  );

  const data = React.useMemo(() => menuItems, [menuItems]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  function EditableCell(cellProps) {
    const { value: initialValue, row: { original } } = cellProps;
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    const onBlur = () => {
      if (initialValue !== value) {
        savePrice(original.id, value);
      }
    };

    return <input value={value} onChange={onChange} onBlur={onBlur} />;
  }

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Restaurant Menu</h1>
      <table {...getTableProps()} style={{ borderCollapse: 'collapse' , textAlign:'center', marginLeft:'auto', marginRight:'auto'}} className="table">
        <thead className="thead-dark">
            <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Label</th>
          <th>Cagtegory</th>
          <th>Description</th>
          <th>Price</th>
            </tr>
          
        </thead>
        <tbody {...getTableBodyProps()}>
            
        {menuItems.map(function(object, i){
            return <Record object={object}/>;
         })}
        </tbody>
      </table>
          <div style={{alignItems:'center', justifyContent:'center', display:'flex', marginTop:'50px'}}>
        <button  type='submit' style={{background:'black', color:'white', width:'50px' }}>Save</button>

          </div>

    </div>
  );
}

export default App;