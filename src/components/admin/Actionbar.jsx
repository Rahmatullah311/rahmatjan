import { Box, ButtonGroup, Button } from "@mui/material";
import React from "react";
import {
  AddOutlined,
  PreviewOutlined,
  EditOutlined,
  DeleteOutline,
} from "@mui/icons-material";

const Actionbar = () => {
  return (
    <div>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button>
              <PreviewOutlined />
              <span>View</span>
            </Button>
            <Button>
              <AddOutlined />
              <span>Create</span>
            </Button>
            <Button>
              <EditOutlined />
              <span>Edit</span>
            </Button>
            <Button>
              <DeleteOutline />
              <span>Delete</span>
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    </div>
  );
};

export default Actionbar;
