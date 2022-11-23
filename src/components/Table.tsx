import React, { useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ILang, IUsersData, IErrorValue } from '../App';
import { generateFakeInfo, getRandomNum } from './Faker';

export interface IFakeInfo {
  id: number;
  identifier: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'index', width: 70, sortable: false },
  { field: 'identifier', headerName: 'ID', width: 70, sortable: false },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 300,
    sortable: false,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 200,
    sortable: false,
  },
];

export default function Table(props: IUsersData & IErrorValue & ILang) {
  let { lang, setLang } = props.langProps;
  let { errorValue, setErrorValue } = props.errorValueProps;
  let { usersData, setUsersData } = props.usersProps;

  // resetData()
  // generateRows();

  function generateRows() {
    let startArr = usersData;
    let generatedArr = [];
    for (let i = 0; i < 20; i++) {
      generatedArr.push({
        id: usersData ? usersData.length + i : 0 + i,
        identifier: makeId(5),
        ...generateFakeInfo(lang),
      });
    }
    const result = startArr.concat(generatedArr);
    console.log(result);
    setUsersData(result);
  }
  function resetData(){

    setUsersData([{
        id: usersData ? usersData.length + 5 : 0 + 5,
        identifier: makeId(5),
        ...generateFakeInfo(lang),
      }])
    console.log(usersData);
    
  }
  function makeId(length: number) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <div style={{ height: 800, width: '100%', marginTop: '20px' }}>
      <DataGrid
        rows={usersData}
        columns={columns}
        pageSize={100}
        disableColumnFilter
        disableSelectionOnClick
        disableColumnMenu
      />
    </div>
  );
}
