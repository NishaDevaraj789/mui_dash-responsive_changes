import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  borderRadius: "10px", // Rounded corners for the search bar
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  padding: "10px",
  width: "300px",
  margin: "0 auto",
  transition: "width 0.3s",
  "&:hover": {
    width: "450px",
  },
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px", // Rounded corners for the input field
    height: "48px",
    backgroundColor: "white", // White background for the input
    "& fieldset": {
      borderColor: "white",
      transition: "border-color 0.3s",
    },
    "&:hover fieldset": {
      borderColor: "primary",
    },
  },
});

const StyledIconButton = styled(IconButton)({
  padding: "10px",
});

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh",
  borderRadius: "15px",
  minWidth: "400px",
  background: "white", // White background for the container
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
