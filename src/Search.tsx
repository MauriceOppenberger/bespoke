import { Grid, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';


 const Search: React.FC<{
   search: { field: string;  value: string };
   updateSearch: React.Dispatch<
     React.SetStateAction<{ field: string; value: string }>
   >;
 }> = ({ search, updateSearch }) => {
   const handleFilterChange = (event:any) => {
     const { name, value } = event.target;
     updateSearch((prevState) => ({
       ...prevState,
       value: "",
       [name]: value || '',
     }));
     return;
   };
   return (
     <Grid container style={{maxWidth: "900px"}}>
     
       <Grid alignItems="center" style={{ padding: "0", margin: "20px" }}>
         <Grid item xs={12} style={{ padding: "0 10px" }}>
           <TextField
             variant="outlined"
             required={false}
             placeholder="Search By Name"
             inputProps={{ style: { textAlign: "center" } }}
             type="text"
             name="value"
             value={search.value}
             onChange={handleFilterChange}
           />
         </Grid>
       </Grid>
     </Grid>
   );
 };
export default Search;