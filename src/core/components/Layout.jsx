import { Box, Grid, Stack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box
      backgroundImage={"url(classroom.png)"}
      backgroundSize="contain"
      backgroundRepeat={"no-repeat"}
      backgroundPosition="center"
      w="-moz-max-content"
      h="calc(100vh)"
    >
      <Grid justifyContent="center">
        <Stack>{children}</Stack>
      </Grid>
    </Box>
  );
}
