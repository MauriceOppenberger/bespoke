import React from "react";
import {
  DataGrid,
  GridColDef,
  GridCellParams,
} from "@material-ui/data-grid";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { Member } from "./Types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "1rem 0 1rem 0",
    backgroundColor: "#eee",

  },
  
}));

const DataTable: React.FC<{ 
  data: Member[];
  loading: boolean;
}> = ({ data, loading = true }) => {
const classes = useStyles()
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 250,
      sortable: true,
      filterable: true,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "id",
      headerName: "member ID",
      flex: 1.5,
      sortable: true,
      filterable: true,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "rating",
      headerName: "Rating",
      flex: 1,
      sortable: true,
      filterable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "--",
      headerName: "Manage",
      flex: 1,
      sortable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",

      renderCell: function viewButton(params: GridCellParams) {
        return (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
               
              }}
              style={{ padding: "5px 30px", minWidth: 0 }}
            >
              Remove
            </Button>
          </Grid>
        );
      },
    },
  ];

   
  return (
    <Grid
      item
      xs={12}
      style={{ minHeight: 600, width: "80%", margin: 'auto' }}
    >
      <DataGrid
        className={classes.root}
        pagination
        autoHeight={true}
        autoPageSize={true}
        componentsProps={{
          columnMenu: { display: "none" },
        }}
        paginationMode="client"
        rows={data || []}
        columns={columns}
        disableSelectionOnClick
        disableColumnSelector
        density="comfortable"
        loading={loading}
      
      />
    </Grid>
  );
};

export default DataTable;
