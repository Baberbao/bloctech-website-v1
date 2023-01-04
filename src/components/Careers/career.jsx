import React from "react";
import {
  Box,
  Grid,
  Container,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CareerSlide from "./careerSlide";
export default () => {
  const matches = useMediaQuery("(min-width: 950px)");
  const [team, setTeam] = React.useState("");
  const [work, setWork] = React.useState("");

  const handleChange = (event) => {
    setTeam(event.target.value);
  };
  const handleChange1 = (event) => {
    setWork(event.target.value);
  };
  return (
    <Box pt={10}>
      <Box
        py={3}
        my={2}
        sx={{
          background: "#F7F8F7",
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          mr={matches ? 2 : 0}
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            pt={1}
            mr={3}
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              fontSize: { md: "18px", xs: "15px" },
            }}
          >
            Team:
          </Box>
          <Box>
            <FormControl sx={{ minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small">Teams</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={team}
                label="Teams"
                onChange={handleChange}
                sx={{ color: "primary.main" }}
              >
                <MenuItem sx={{ color: "primary.main" }} value="">
                  <em>Teams</em>
                </MenuItem>
                <MenuItem sx={{ color: "primary.main" }} value={" Development"}>
                  Development
                </MenuItem>
                <MenuItem sx={{ color: "primary.main" }} value={"Design"}>
                  Design
                </MenuItem>
                <MenuItem sx={{ color: "primary.main" }} value={"Marketing"}>
                  Marketing
                </MenuItem>
                <MenuItem sx={{ color: "primary.main" }} value={"Marketing"}>
                  Growth hacking
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            pt={1}
            mr={3}
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              fontSize: { md: "18px", xs: "15px" },
            }}
          >
            Work:
          </Box>
          <Box>
            <FormControl sx={{ minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small">Work</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={work}
                label="All Teams"
                onChange={handleChange1}
                sx={{ color: "primary.main" }}
              >
                <MenuItem sx={{ color: "primary.main" }} value="">
                  <em>Work</em>
                </MenuItem>
                <MenuItem sx={{ color: "primary.main" }} value={10}>
                  Remotely
                </MenuItem>
                <MenuItem sx={{ color: "primary.main" }} value={20}>
                  Office
                </MenuItem>
                <MenuItem sx={{ color: "primary.main" }} value={30}>
                  hybrid
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>

      <Box
        my={4}
        sx={{
          color: "#3B3F6D",
          textAlign: "center",
          fontSize: { md: "30px", xs: "22px" },
          fontWeight: "bold",
        }}
      >
        121 jobs available
      </Box>

      <Container maxWidth="lg">
        {[1, 2, 3, 4].map((num, i) => {
          return (
            <Box
              mb={3}
              mx={4}
              key={i}
              p={matches ? 7 : 3}
              sx={{
                border: 2,
                borderColor: "divider",
                background: "#fff",
                borderRadius: "5px",
              }}
            >
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Box>
                    <Box color="primary.main" fontWeight="bold">
                      Web Senior Discovery Consultant
                    </Box>
                    <Box mt={2} color="primary.main">
                      Other
                    </Box>
                    <Box mt={2} sx={{ color: "#3B3F6D" }}>
                      ONGOING
                    </Box>
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "row", xs: "column" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ width: matches ? "70%" : "100%" }}>
                      <Box
                        mt={matches ? 0 : 2}
                        color="primary.main"
                        fontWeight="bold"
                      >
                        PLN 15 000 - 23 600 Before Tax (Business Contract)
                      </Box>
                      <Box mt={matches ? 0 : 2}>
                        PLN 12 500 - 19 700 Gross (Employment Contract)
                      </Box>
                      <Box color="primary.main" mt={matches ? 0 : 2}>
                        Poland (Poznań or remote work)
                      </Box>
                    </Box>
                    <Box mt={matches ? 0 : 4}>
                      <Button
                        sx={{
                          background: "#3B3F6D",
                          color: "#fff",
                          width: { xs: "100%" },
                          padding: { md: "10px 40px", xs: "10px 0px" },
                          "&:hover": {
                            background: "#3B3F6Da1",
                          },
                        }}
                      >
                        Apply
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          );
        })}

        <Box mt={10}>
          <Box
            sx={{
              color: "#3B3F6D",
              textAlign: "center",
              fontSize: { md: "35px", xs: "24px" },
              fontWeight: "bold",
              maxWidth: "550px",
              margin: "auto",
            }}
          >
            Can’t find what you’re looking for?
          </Box>
          <Box
            pt={4}
            sx={{
              color: "primary.main",
              textAlign: "center",
              fontSize: { md: "16px", xs: "13px" },
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            We’re always looking for people with unique skills. Send us your CV
            and we’ll get in touch when we have an opening that matches your
            expectations.
          </Box>
          <Box textAlign="center" mt={4}>
            <Button
              sx={{
                background: "#3B3F6D",
                color: "#fff",
                padding: "10px 40px",
                "&:hover": {
                  background: "#3B3F6Da1",
                },
              }}
            >
              Let's stay in touch
            </Button>
          </Box>
        </Box>
        <Box mt={10}>
          <Box
            sx={{
              color: "#3B3F6D",
              textAlign: "center",
              fontSize: { md: "35px", xs: "24px" },
              fontWeight: "bold",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            Be the one to shape your future. Check out our career paths.
          </Box>
          <Box
            pt={4}
            sx={{
              color: "primary.main",
              textAlign: "center",
              fontSize: { md: "16px", xs: "13px" },
              maxWidth: "500px",
              margin: "auto",
            }}
          >
            We want people with any level of experience to see a clear path of
            growth ahead of them when they join our team.
          </Box>
        </Box>

        <Grid my={3} container spacing={3}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => {
            return (
              <Grid key={i} item md={3} xs={12}>
                <Box
                  p={6}
                  sx={{
                    fontWeight: "bold",
                    border: 2,
                    borderColor: "divider",
                    background: "#fff",
                  }}
                >
                  <Box color="primary.main">Product Design</Box>
                  <Box mt={3} sx={{ color: "#3B3F6D" }}>
                    ONGOING
                  </Box>
                  <Box mt={3} color="primary.main">
                    View Career Path{" "}
                    <ArrowForwardIosIcon verticalAlign="-15px" />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        <Box mt={10} mb={4}>
          <Box
            sx={{
              color: "#3B3F6D",
              textAlign: "center",
              fontSize: { md: "35px", xs: "24px" },
              fontWeight: "bold",
              maxWidth: "450px",
              margin: "auto",
            }}
          >
            Get to know us better
          </Box>
          <Box
            pt={4}
            sx={{
              color: "primary.main",
              textAlign: "center",
              fontSize: { md: "16px", xs: "13px" },
              maxWidth: "500px",
              margin: "auto",
            }}
          >
            Find out more about what it’s like to work at Netguru, and about
            remote IT jobs! Read blog posts by our team members.
          </Box>
        </Box>
        <Box pb="40px">
          <CareerSlide />
        </Box>
      </Container>
    </Box>
  );
};
