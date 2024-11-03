import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  ButtonGroup,
  Button,
} from "@mui/material";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import DjangoLogo from "../../assets/images/django.png";

const BasicCard = ({ title, content = null, slug }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={DjangoLogo} />
      <CardContent>
        <h1>{title}</h1>
        <p>{content}</p>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="text">
          <Link to={`/${slug}`}>
            <Button>Learn More</Button>
          </Link>

          <Link>
            <Button>Share</Button>
          </Link>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

BasicCard.prototypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default BasicCard;
