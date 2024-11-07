import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { data } from "../utils/data";

const ProjectTable = () => {
  const [projects, setProjects] = useState(data);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    name: "",
    country: "",
    email: "",
    project: "",
    status: "",
  });
  const [statusDropdownVisible, setStatusDropdownVisible] = useState<
    number | null
  >(null);

  const sortProjects = (key: string) => {
    let sortedProjects = [...projects];
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      setSortConfig({ key, direction: "descending" });
    } else {
      sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortConfig({ key, direction: "ascending" });
    }
    setProjects(sortedProjects);
  };

  const handleSortOptionClick = (key: string) => {
    sortProjects(key);
    setDropdownVisible(false);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedProjects = projects.map((project, i) =>
      i === index
        ? {
            ...project,
            status: newStatus,
            progress: newStatus === "Completed" ? "100%" : project.progress,
          }
        : project
    );
    setProjects(updatedProjects);
    setStatusDropdownVisible(null);
  };

  const filteredProjects = projects.filter(
    (project) =>
      (searchQuery === "" ||
        Object.values(project).some((value) =>
          value.toLowerCase().includes(searchQuery.toLowerCase())
        )) &&
      (filters.name === "" ||
        project.client.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.country === "" ||
        project.country
          .toLowerCase()
          .includes(filters.country.toLowerCase())) &&
      (filters.email === "" ||
        project.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.project === "" ||
        project.project
          .toLowerCase()
          .includes(filters.project.toLowerCase())) &&
      (filters.status === "" ||
        project.status.toLowerCase().includes(filters.status.toLowerCase()))
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full px-20 py-5 justify-center items-center min-h-screen bg-gray-900">
      <div className="flex flex-wrap items-center mb-6 gap-4">
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded-lg w-full sm:w-auto hover:bg-gray-700 transition-all duration-200"
          >
            <BiSort className="mr-1" />
            Sort
            <AiOutlineDown className="ml-2" />
          </button>
          {dropdownVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
              {["Name", "Country", "Date"].map((key) => (
                <button
                  key={key}
                  onClick={() => handleSortOptionClick(key.toLowerCase())}
                  className="block px-4 py-2 text-white w-full hover:bg-gray-700"
                >
                  {key}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setFiltersVisible(!filtersVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded-lg w-full sm:w-auto hover:bg-gray-700 transition-all duration-200"
          >
            <MdSort className="mr-1" />
            Filters
            <AiOutlineDown className="ml-2" />
          </button>
          {filtersVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 z-10">
              {Object.keys(filters).map((filter) => (
                <div key={filter} className="mb-3">
                  <label className="block text-white capitalize">
                    Filter by {filter}:
                  </label>
                  <input
                    type="text"
                    name={filter}
                    value={filters[filter]}
                    onChange={handleFilterChange}
                    className="bg-gray-900 text-white rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto rounded border border-gray-700 text-white text-sm">
          <thead>
            <tr className="bg-gray-800">
              {["Image", "Name", "Country", "Project", "Status", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left font-medium text-gray-400"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {currentProjects.map((project, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-800 transition-all duration-150"
              >
                <td className="px-4 py-3">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-3">{project.client}</td>
                <td className="px-4 py-3">{project.country}</td>
                <td className="px-4 py-3">{project.project}</td>
                <td className="px-4 py-3">
                  <span
                    className={`${
                      project.status === "Completed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    } px-2 py-1 text-xs rounded`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="relative">
                    <BsThreeDots
                      className="cursor-pointer"
                      onClick={() => setStatusDropdownVisible(index)}
                    />
                    {statusDropdownVisible === index && (
                      <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                        {["In Progress", "Completed"].map((status) => (
                          <button
                            key={status}
                            onClick={() => handleStatusChange(index, status)}
                            className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 transition-all duration-200"
        >
          Previous
        </button>
        <span className="text-gray-400">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 transition-all duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectTable;
