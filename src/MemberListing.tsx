import { useEffect, useState } from 'react';
import { Box } from "@material-ui/core";
import DataTable from './DataTable';
import data from './data.json'
import {Member} from './Types'

interface State {
    data: Member[],
    loading: boolean
}

export const MemberListing = () => {
// intialize state
const [state, updateState] = useState<State>({
  data: [],
  loading: true,
});



useEffect(()=>{
//This is where we would make the API request
updateState({ data: data.members, loading: false });
},[])


  return (
    <Box component="section" id="memberListing">
      <DataTable data={state.data} loading={state.loading}  />
    </Box>
  );
};
