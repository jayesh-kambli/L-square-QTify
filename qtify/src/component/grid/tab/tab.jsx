import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "../card/card";
import Context from "./../context";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    // maxWidth: 40,
    width: "100%",
    backgroundColor: "var(--color-green)",
    // backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    fontFamily: ["Poppins", "sans-serif"].join(","),
    "&:hover": {
      color: "var(--color-green)",
      //   color: "#40a9ff",
      opacity: 1,
    },
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      //   backgroundColor: "#34C94B",
      backgroundColor: "rgba(100, 95, 228, 1)",
    },
  })
);

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      //   role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      //   aria-labelledby={`tab-${index}`}
      //   {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

export default function CustomizedTabs({ allFilters, allSongs }) {
  const [value, setValue] = React.useState(0);
//   const [filterArray, filterArrayFn] = React.useState({});
  const { filterArray, filterArrayFn } = useContext(Context);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    filterArrayFn(allFilters[newValue].key);
    // console.log(newValue);
  };


  return (
    <Box sx={{ width: "100%" }}>
        <Box>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
            sx={{ marginBottom: "1rem" }}
          >
            {allFilters.map((fil, ind) => (
              <StyledTab label={fil.label} key={fil.key}/>
            ))}
          </StyledTabs>
          {/* <Box sx={{ padding: "1px" }}>
          {value === 0 && <div>Content for Workflows</div>}
          {value === 1 && <div>Content for Datasets</div>}
          {value === 2 && <div>Content for Connections</div>}
          {value === 3 && <div>Content for Connections</div>}
          {value === 4 && <div>Content for Connections</div>}

          {allFilters.map((fil, ind) => (
            <TabPanel value={value} index={ind}>
              {fil.key}
            </TabPanel>
          ))}
        </Box> */}
        </Box>
    </Box>
  );
}