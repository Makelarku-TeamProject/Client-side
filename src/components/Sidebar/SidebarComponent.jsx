import React, { useEffect } from 'react';
import './sidebar.css'; // Assuming you have a CSS file for styles

const SidebarComponent = () => {
  const handleSidebarToggle = () => {
    const sidebar = document.querySelector("#sidebar");
    if (sidebar) {
      sidebar.classList.toggle("collapsed");
    }
  };

  useEffect(() => {
    // Initialize DataTable once the component mounts
    if (window.$) { // Ensure jQuery is available
      window.$('#example').DataTable();
    }
  }, []);

  return (
    <div className="wrapper">
      <aside id="sidebar" className="collapsed">
        <div className="h-100">
          <div className="sidebar-logo">
            <a href="#">Admin</a>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-header">Menu</li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="fa-solid fa-list pe-2"></i>
                Dashboard
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link collapsed" data-toggle="collapse" data-target="#category" aria-expanded="false">
                <i className="fa-solid fa-file-lines pe-2"></i>
                Category
              </a>
              {/* Uncomment when needed */}
              {/* <ul id="category" className="sidebar-link list-unstyled collapse" data-parent="#sidebar">
                <li className="sidebar-item"><a href="#" className="sidebar-link">Kategori Jual</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-link">Kategori Sewa</a></li>
              </ul> */}
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link collapsed" data-toggle="collapse" data-target="#slider" aria-expanded="false">
                <i className="fa-solid fa-sliders pe-2"></i>
                Slider
              </a>
              {/* Uncomment when needed */}
              {/* <ul id="slider" className="sidebar-link list-unstyled collapse" data-parent="#sidebar">
                <li className="sidebar-item"><a href="#" className="sidebar-link">Slider 1</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-link">Slider 2</a></li>
              </ul> */}
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link collapsed" data-toggle="collapse" data-target="#member" aria-expanded="false">
                <i className="fa-regular fa-user pe-2"></i>
                Member
              </a>
              {/* Uncomment when needed */}
              {/* <ul id="member" className="sidebar-link list-unstyled collapse" data-parent="#sidebar">
                <li className="sidebar-item"><a href="#" className="sidebar-link">Member 1</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-link">Member 2</a></li>
              </ul> */}
            </li>
          </ul>
        </div>
      </aside>
      <div className="main">
        <nav className="navbar navbar-light navbar-expand px-3 border-bottom">
          <button className="btn" id="sidebar-toggle" type="button" onClick={handleSidebarToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse navbar">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="#" data-toggle="dropdown" className="nav-icon pe-md-0">
                  <img src="image/profile.jpg" className="avatar img-fluid rounded" alt="" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="#" className="dropdown-item">Profile</a>
                  <a href="#" className="dropdown-item">Setting</a>
                  <a href="#" className="dropdown-item">Log Out</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <main className="content px-3 py-2">
          <div className="container-fluid">
            <div className="mb-3">
              <h4>Admin Dashboard</h4>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 d-flex">
                <div className="card flex-fill border-0 ilustrasi" style={{ backgroundColor: 'rgb(207,226,253)' }}>
                  <div className="card-body p-0 d-flex flex-fill">
                    <div className="row g-0 w-100">
                      <div className="col-6">
                        <div className="p-3 m-1">
                          <h5>Welcome Back, User</h5>
                          <p className="mb-0" style={{ fontSize: 'small' }}>Admin Dashboard, User</p>
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end text-end p-0">
                        <img src="image/customer-support.jpg" alt="" className="img-fluid ilustrasi-img" style={{ maxWidth: '150px', width: '100%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex">
                <div className="card flex-fill border-0 ilustrasi">
                  <div className="card-body py-4">
                    <div className="d-flex align-item-start">
                      <div className="flex-grow-1">
                        <h5 className="mb-2">3</h5>
                        <p className="mb-2">Total Properti</p>
                        <p className="mb-2">Since Last Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-header">
                <h5 className="card-title">Data Table Properti</h5>
                <h6 className="card-subtitle text-muted">Data tentang kumpulan Properti</h6>
              </div>
              <div className="card-body">
                <div className="container">
                  <div className="col-12">
                    <table id="example" className="table table-hover responsive nowrap" style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th>Client Name</th>
                          <th>Phone Number</th>
                          <th>Profession</th>
                          <th>Date of Birth</th>
                          <th>App Access</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-blue mr-3">EB</div>
                                <div>
                                  <p className="font-weight-bold mb-0">Ethan Black</p>
                                  <p className="text-muted mb-0">ethan-black@example.com</p>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td>(784) 667 8768</td>
                          <td>Designer</td>
                          <td>09/04/1996</td>
                          <td>
                            <div className="badge badge-success badge-success-alt">Enabled</div>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button className="btn btn-sm btn-icon" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-horizontal-rounded" data-toggle="tooltip" data-placement="top" title="Actions"></i>
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <a className="dropdown-item" href="#"><i className="bx bxs-pencil mr-2"></i> Edit Profile</a>
                                <a className="dropdown-item text-danger" href="#"><i className="bx bxs-trash mr-2"></i> Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-pink mr-3">JR</div>
                                <div>
                                  <p className="font-weight-bold mb-0">Julie Richards</p>
                                  <p className="text-muted mb-0">julie_89@example.com</p>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td>(937) 874 6878</td>
                          <td>Investment Banker</td>
                          <td>13/01/1989</td>
                          <td>
                            <div className="badge badge-success badge-success-alt">Enabled</div>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button className="btn btn-sm btn-icon" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-horizontal-rounded" data-toggle="tooltip" data-placement="top" title="Actions"></i>
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <a className="dropdown-item" href="#"><i className="bx bxs-pencil mr-2"></i> Edit Profile</a>
                                <a className="dropdown-item text-danger" href="#"><i className="bx bxs-trash mr-2"></i> Remove</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row text-muted">
              <div className="col-6 text-start">
                <p className="mb-0"><a href="#" className="text-muted"><strong>User</strong></a></p>
              </div>
              <div className="col-6 text-end d-flex justify-content-end">
                <li className="list-inline-item"><a href="#" className="text-muted">Contact</a></li>
                <li className="list-inline-item"><a href="#" className="text-muted">About Us</a></li>
                <li className="list-inline-item"><a href="#" className="text-muted">Terms</a></li>
                <li className="list-inline-item"><a href="#" className="text-muted">Booking</a></li>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SidebarComponent;
