import React from 'react';
import { useState } from 'react';
import '../../styles/employee.css';
import { Employees } from '../../util/mock';

import useToggleModal from '../../hooks/useToggleModal';
import NewEmployeeModal from './NewEmployeeModal';
import UpdateEmployee from './UpdateEmployee';
import { useEffect } from 'react';
import DeleteEmployee from './DeleteEmployee';

const Employee = () => {
  const [updateItem, setUpdateItem] = useState('');
  const [deleteItem, setDeleteItem] = useState('');

  const [isOpen, setOpen, setClose] = useToggleModal();
  const [isOpenUpdate, setOpenUpdate, setCloseUpdate] = useToggleModal();
  const [isDelete, setOpenDelete, setCloseDelete] = useToggleModal();
  console.log('🚀 ~ file: Employee.jsx:19 ~ Employee ~ isDelete:', isDelete);

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Employees);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(Employees.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const handleOpenUpdate = (item) => {
    setOpenUpdate();
    setUpdateItem(item);
    console.log('isUpdate', isOpenUpdate);
  };
  const handleDelete = (id) => {
    // console.log('isDelete', isDelete);
    setOpenDelete();
    setDeleteItem(id);
  };

  return (
    <>
      <div className="container-fluid">
        <div className=" table-responsive card shadow fix">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-xs-6">
                  <h2>
                    Manage Employee <b></b>
                  </h2>
                </div>
                <div className="col-xs-6">
                  <a
                    // href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={() => setOpen()}
                  >
                    <i className="material-icons">&#xE147;</i>{' '}
                    <span>Add New Employee</span>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    className="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE15C;</i>{' '}
                    <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover table-responsive container-fluid">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input
                        type="checkbox"
                        name="selectAll"
                        id="selectAll"
                        onChange={handleSelectAll}
                        isChecked={isCheckAll}
                      />
                      <label htmlFor="selectAll"></label>
                    </span>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {Employees.map(({ id, name, email, address, phone }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <span className="custom-checkbox">
                          <input
                            // onChange={(e) => {
                            //   console.log(e.target.checked);
                            // }}
                            key={id}
                            type="checkbox"
                            name={name}
                            id={id}
                            onChange={handleClick}
                            checked={isCheck.includes(id)}
                          />
                          <label for="checkbox1"></label>
                        </span>
                      </td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{address}</td>
                      <td>{phone}</td>
                      <td>
                        <a
                          onClick={() =>
                            handleOpenUpdate({
                              id,
                              name,
                              email,
                              address,
                              phone,
                            })
                          }
                          className="edit"
                          data-toggle="modal"
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Edit"
                          >
                            &#xE254;
                          </i>
                        </a>
                        {/* <a
                          className="delete"
                          data-toggle="modal"
                          onClick={() => handleDelete(id)}
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            &#xE872;
                          </i>
                        </a> */}
                        <DeleteEmployee
                          isDelete={isDelete}
                          setCloseDelete={setCloseDelete}
                          id={deleteItem}
                          setOpenDelete={setOpenDelete}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">Previous</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <NewEmployeeModal isOpen={isOpen} setClose={setClose} />
      <UpdateEmployee isOpen={isOpenUpdate} setClose={setCloseUpdate} />
      {/* <DeleteEmployee
        isDelete={isDelete}
        setCloseDelete={setCloseDelete}
        id={deleteItem}
      /> */}
    </>
  );
};

export default Employee;
