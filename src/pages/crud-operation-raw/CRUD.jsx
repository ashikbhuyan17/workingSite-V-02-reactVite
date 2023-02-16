import React from 'react';

const CRUD = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid mt-5">
          <div className="card shadow fix">
            <div className="d-flex justify-content-between  mb-3 bg-danger">
              <div className="main-title mb-3 h4">CRUD OPERATION</div>
              <div>{/* <CreateButton onClick={() => setShow(true)} /> */}</div>
            </div>
            {/* <TableShowEntitesAndSearch setDebouncedTerm={setDebouncedTerm} /> */}
            <div className="table-responsive container-fluid">
              <table
                className="table table-bordered text-center"
                id="dataTable"
                width="100%"
                cellSpacing={0}
              >
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <Paginator
              pageData={customers?.page}
              setPageNumber={setPageNumber}
            /> */}
          </div>
          {/* <CreateCustomerModel show={show} onHide={() => setShow(false)} /> */}
        </div>
      </div>
    </>
  );
};

export default CRUD;
