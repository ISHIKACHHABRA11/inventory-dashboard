import { useParams } from "react-router-dom";
import { useState } from "react";
import { sidebarData } from "../data/mockSidebarData";
import Sidebar from "../components/Sidebar";

export default function DetailsPage() {
  const { id } = useParams();
  const fetchedData = sidebarData[id] || [];
  const [selectedStack, setSelectedStack] = useState(fetchedData[0] || null); //by default keeping 1st selected

  console.log("Fetched data for city id", id, "is", fetchedData);
  console.log("Selected stack is", selectedStack);
  return (
    <>
      <Sidebar stacks={fetchedData} setSelectedStack={setSelectedStack} />

      {/* Main dashboard */}
      <div style={{ marginLeft: 320 }}>
        {selectedStack && <h2>{selectedStack.stackName}</h2>}
      </div>
    </>
  );
}
