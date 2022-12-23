import React, { useRef } from 'react'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TreeItem from '@mui/lab/TreeItem'
import { JSONValue } from './types'

interface Props {
	data: JSONValue
}

const ComplexObjectTreeView: React.FC<Props> = ({ data }) => {
	const nodeId = useRef(1)	// TreeView requires a different NodeId must be provided for every TreeItem

	const renderTree = (nodes: JSONValue) =>
	{
		return (
			<>
				{Object.keys(nodes).map((property) => {
					if (typeof nodes[property] === 'object') {
						const label = String(property)
						return (
							<TreeItem
								key={label}
								nodeId={String(nodeId.current++)}
								label={label}
								sx={{ textAlign: 'left' }}
							>
								{renderTree(nodes[property])}
							</TreeItem>
						)
					} else if (
						typeof nodes[property] === 'number' ||
						typeof nodes[property] === 'string' ||
						typeof nodes[property] === 'boolean')
					{
						const label = `${property}: ${String(nodes[property])}`
						return (
							<TreeItem
								key={label}
								nodeId={String(nodeId.current++)}
								label={label}
								sx={{ textAlign: 'left' }}
							/>
						)
					}
					return <TreeItem nodeId={String(nodeId.current++)}></TreeItem>
				})
			}
			</>
		)
	}

	return (
		<TreeView
			aria-label='rich object'
			defaultCollapseIcon={<ExpandMoreIcon />}
			defaultExpanded={['root']}
			defaultExpandIcon={<ChevronRightIcon />}
			sx={{ height: 'auto', flexGrow: 1, textAlign: 'left', width: '100%', overflowY: 'visible' }}
		>
			{renderTree(data)}
		</TreeView>
	)
}

export default ComplexObjectTreeView