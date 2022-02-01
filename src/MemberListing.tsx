import { useEffect, useState } from 'react';
import { Box } from "@material-ui/core";
import DataTable from './DataTable';
import data from './data.json'
import {Member} from './Types'
import Search from './Search';

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
  //initailze filter 
  const [search, updateSearch] = useState<{
    field: string;
    value: string;
  }>({
    field: "name",
    value: "",
  });

  const handleRemoveById = (id: string) => {
      const filteredData = state.data.filter((el) => el.id !== id);
    
      updateState({ loading: false, data: filteredData });
  }

  useEffect(() => {
    //This is where we would make the API request
    updateState({ data: data.members, loading: false });
  }, []);


  // Rating algorithm

  // Filter

  // Count

  
  return (
    <Box component="section" id="memberListing">
      <Search search={search} updateSearch={updateSearch} />
      <DataTable
        data={state.data}
        loading={state.loading}
        search={search}
        handleRemoveById={handleRemoveById}
      />
    </Box>
  );
};
