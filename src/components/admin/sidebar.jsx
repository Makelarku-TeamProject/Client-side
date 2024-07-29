let SidebarComponent = () => {

    return (
        <div className="sidebar">
            <aside id="sidebar" class="collapsed">
                {/* <!-- content for sidebar --> */}
                <div class="h-100">
                    <div class="sidebar-logo">
                        <a href="#">Admin</a>
                    </div>
                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Menu
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link">
                                <i class="fa-solid fa-list pe-2"></i>
                                Dashboard
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link collapsed" data-toggle="collapse" data-target="#category"
                                aria-expanded="false"><i class="fa-solid fa-file-lines pe-2"></i>
                                Category
                            </a>
                            {/* <!-- <ul id="category" class="sidebar-link list-unstyled collapse" data-parent="#sidebar">
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link">Kategori Jual</a>
                                </li>
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link">Kategori Sewa</a>
                                </li>
                            </ul> --> */}
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link collapsed" data-toggle="collapse" data-target="#slider"
                                aria-expanded="false"><i class="fa-solid fa-sliders pe-2"></i>
                                Slider
                            </a>
                            {/* <!-- <ul id="slider" class="sidebar-link list-unstyled collapse" data-parent="#sidebar">
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link">Slider 1</a>
                                </li>
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link">Slider 2</a>
                                </li>
                            </ul> --> */}
                        </li>
                        <li class="sidebar-item">
                            <a href="#" class="sidebar-link collapsed" data-toggle="collapse" data-target="#member"
                                aria-expanded="false"><i class="fa-regular fa-user pe-2"></i>
                                Member
                            </a>
                            {/* <!-- <ul id="member" class="sidebar-link list-unstyled collapse" data-parent="#sidebar">
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link">Member 1</a>
                                </li>
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link">Member 2</a>
                                </li>
                            </ul> --> */}
                        </li>
                    </ul>
                </div>
            </aside>

        </div>
    )
}

export default SidebarComponent