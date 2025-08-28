import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';

const initialTree = {
  name: "Mr. Suraj Das",
  id: "8740169",
  status: "active",
  avatar: "https://via.placeholder.com/50",
  children: [
    {
      name: "Mr. Raj Mani",
      id: "2906698",
      status: "inactive",
      avatar: "https://via.placeholder.com/50",
      children: [
        {
          name: "Mr. Venom",
          id: "1511216",
          status: "blocked",
          avatar: "https://via.placeholder.com/50",
          children: [
            {
              name: "Mr. MD UNUS",
              id: "7623269",
              status: "payment stop",
              avatar: "https://via.placeholder.com/50",
              children: [],
            },
          ],
        },
        {
          name: "Empty",
          id: "",
          status: "empty",
          avatar: "https://via.placeholder.com/50",
          children: [],
        },
      ],
    },
    {
      name: "Empty",
      id: "",
      status: "empty",
      avatar: "https://via.placeholder.com/50",
      children: [],
    },
  ],
};

// Utility function to get status colors
const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "bg-green-500";
    case "inactive":
      return "bg-gray-500";
    case "blocked":
      return "bg-red-500";
    case "payment stop":
      return "bg-yellow-500";
    default:
      return "bg-gray-300";
  }
};


function Tree() {
    const location = useLocation();
    const userId = new URLSearchParams(location.search).get('user_id')

    const [currentTree, setCurrentTree] = useState(initialTree);
  const [history, setHistory] = useState([initialTree]);
  const [searchQuery, setSearchQuery] = useState("");

  // Recursive function to render the tree with connecting lines
  const renderTree = (node) => (
    <div
      className="flex flex-col items-center relative w-[200px] mx-6 cursor-pointer"
      onClick={() => handleNodeClick(node.id)} // Trigger search when node is clicked
    >
      <div className="flex flex-col items-center">
        <img
          src={node.avatar}
          alt={node.name}
          className={`w-16 h-16 rounded-full border-4 ${getStatusColor(
            node.status
          )}`}
        />
        <span className="text-sm mt-2">{node.name}</span>
        {node.id && <span className="text-xs text-gray-500">{node.id}</span>}
      </div>

      {/* Render connecting line to children */}
      {node.children && node.children.length > 0 && (
        <>
          <div className="border-l-2 border-gray-400 h-6 mt-2"></div>
          <div className="flex">
            {node.children.map((child, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="border-t-2 border-gray-400 w-24"></div>
                {renderTree(child)}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  // Search for the node by ID
  const findNode = (node, id) => {
    if (node.id === id) return node;
    for (const child of node.children || []) {
      const result = findNode(child, id);
      if (result) return result;
    }
    return null;
  };

  const handleNodeClick = (id) => {
    const searchedNode = findNode(initialTree, id); // Search the node
    if (searchedNode) {
      setCurrentTree(searchedNode); // Set the node as the current view
      setHistory((prev) => [...prev, searchedNode]); // Add the node to history
      setSearchQuery(id); // Update the search query with the node ID
    } else {
      alert("Node not found");
    }
  };

  // Handle the search button click
  const handleSearch = () => {
    const searchedNode = findNode(initialTree, searchQuery); // Search for the node by search query
    if (searchedNode) {
      setCurrentTree(searchedNode); // Set the node as the current view
      setHistory((prev) => [...prev, searchedNode]); // Add the node to history
    } else {
      alert("Node not found");
    }
  };

   // Calculate counts for left, right, and active statuses
   const calculateCounts = (node) => {
    if (!node.children || node.children.length === 0)
      return { left: 0, right: 0, active: node.status === "active" ? 1 : 0 };

    const leftCounts = node.children[0]
      ? calculateCounts(node.children[0])
      : { left: 0, right: 0, active: 0 };
    const rightCounts = node.children[1]
      ? calculateCounts(node.children[1])
      : { left: 0, right: 0, active: 0 };

    return {
      left: 1 + leftCounts.left + leftCounts.right,
      right: 1 + rightCounts.left + rightCounts.right,
      active:
        (node.status === "active" ? 1 : 0) +
        leftCounts.active +
        rightCounts.active,
    };
  };

  const counts = calculateCounts(currentTree);

  // Handle moving up to the parent node
  const handleMoveUp = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setCurrentTree(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
    }
  };



  return (
    <div>
        <h1>{userId}</h1>
         {/* Search Bar */}
      <div className="flex items-center mb-6 space-x-4">
        <input
          type="text"
          className="border px-4 py-2 rounded w-1/3"
          placeholder="Search by ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center space-x-2"
        >
          <FaSearch />
          <span>Search</span>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center items-center mb-6">
        <div className="flex flex-col items-center mx-6">
          <div className="w-12 h-12 rounded-full bg-green-500"></div>
          <span>Active</span>
        </div>
        <div className="flex flex-col items-center mx-6">
          <div className="w-12 h-12 rounded-full bg-gray-500"></div>
          <span>Inactive</span>
        </div>
        <div className="flex flex-col items-center mx-6">
          <div className="w-12 h-12 rounded-full bg-red-500"></div>
          <span>Blocked</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-yellow-500"></div>
          <span>Payment Stop</span>
        </div>
      </div>

      {/* Left, Right, and Active Counts */}
      <div className="flex justify-between text-lg mb-4">
        <span className="text-red-500">LEFT: {counts.left} LPV: 0</span>
        <span className="text-blue-500">RIGHT: {counts.right} RPV: 0</span>
      </div>

      {/* Tree */}
      <div className="border p-4 bg-gray-50 rounded-lg overflow-auto">
        <div className="flex justify-center">{renderTree(currentTree)}</div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          onClick={() => setCurrentTree(initialTree)}
        >
          Home
        </button>
        <button
          className={`${
            history.length > 1
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-300 cursor-not-allowed"
          } text-white px-4 py-2 rounded`}
          onClick={handleMoveUp}
          disabled={history.length <= 1}
        >
          Move UP
        </button>
      </div>

    </div>
  )
}

export default Tree