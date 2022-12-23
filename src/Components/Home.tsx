import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from '@mui/material'
import Component from '../steve/index.tsx'
import TreeTester from '../ian/TreeTester.tsx'
import ComponentKyle from '../kyle/index.tsx'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

interface Props {}

// const Home: React.FC<Props> = ({}) => {
//   const [selectedName, setSelectedName] = useState<
//     "Ian" | "Kyle" | "Steve" | "Home"
//   >("Home");
//   return (
//     <div style={{ alignItems: "center", justifyContent: "center" }}>
//       {selectedName === "Home" ? (
//         <div style={{ flexDirection: "column" }}>
//           <button
//             style={{ height: "50px", width: "50px" }}
//             onClick={() => setSelectedName("Ian")}
//           >
//             Ian
//           </button>
//           <button style={{ height: "50px", width: "50px" }}>Kyle</button>
//           <button style={{ height: "50px", width: "50px" }}>Steve</button>
//         </div>
//       ) : //   ) : selectedName === "Ian" ? (
//       //     <TreeTester />
//       null}
//     </div>
//   );
// };

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home: React.FC<Props> = () => {
	// const [selectedName, setSelectedName] = useState<
	// 	'Ian' | 'Kyle' | 'Steve' | 'Home'
	// >('Home')
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Typography variant="h1" fontSize="3.4rem" sx={{ m: 1 }} textAlign="center">Graph UI</Typography>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='basic tabs example'
				>
					<Tab label='Steve' {...a11yProps(0)} />
					<Tab label='Ian' {...a11yProps(1)} />
					<Tab label='Kyle' {...a11yProps(2)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Component title="Steve's Graph UI Project" />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<TreeTester />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<ComponentKyle />
			</TabPanel>
		</Box>
  )
}

export default Home;
