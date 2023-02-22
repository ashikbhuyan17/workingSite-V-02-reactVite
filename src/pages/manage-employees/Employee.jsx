import React from 'react';
import { useState } from 'react';
import '../../styles/employee.css';
import { Employees } from '../../util/mock';

import useToggleModal from '../../hooks/useToggleModal';
import NewEmployeeModal from './NewEmployeeModal';
import UpdateEmployee from './UpdateEmployee';
import { useEffect } from 'react';
const Employee = () => {
  const [isOpen, setOpen, setClose] = useToggleModal();
  const [isOpenUpdate, setOpenUpdate, setCloseUpdate] = useToggleModal();
  console.log('Employees', Employees);

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

  console.log(isCheck);

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
                          onClick={() => setOpenUpdate()}
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
                        <a
                          href="#deleteEmployeeModal"
                          className="delete"
                          data-toggle="modal"
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            &#xE872;
                          </i>
                        </a>
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

      {/* <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Employee</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea className="form-control" required></textarea>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input type="submit" className="btn btn-info" value="Save" />
            </div>
          </div>
        </div>
      </div> */}

      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Delete Employee</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete these Records?</p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input type="submit" className="btn btn-danger" value="Delete" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
