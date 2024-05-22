import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Network } from "vis-network";

const GraphVisualization = ({ graphData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (graphData && containerRef.current) {
      const network = new Network(containerRef.current, graphData, {});
    }
  }, [graphData]);

  return <Box ref={containerRef} width="100%" height="400px" border="1px solid #ccc" borderRadius="md" />;
};

export default GraphVisualization;
