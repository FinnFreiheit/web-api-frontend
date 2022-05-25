import {DataGrid} from "@mui/x-data-grid";
import SearchBarBrowse from "./searchBarBrowse";
import React from "react"


export default function PlcBrowse(props) {

    const columns = [
        {field: "id", headerName: "id", minWidth: 20, flex: 1},
        {field: "name", headerName: "Name", minWidth: 250, flex: 1},
        {field: "has_children", headerName: "has Children", minWidth: 150, flex: 1},
        {field: "db_number", headerName: "db_number", minWidth: 90, flex: 1},
        {field: "datatype", headerName: "datatype", minWidth: 150, flex: 1},
    ];

    const rows = props.plcBrowseData.map((row, index) => ({
        id: index,
        name: row.name,
        has_children: row.has_children,
        db_number: row.db_number,
        datatype: row.datatype,
    }));

    const [variable, setVariable] = React.useState("")
    const [mode, setMode] = React.useState("")

    const handleSearchSubmit = ()=>{
        //ToDO Backendcall
        console.log("Search",mode, variable)
    }

    const handelCellClick = (cellParam)=> {
        setVariable(cellParam.row.name);
    }

    return (
        <>
            <h1>Plc Program Browse</h1>
            <div style={{paddingBottom: "50px"}}>
                <SearchBarBrowse
                    variable={variable}
                    mode={mode}
                    setMode={setMode}
                    setVariable={setVariable}
                    handleSearchSubmit={handleSearchSubmit}
                />
            </div>
            <div style={{width: '100%'}}>
                <DataGrid
                    autoHeight={true}
                    rows={rows}
                    columns={columns}
                    pageSize={15}
                    rowsPerPageOptions={[15]}
                    onCellClick={handelCellClick}>
                </DataGrid>
            </div>
        </>
    )
}

/**
 * <TableContainer component={Paper}>
 *             <Table aria-label="simple table" stickyHeader={true}>
 *                 <TableHead>
 *                     <TableRow>
 *                         <TableCell>Name</TableCell>
 *                         <TableCell>has Children</TableCell>
 *                         <TableCell>db number</TableCell>
 *                         <TableCell>dataType</TableCell>
 *                     </TableRow>
 *                 </TableHead>
 *                 <TableBody>
 *                     {plcBrowseData.map((row) => (
 *                         <TableRow>
 *                             <TableCell>{row.name}</TableCell>
 *                             <TableCell>{row.has_children}</TableCell>
 *                             <TableCell>{row.db_number}</TableCell>
 *                             <TableCell>{row.datatype}</TableCell>
 *                         </TableRow>
 *                         )
 *                      )}
 *                 </TableBody>
 *             </Table>
 *         </TableContainer>
 */