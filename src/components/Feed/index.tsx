import Box from "@mui/material/Box";
import Post from "../Post";

export default function index() {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
