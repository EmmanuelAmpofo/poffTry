import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredTableData } from "./tableDataSlice"
import {selectTableData, deleteTableData, editTableData} from "./tableDataSlice"; 
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import {setTableFilter} from "../tableFilter/tableFilterSlice"
import {selectTableFilter} from "../tableFilter/tableFilterSlice";
import {addToTableData} from "./tableDataSlice";


export const TableData = () => {
    const dispatch = useDispatch();
    const filteredData = useSelector(selectFilteredTableData);
    const allData = useSelector(selectTableData)
    const { isLoading } = useSelector((state) => state.tableData);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [disableField, setDisableField] = useState(false);
    const [dataId, setDataId] = useState(0);
    const [modalTitle, setModalTitle] = useState("");
    const [modalBody, setModalBody] = useState("");
    const [modalUserId, setModalUserId] = useState("");
    const [open, setOpen] = React.useState(false);
    const [actionType, setActionType] = useState("");
    const [id, setId] = React.useState(useSelector(selectTableFilter));
    const [selValue, setSelVal] = useState(Array.from(new Set(allData.map((x) => x.userId))));
    // const [selValue, setSelVal] = useState([1,2,3,4]);
    // const selvalue = useSelector(selectTableFilter);

    useEffect(() => {
        dispatch(addToTableData())
        
        setSelVal(Array.from(new Set(allData.map((x) => x.userId))));
        
    }, [filteredData])

    const columns = [
        { id: "title", label: "Title", minWidth: 170 },
        { id: "body", label: "Body", minWidth: 100 },
        {
          id: "userId",
          label: "User ID",
          minWidth: 50,
        },
        {
          id: "action",
          label: "Actions",
          minWidth: 200,
        },
      ];

      const handleEdit = ({ target }) => {
        const id = parseInt(target.attributes["buttonid"].value);
        setDataId(parseInt(target.attributes["buttonid"].value))
        const myObj = filteredData?.find(x => x.id === id);
        setModalTitle(myObj.title);
        setModalBody(myObj.body);
        setModalUserId(myObj.userId);
        handleOpen();
      };

      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const handleDelete = ({ target }) => {
        const id = parseInt(target.attributes["buttonid"].value);
        setDataId(parseInt(target.attributes["buttonid"].value))
        const myObj = filteredData?.find(x => x.id === id);
        setModalTitle(myObj.title);
        setModalBody(myObj.body);
        setModalUserId(myObj.userId);
        // setData(data.filter(x => x.id !== id));
        handleOpen();
      };

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      const handleChange = (event) => {
          setId((event.target.value));
          dispatch(setTableFilter(event.target.value))
            setPage(0);
      };

      const style = {
        position: "absolute",
        top: "50%",
        left: "40%",
        transform: "translate(-50%, -50%)",
        width: "31.25rem",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      //   mr: 4,
        ml: 4
      };


  return (
    <div style={{ marginTop: "30px", padding: "10px 30px" }}>
        
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <FormControl
          sx={{ width: "250px", marginLeft: "20px", marginTop: "20px" }}
        >
           
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={id}
            label="Filter"
            onChange={handleChange}
          >
            {selValue.map((userid, x) => {
              return (
                <MenuItem value={userid} key={x}>
                  {userid}{" "}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
              [...filteredData]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id}>
                            {value !== "actions" ? (
                              value
                            ) : (
                              <ButtonGroup
                                variant="text"
                                aria-label="text button group"
                              >
                                <Button
                                  buttonid={row["id"]}
                                  onClick={(e) => {
                                    setDisableField(false);
                                    handleEdit(e);
                                    setActionType("edit");
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button
                                  buttonid={row["id"]}
                                  onClick={(e) => {
                                    setDisableField(true);
                                    handleDelete(e);
                                    setActionType("delete");
                                  }}
                                >
                                  Delete
                                </Button>
                              </ButtonGroup>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Do you want to {actionType} Data with the information below
            </Typography>
            <TextField
              id="outlined-name"
              label="Title"
              fullWidth
              disabled={disableField}
              maxRows={2}
              value={modalTitle}
              onChange={(e) =>{setModalTitle(e.target.value)} }
              sx={{mt: 2, mb: 2}}
            />
            <TextField
              id="outlined-name"
              label="Body"
              fullWidth
              disabled={disableField}
              value={modalBody}
              multiline
              maxRows={4}
              onChange={(e) =>{setModalBody(e.target.value)} }
              sx={{mt: 2, mb: 2}}
            />
            <TextField
              id="outlined-name"
              label="Body Id"
              value={modalUserId}
              disabled={disableField}
              multiline
              onChange={(e) =>{setModalUserId(e.target.value)} }
              sx={{mt: 2, mb: 2}}
            />
            <br/>
            <Button
              variant="contained"
              sx={{ mr: 4 }}
              onClick={() => {
                if (actionType === "delete") {
                //   setData(data.filter(x => x.id !== dataId));
                dispatch(deleteTableData({id: dataId}))
                } else if (actionType === "edit") {
                //   const newData = [...filteredData];
                //   const dId = filteredData.findIndex(x => x.id === dataId)
                //   newData[dId] = {...filteredData[dId], title: modalTitle, body: modalBody, userId: parseInt(modalUserId)}
                //   setData(newData);
                dispatch(editTableData({title: modalTitle, body: modalBody, userId: parseInt(modalUserId), id: dataId}))
                }
                handleClose();
              }}
            >
              Yes
            </Button>
            <Button variant="contained" onClick={handleClose}>
              No
            </Button>
          </Box>
        </Modal>
      </Paper>
    </div>
  )
}
