import React, { useState, useEffect } from 'react'
import { JSONValue } from './types'
import { Box, Button, Snackbar, Alert, Typography, Slide } from '@mui/material'
import ComplexObjectTreeView from './ComplexObjectTreeView.tsx'

interface Props {
	title?: string
}

// Convert ArrayBuffer to tring
function ab2str(buf: ArrayBuffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

const Component: React.FC<Props> = ({
	title = 'Complex Object Treeview',
}) => {
	const [data, setData] = useState<JSONValue>({})
	const [fileName, setFileName] = useState('data.json')
	const [fileError, setFileError] = useState(false)

	useEffect(() => {
		fetch('data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response: Response) => response.json())
			.then((result: JSONValue) => {
				console.log('Setting', result)
				setData(result)
			})
			.catch(err => {
				console.log('Problem reading json data', err)
			})
	}, [])

	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const targetFile = e.target.value
		const fileReader = new FileReader()
		fileReader.readAsText(e.target.files[0], 'UTF-8')
		fileReader.onload = e => {
			const fileData =
				e.target.result instanceof ArrayBuffer
					? ab2str(e.target.result)
					: e.target.result
			try {
				setData(JSON.parse(fileData))
				setFileName(
					targetFile.substring(
						targetFile.lastIndexOf('\\') + 1,
						targetFile.length
					)
				)
			} catch (e) {
				setFileError(true)
			}
		}
	}

	const handleCloseErrorSnackbar = () => {
		setFileError(false)
	}

	return (
		<Box
			sx={{
				paddingBottom: '4em',
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				minWidth: 600
			}}
		>
			{fileError && (
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={true}
					autoHideDuration={6000}
					transitionDuration={{
						enter: 500,
						exit: 500,
					}}
					TransitionComponent={props => (
						<Slide {...props} direction='left' />
					)}
					TransitionProps={{ enter: true, exit: false }}
					onClose={handleCloseErrorSnackbar}
					message='Error opening file'
				>
					<Alert
						onClose={handleCloseErrorSnackbar}
						severity='error'
						variant='filled'
						sx={{ width: '100%' }}
					>
						Error opening file. Please make sure it's valid Json!
					</Alert>
				</Snackbar>
			)}
			<Box
				sx={{
					background: '#1f2329',
					color: '#f1f2f4',
					border: '2px solid #393f4a',
					borderRadius: '10px',
					p: 3,
					m: 3,
				}}
			>
				<Typography variant='h4' sx={{ pb: 3 }}>{title}</Typography>
				<Box
					sx={{
						textAlign: 'left',
						p: 3,
						mb: 4,
						ml: 1,
						color: '#f1f2f4',
						border: '2px solid #393f4a',
						borderRadius: '10px',
					}}
				>
					<Button variant='contained' component='label' color='info'>
						{' '}
						Upload a file
						<input type='file' onChange={onFileChange} hidden />
					</Button>
					<span style={{ padding: '1rem' }}>{fileName}</span>
				</Box>
				<ComplexObjectTreeView data={data} />
			</Box>
		</Box>
	)
}

export default Component
