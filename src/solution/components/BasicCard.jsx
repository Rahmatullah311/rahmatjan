import React, { Suspense } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  ButtonGroup,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DjangoLogo from "../../assets/images/django.png"; // Import image directly

const BasicCard = ({ title, content = null, slug }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card sx={{ maxWidth: 345 }}>
        {/* Apply lazy loading directly in the CardMedia component */}
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={DjangoLogo}
          alt="Django Logo"
          loading="lazy" // Lazy load image
        />
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
    </Suspense>
  );
};

BasicCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

export default BasicCard;
