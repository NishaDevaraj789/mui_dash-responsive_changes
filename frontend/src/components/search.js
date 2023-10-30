import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  padding: "10px",
  width: "100%", // Set the width to 100% to ensure it's responsive
  margin: "0 auto", // Center-align the search bar
  transition: "width 0.3s",
  "&:hover": {
    width: "100%", // Keep the width 100% on hover
  },
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    height: "48px",
    backgroundColor: "white",
    "& fieldset": {
      borderColor: "white",
      transition: "border-color 0.3s",
    },
    "&:hover fieldset": {
      borderColor: "primary",
    },
  },
}));

const StyledIconButton = styled(IconButton)({
  padding: "10px",
});

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh",
  borderRadius: "15px",
  minWidth: "300px",
  background: "white",
  boxSizing: "border-box",
});

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Add your search logic here
    console.log("Search query: " + searchQuery);
  };

  return (
    <Container>
      <div>
        <SearchContainer>
          <StyledTextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <StyledIconButton onClick={handleSearch} color="primary">
            <SearchIcon />
          </StyledIconButton>
        </SearchContainer>
      </div>
    </Container>
  );
}

export default Search;
