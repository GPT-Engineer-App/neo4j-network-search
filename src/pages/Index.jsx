import React, { useState } from "react";
import { Container, Input, Button, VStack, HStack, Box, Text, Spinner } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [graphData, setGraphData] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    // Simulate fetching data from Neo4j
    setTimeout(() => {
      // This is where you would fetch data from Neo4j and set it
      setGraphData({
        nodes: [
          { id: 1, label: "Node 1" },
          { id: 2, label: "Node 2" },
          { id: 3, label: "Node 3" },
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 2, to: 3 },
        ],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handleSearch}>
            Search
          </Button>
        </HStack>
        {loading && <Spinner size="xl" />}
        {graphData && (
          <Box width="100%" height="400px" border="1px solid #ccc" borderRadius="md" p={4}>
            <Text fontSize="xl" mb={4}>
              Graph Data
            </Text>
            <Text>Nodes:</Text>
            <ul>
              {graphData.nodes.map((node) => (
                <li key={node.id}>{node.label}</li>
              ))}
            </ul>
            <Text>Edges:</Text>
            <ul>
              {graphData.edges.map((edge) => (
                <li key={`${edge.from}-${edge.to}`}>{`From ${edge.from} to ${edge.to}`}</li>
              ))}
            </ul>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
