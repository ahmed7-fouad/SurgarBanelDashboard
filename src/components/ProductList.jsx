import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { AllProducts } from "/src/contexts/AllProductsContext";
import { useContext } from "react";


const paginationModel = { page: 0, pageSize: 5 };

export default function ProductList() {
  let allProducts = useContext(AllProducts);

  const rows = allProducts.map((product) => {
    return {
      id: product.id,
      Product: product.images[0],
      Resources: product.brand,
      Sales: product.price,
      Revinews: product.rating,
      Views: product.stock,
      Videos: product.stock,
      Active: (product.rating > 3 ? true : false),
    };
  });

  


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Product",
     headerName: "Product",
      width: 130,
      renderCell: (params) => {
        return (
          <img 
            src={params.value}
            alt="product" 
            style={{ 
              width: "50px", 
              height: "50px", 
              borderRadius: "5px",
              objectFit: "cover", 
              marginTop: "5px"
            }} 
          />
        );
  }
      },
  { field: "Resources", headerName: "Resources", width: 130, type: "number" },
  {
    field: "Sales",
    headerName: "Sales",
    type: "number",
    width: 100,
  },
  {
    field: "Views",
    headerName: "Views",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "Videos",
    headerName: "Videos",
    sortable: false,
    width: 160,
  },
  {
    field: "Active",
    headerName: "Active",
    type: "H",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <Switch
          checked={params.value}
        />
      );
    },
  },
];


  return (
    <Paper style={{width:"100%",height:"100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
