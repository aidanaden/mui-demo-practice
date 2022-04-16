import {
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export default function index() {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
      }}
      flex={2}
      p={2}
    >
      <Box position="fixed" w={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/9.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/burgers.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
      </Box>
    </Box>
  );
}
