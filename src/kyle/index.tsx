
import React from 'react'
// import { Box, Button, Snackbar, Alert, Typography } from '@mui/material'
//import Demo from './demo'
import RichObjectTreeView from './RichObjectTreeView.tsx'
//import RecursiveProperty from './RecursiveProperty';
import RecursiveComponent from 'react-json-component';
import './index.css';


const Component: React.FC = () => {

    return(
        <div className="index">
            <RichObjectTreeView/>
            <RecursiveComponent
            property={testJson}
            propertyName="Root Property"
            excludeBottomBorder={false}
            rootProperty={true}/>
      </div>
    )
}

export default Component;

const testJson = {
    "problems": [{
        "Diabetes":[{
            "medications":[{
                "medicationsClasses":[{
                    "className":[{
                        "associatedDrug":[{
                            "name":"asprin",
                            "dose":"",
                            "strength":"500 mg"
                        }],
                        "associatedDrug#2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg"
                        }]
                    }],
                    "className2":[{
                        "associatedDrug":[{
                            "name":"asprin",
                            "dose":"",
                            "strength":"500 mg"
                        }],
                        "associatedDrug#2":[{
                            "name":"somethingElse",
                            "dose":"",
                            "strength":"500 mg"
                        }]
                    }]
                }]
            }],
            "labs":[{
                "missing_field": "missing_value"
            }]
        }],
        "Asthma":[{}]
    }]}
